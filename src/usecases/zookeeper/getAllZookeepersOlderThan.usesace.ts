import { Injectable } from '@nestjs/common';
import { DatabaseZookeeperRepository } from 'src/infrastructure/repositories/zookeeper.repository';

@Injectable()
export class GetAllZookeepersOlderThan {
  constructor(private zookeeperRepository: DatabaseZookeeperRepository) {}

  async getAllZookeepersOlderThan(value: number) {
    return await this.zookeeperRepository.getAllZookeepersOlderThan(value);
  }
}
