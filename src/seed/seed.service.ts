import { Injectable } from '@nestjs/common';
import { RepositorioService } from '../repositorio/repositorio.service';
import { initialData } from './data/seed-data';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {

  constructor (
    private readonly repositorioService: RepositorioService,

    @InjectRepository( User )
    private readonly userRepository: Repository<User>,
  ){}  
 
  async runSeed(){

    await this.deleteTables();
    const adminUser = await this.insertUsers();
    await this.insertNewRepositories( adminUser );

    return 'SEED EXECUTED';
  }

  private async deleteTables(){

    await this.repositorioService.deleteAllRepositorios();
    const queryBuilder = this.userRepository.createQueryBuilder();
    await queryBuilder
      .delete()
      .where({})
      .execute()
  }

  private async insertUsers(){

    const seedUsers = initialData.users;
    const users: User[] = [];

    seedUsers.forEach( user => {
      users.push( this.userRepository.create( user ) )
    });

    const dbUsers = await this.userRepository.save( seedUsers )
    return dbUsers[0];
  }

  private async insertNewRepositories( user: User ){
    await this.repositorioService.deleteAllRepositorios();

    const repositorios = initialData.repositorios;

    const insertPromises = [];

    repositorios.forEach( repositorio => {
      insertPromises.push( this.repositorioService.create( repositorio, user ) );
    });

    await Promise.all( insertPromises );

    return true;
  }

}
