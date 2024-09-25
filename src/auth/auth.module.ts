import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    // modulo agregado para los JWT
    PassportModule.register({ defaultStrategy: 'jwt' }),

    // configuración del JWT sincrona
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions: {
    //     expiresIn: '5h'
    //   }
    // })

    // configuración del JWT de manera asincrona
    JwtModule.registerAsync({
      imports:[ ConfigModule ],
      inject:[ ConfigService ],
      useFactory: ( configService: ConfigService ) => {

        // console.log('JWT ConfigService: ', configService.get('JWT_SECRET'));
        // console.log('Jason Web Token:', process.env.JWT_SECRET);

        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '5h',
          }
        }
      }
    })

  ],
  exports: [ TypeOrmModule, JwtStrategy, PassportModule, JwtModule ],
})
export class AuthModule {}
