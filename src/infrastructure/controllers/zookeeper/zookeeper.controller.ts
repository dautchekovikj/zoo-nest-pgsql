import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { GetAllZookeepersOlderThan } from 'src/usecases/zookeeper/getAllZookeepersOlderThan.usesace';

@Controller('/zookeeper')
export class AnimalController {
  constructor(
    private readonly getAllZookeepersOlderThan: GetAllZookeepersOlderThan,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/olderThan/:age')
  signIn(@Param('age') age: number) {
    return this.getAllZookeepersOlderThan.getAllZookeepersOlderThan(age);
  }
}
