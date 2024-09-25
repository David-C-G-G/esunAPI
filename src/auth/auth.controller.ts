import { Controller, Get, Post, Body, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { Auth, GetUser, RawHeaders } from './decorators';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';
import { ValidRoles } from './interfaces';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    // @Req() request: Express.Request,
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    // @RawHeaders() rawHeaders: string[]
  ){
    // console.log({user: request.user});
    // console.log({user});
    return {
      ok: true,
      message: 'Hola mundo testingprivateRoute',
      user: {
        user,
        userEmail,
        // rawHeaders,
      }
    }
  }

  // @Get('private2')
  // // @SetMetadata('roles', ['admin','super-user'])
  // // @RoleProtected( ValidRoles.admin, ValidRoles.superUser )
  // @UseGuards( AuthGuard(), UserRoleGuard)
  // privateRoute2(
  //   @GetUser() user: User
  // ){

  //   return {
  //     ok: true,
  //     user,
  //   }
  // }
  
  @Get('private3')
  @Auth( ValidRoles.user )
  privateRoute2(
    @GetUser() user: User
  ){

    return {
      ok: true,
      user,
    }
  }

}
