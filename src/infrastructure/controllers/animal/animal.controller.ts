import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/infrastructure/common/guards/auth.guard';
import { GetAllAnimalsOlderThan } from 'src/usecases/animal/getAllAnimalsOlderThan.usesace';

@Controller('/animal')
export class AnimalController {
  constructor(
    private readonly getAllAnimalsOlderThan: GetAllAnimalsOlderThan,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('/olderThan/:age')
  olderThan(@Param('age') age: number) {
    return this.getAllAnimalsOlderThan.getAllAnimalsOlderThan(age);
  }
}
