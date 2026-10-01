import { Controller, Get, Post, Body, Patch, Param, Delete , BadRequestException, UseGuards } from '@nestjs/common';
import { ReservationsService } from './reservations.service.js';
import { CreateReservationDto } from './dto/create-reservation.dto.js';
import { UpdateReservationDto } from './dto/update-reservation.dto.js';
import {HttpExceptionFilter} from "../common/filters/http-exception-filter.js";
import {UseFilters} from "@nestjs/common";
import { ApiKeyGuard } from '../common/guards/api-key.guard.js';
import {ResponseInterceptor} from "../common/interceptors/response.interceptor.js";
import {UseInterceptors} from "@nestjs/common";
@Controller('reservations')
@UseFilters(HttpExceptionFilter)
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  @UseInterceptors(ResponseInterceptor)
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
      // throw new BadRequestException('Reservation data is invalid');
 
  
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }
}
