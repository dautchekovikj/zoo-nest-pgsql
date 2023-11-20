import { GetAllAnimalsOlderThan } from 'src/usecases/animal/getAllAnimalsOlderThan.usesace';
export declare class AnimalController {
    private readonly getAllAnimalsOlderThan;
    constructor(getAllAnimalsOlderThan: GetAllAnimalsOlderThan);
    signIn(age: number): Promise<import("../../../domain/model/animal.model").AnimalModel[]>;
}
