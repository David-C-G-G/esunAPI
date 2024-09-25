import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsIn, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateRepositorioDto {

    @ApiProperty({
        description: 'titulo del repositorio',
        nullable: false,
        minLength: 1
    })
    @IsString()
    @MinLength(1)
    title: string;

    @ApiProperty({
        description: 'repositorio docente',
        nullable: false,
        minLength: 3
    })
    @IsString()
    @MinLength(3)
    docente: string;
    
    @ApiProperty({
        description: 'repositorio materia',
        nullable: false,
        minLength: 1
    })
    @IsString()
    @MinLength(1)
    materia: string;

    @ApiProperty({
        description: 'repositorio seccion',
        required: false
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    seccion?: number; //lo puedo crear

    @ApiProperty({
        description: 'repositorio anotacion',
        required: false
    })
    @IsString()
    @IsOptional()
    anotacion?: string; //lo puedo crear

    @ApiProperty({
        description: 'repositorio comentario',
        required: false
    })
    @IsString()
    @IsOptional()
    comentario?: string //lo puedo crear
    
    @ApiProperty({
        description: 'repositorio archivo',
        nullable: true,
        required: false,
    })
    @IsString({each: true})
    @IsArray()
    @IsOptional()
    archivoComprimido?: string[] //lo puedo crear

    @ApiProperty()
    @IsString()
    @IsOptional()
    cu?: string;

    @ApiProperty()
    @IsIn(['tarea','proyecto','clase','asesoria'])
    tt: string;

}
