import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RepositorioArchivo } from "./";
import { User } from "../../auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'repositorios'})
export class Repositorio {

    @ApiProperty({
        example: 'fc7b596c-3948-4fc1-9a55-46abfd07fa26',
        description: 'repositorio ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'Primavera 2015 FH',
        description: 'repositorio title',
    })
    @Column('text')
    title: string;

    @ApiProperty({
        example: 'jesus vazquez ramirez',
        description: 'repositorio docente',
    })
    @Column('text')
    docente: string;
    
    @ApiProperty({
        example: 'formacion humana y social',
        description: 'repositorio materia',
    })
    @Column('text')
    materia: string;
    
    @ApiProperty({
        example: 101,
        description: 'repositorio seccion',
        default: 0
    })
    @Column('numeric', {
        default: 0
    })
    seccion: number;

    @ApiProperty({
        example: 'anotacion del repositorio',
        description: 'repositorio anotacion',
        default: null
    })
    @Column('text', {
        nullable: true
    })
    anotacion: string;

    @ApiProperty({
        example: 'este es un comentario acerca del repositorio',
        description: 'repositorio comentario',
        default: null
    })
    @Column('text', {
        nullable: true
    })
    comentario: string;

    @ApiProperty({
        example: 'jesus_vazquez_ramirez_formacion_humana_y_sociall',
        description: 'repositorio cu (clave unica)',
        uniqueItems: true
    })
    @Column('text', {
        unique: true
    })
    cu: string; //cu -> clave única

    @ApiProperty({
        example: ['clase','tarea','asesoria','proyecto'],
        description: 'repositorio tt (tipo de trabajo)',
    })
    @Column('text')
    tt: string; //tt -> tipo trabajo

    @ApiProperty({
        example: 'https://evaluacion_1.rar',
        description: 'link del archivo',
    })
    @OneToMany(
        () => RepositorioArchivo,
        (repositorioArchivo) => repositorioArchivo.repositorio,
        {cascade: true, eager: true}
    )
    archivoComprimido?: RepositorioArchivo[];

    @ManyToOne(
        () => User,
        (user) => user.repositorio,
        { eager: true }
    )
    user: User;

    @BeforeInsert()
    checkCUinsert(){ //Before insert funciona para saber como queremos guardar algo antes de que sea insertado en la base de datos
        if ( !this.cu ){
            this.cu = this.docente + this.materia;        
        }

        this.cu = this.cu.toLocaleLowerCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
            .replaceAll('á','a')
            .replaceAll('é','e')
            .replaceAll('í','i')
            .replaceAll('ó','o')
            .replaceAll('ú','u')
            .replaceAll('ñ','n')
    }

    @BeforeUpdate()
    checkCUupdate(){
        if( !this.cu ){
            this.cu = this.docente + this.materia;
        }

        this.cu = this.cu.toLocaleLowerCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
            .replaceAll('á','a')
            .replaceAll('é','e')
            .replaceAll('í','i')
            .replaceAll('ó','o')
            .replaceAll('ú','u')
            .replaceAll('ñ','n')
    }

}
