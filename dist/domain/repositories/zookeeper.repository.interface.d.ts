import { ZookeeperModel } from '../model/zookeeper.model';
export interface ZookeeperRepository {
    getAllZookeepersBy(column: string, value: string): Promise<ZookeeperModel>[];
}
