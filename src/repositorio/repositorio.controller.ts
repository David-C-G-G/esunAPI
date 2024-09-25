import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { RepositorioService } from './repositorio.service';
import { CreateRepositorioDto } from './dto/create-repositorio.dto';
import { UpdateRepositorioDto } from './dto/update-repositorio.dto';
import { PaginacionDto } from '../common/dtos/paginacion.dto';

import { Auth, GetUser } from '../auth/decorators';
import { User } from '../auth/entities/user.entity';
import { ValidRoles } from '../auth/interfaces';
import { Repositorio } from './entities';

@ApiTags('Repositorio')
@Controller('repositorio')
export class RepositorioController {
  constructor(private readonly repositorioService: RepositorioService) {}

  @Post()
  @Auth(ValidRoles.user)
  @ApiResponse({ status: 201, description: 'El producto a sido creado', type: Repositorio })
  @ApiResponse({ status: 400, description: 'Solicitud erronea' })
  @ApiResponse({ status: 403, description: 'Renovar Tokken' })
  create(
    @Body() createRepositorioDto: CreateRepositorioDto,
    @GetUser() user: User
  ) {
    return this.repositorioService.create(createRepositorioDto, user );
  }

  @Get()
  findAll( @Query() paginacionDto: PaginacionDto) {
    // console.log(paginacionDto);
    return this.repositorioService.findAll( paginacionDto );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repositorioService.findOnePlain(id);
  }

  // @Get(':id')
  // findOne(@Param('id', ParseUUIDPipe) id: string) {
  //   return this.repositorioService.findOne(id);
  // }

  @Patch(':id')
  @Auth(ValidRoles.user)
  @ApiResponse({ status: 200, description: 'Repositorio actualizado', type: Repositorio })
  @ApiResponse({ status: 400, description: 'Solicitud erronea' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  update(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateRepositorioDto: UpdateRepositorioDto,
    @GetUser() user: User
  ) {
    return this.repositorioService.update( id, updateRepositorioDto, user);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin)
  @ApiResponse({ status: 201, description: 'Repositorio a sido eliminado', type: Repositorio })
  @ApiResponse({ status: 400, description: 'Solicitud erronea' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.repositorioService.remove(id);
  }
}
