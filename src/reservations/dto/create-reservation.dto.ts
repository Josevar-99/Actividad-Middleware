import { IsString, IsNotEmpty, IsEmail, IsInt, Min, Max } from 'class-validator';
export class CreateReservationDto {
      @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(1)
  @Max(20)
  people: number;
}
