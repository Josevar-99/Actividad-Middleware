import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto.js';
import { UpdateReservationDto } from './dto/update-reservation.dto.js';

@Injectable()
export class ReservationsService {
    private reservations: any[] = [];
  private nextId = 1;

  create(dto: CreateReservationDto) {
    const reservation = { id: this.nextId++, ...dto };
    this.reservations.push(reservation);
    return reservation;
  }

  findAll() {
    return `This action returns all reservations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
