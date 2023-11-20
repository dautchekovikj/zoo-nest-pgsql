import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { GetAllAnimalsOlderThan } from 'src/usecases/animal/getAllAnimalsOlderThan.usesace';

@Controller('/animal')
export class AnimalController {
  constructor(
    private readonly getAllAnimalsOlderThan: GetAllAnimalsOlderThan,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/olderThan/:age')
  signIn(@Param('age') age: number) {
    return this.getAllAnimalsOlderThan.getAllAnimalsOlderThan(age);
  }
}
