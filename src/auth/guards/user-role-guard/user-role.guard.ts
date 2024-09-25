import { Reflector } from '@nestjs/core';
import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/auth/entities/user.entity';
import { META_ROLES } from 'src/auth/decorators/role-protected/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {

  constructor(
    private readonly reflector:Reflector
  ){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {


    const validRoles: string[] = this.reflector.get(META_ROLES, context.getHandler())
    
    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if (!user) throw new BadRequestException('Usuario no encontrado');

    for (const role of user.roles) {
      if( validRoles.includes( role ) ){
        return true;
      }
    }

    throw new ForbiddenException(
      `El usuario ${ user.fullName } necesita un rol válido: [${ validRoles }]`
    );
  }
}
