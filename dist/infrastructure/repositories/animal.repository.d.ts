import { AnimalRepository } from 'src/domain/repositories/animal.repository.interface';
import { Animal } from '../entities/animal.entity';
import { Repository } from 'typeorm';
import { AnimalModel } from 'src/domain/model/animal.model';
export declare class DatabaseAnimalRepository implements AnimalRepository {
    private readonly animalRepository;
    constructor(animalRepository: Repository<Animal>);
    getAllAnimalsOlderThan(value: number): Promise<AnimalModel[]>;
    getAllAnimalsBy(column: string, value: string): Promise<AnimalModel>[];
    private toAnimal;
}
