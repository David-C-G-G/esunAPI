import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { LoginUserDto, CreateUserDto } from './dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {


  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ){}


  async create(createUserDto: CreateUserDto) {
    
    try {

      //para encriptar la contraseña creamos una constante para desestructurar lo que necesitamos
      const {password, ...userData} = createUserDto;

      // modificamos esta constaten y ahora NO mandamos el createUserDto en crudo, sino desestructuramos para poder usar bcryp y hashear el password
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10),

      });
      await this.userRepository.save( user );

      // para que no sea visible el password
      delete user.password;

      //retornar el Jason Web Token de acceso
      return {
        ...user,
        // token: this.getJwt({ email: user.email }),
        token: this.getJwt({ id: user.id }),
      };


    } catch (error) {
     this.handleDBErrors(error); 
    }
  }

  async login( loginUserDto: LoginUserDto){

    const { password, email } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true, id: true }
    });

    if ( !user ) throw new UnauthorizedException(`Las credenciales no son válidas ${ email }`);

    if ( !bcrypt.compareSync(password, user.password) ) throw new UnauthorizedException('Las credenciales no son válidas (password) ');

    // regresar el Jason Web Token 
    return {
      ...user,
      token: this.getJwt({ id: user.id }),
    };

  }

  private getJwt( payload: JwtPayload){

    const token = this.jwtService.sign( payload );

    return token;
  }

  private handleDBErrors( error: any ): never {
    if(error.code === '23505'){
      throw new BadRequestException( error.detail );
    }

    console.log(error)
    throw new InternalServerErrorException('Favor de revisar los logs');
  }

}
