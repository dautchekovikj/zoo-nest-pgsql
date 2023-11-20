import { Repository } from 'typeorm';
import { ZookeeperRepository } from 'src/domain/repositories/zookeeper.repository.interface';
import { ZookeeperModel } from 'src/domain/model/zookeeper.model';
export declare class DatabaseZookeeperRepository implements ZookeeperRepository {
    private readonly userEntityRepository;
    constructor(userEntityRepository: Repository<ZookeeperRepository>);
    getAllZookeepersBy(column: string, value: string): Promise<ZookeeperModel>[];
}
