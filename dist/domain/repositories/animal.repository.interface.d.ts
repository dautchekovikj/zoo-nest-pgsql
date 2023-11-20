import { AnimalModel } from '../model/animal.model';
export interface AnimalRepository {
    getAllAnimalsBy(column: string, value: string): Promise<AnimalModel>[];
    getAllAnimalsOlderThan(value: number): Promise<AnimalModel[]>;
}
