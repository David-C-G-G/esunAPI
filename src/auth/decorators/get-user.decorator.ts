import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";


export const GetUser = createParamDecorator(
    ( data: string, ctx: ExecutionContext ) => {

        const req = ctx.switchToHttp().getRequest();
        const user = req.user;
        
        // console.log(user.email);

        if (!user) throw new InternalServerErrorException('Usuario no encontrado (request)');
        // if (!user) throw new InternalServerErrorException('Usuario no encontrado (request)');

        return ( !data ) ? user : user[data];
    }
);
