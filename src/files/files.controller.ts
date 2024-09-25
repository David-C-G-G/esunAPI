import { BadRequestException, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

import { diskStorage } from 'multer';
import { Response } from 'express';

import { FilesService } from './files.service';
import { fileFilter, fileNamer } from './helpers';

@ApiTags('Files')
@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService,
  ) {}

  @Get('repositorio/:archivoName')
  findArchivoRepo(
    // para regresar como tal el archivo @Res
    @Res() res: Response,
    @Param('archivoName') archivoName: string
  ){
    const path = this.filesService.getStaticRepoFile( archivoName );
    // return path;
    res.sendFile( path );
  }

  @Post('repositorio')
  @UseInterceptors( FileInterceptor('file', {
    fileFilter: fileFilter,
    // limits: { filesize: 1000 },
    storage: diskStorage({
      destination: './static/archivos',
      filename: fileNamer
    })
  }) )
  uploadRepositorioFile( 
    @UploadedFile() file: Express.Multer.File 
  ){

    //siguientes lineas identificaran si no viene el archivo entonces mandará una excepción
    if (!file){
      throw new BadRequestException('Asegurate de que el archivo sea un archivo comprimido');
    }

    // console.log({file})

    // return {
    //   fileName: file.originalname
    // };
    const secureUrl = `${ this.configService.get('HOST_API') }/files/repositorio/${ file.filename }`;

    return { secureUrl };
  }
  
}
