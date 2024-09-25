import { join } from 'path';
import { existsSync } from 'fs';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  

    getStaticRepoFile( archivoName: string ){

        const path = join( __dirname, '../../static/archivos', archivoName );

        if( !existsSync(path) ) throw new BadRequestException(`Repositorio con el archivo no encontrado ${archivoName}`);

        return path;
    }

}
