import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";


export class PaginacionDto {

    @ApiProperty({
        default: 10,
        description: 'cuantos renglones necesitas'
    })
    @IsOptional()
    @IsPositive()
    @Type( () => Number )
    limite_entidades?: number;
    
    @ApiProperty({
        default: 0,
        description: 'cuantas páginas quieres saltar'
    })
    @IsOptional()
    @Min(0)
    @Type( () => Number )
    pagina?: number;
}