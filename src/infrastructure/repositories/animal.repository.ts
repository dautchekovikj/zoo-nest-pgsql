import { AnimalRepository } from 'src/domain/repositories/animal.repository.interface';
import { Animal } from '../entities/animal.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { AnimalModel } from 'src/domain/model/animal.model';

@Injectable()
export class DatabaseAnimalRepository implements AnimalRepository {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  async getAllAnimalsOlderThan(value: number): Promise<AnimalModel[]> {
    const result: AnimalModel[] = [];
    const animals: Animal[] = await this.animalRepository.find({
      where: {
        age: MoreThanOrEqual(value),
      },
    });
    animals.forEach((element) => {
      result.push(this.toAnimal(element));
    });
    return result;
  }

  getAllAnimalsBy(column: string, value: string): Promise<AnimalModel[]> {
    throw new Error('Method not implemented.' + column + value);
  }

  private toAnimal(animalEntity: Animal): AnimalModel {
    const animalModel: AnimalModel = new AnimalModel();
    animalModel.id = animalEntity.id;
    animalModel.name = animalEntity.name;
    animalModel.type = animalEntity.type;
    animalModel.age = animalEntity.age;
    animalModel.gender = animalEntity.gender;
    return animalModel;
  }
}
