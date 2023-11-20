import { Injectable } from '@nestjs/common';
import { DatabaseAnimalRepository } from 'src/infrastructure/repositories/animal.repository';

@Injectable()
export class GetAllZookeeperBy {
  constructor(private animalRepository: DatabaseAnimalRepository) {}

  async getAllAnimalsBy(column: string, value: string) {
    return await this.animalRepository.getAllAnimalsBy(column, value);
  }
}
