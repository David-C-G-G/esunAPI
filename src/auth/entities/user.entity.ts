import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Repositorio } from "../../repositorio/entities";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique: true
    })
    email: string;
    
    @Column('text', {
        select: false,
    })
    password: string;
    
    
    @Column('text')
    fullName: string;
    
    
    @Column('bool', {
        default: true
    })
    isActive: boolean;
    
    @Column('text',{
        array: true,
        default: ['user']
    })
    roles: string[];

    @Column('text',{
        nullable: true
    })
    cedula?: string

    @OneToMany(
        () => Repositorio,
        (repositorio) => repositorio.user,
    )
    repositorio: Repositorio;

    @BeforeInsert()
    checkFieldBeforeInsert(){
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldBeforeUpdate(){
        this.checkFieldBeforeInsert();
    }
}
