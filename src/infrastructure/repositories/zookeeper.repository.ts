import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ZookeeperRepository } from 'src/domain/repositories/zookeeper.repository.interface';
import { Zookeeper } from '../entities/zookeeper.entity';
import { ZookeeperModel } from 'src/domain/model/zookeeper.model';
import { MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class DatabaseZookeeperRepository implements ZookeeperRepository {
  constructor(
    @InjectRepository(Zookeeper)
    private readonly zookeeperRepository: Repository<Zookeeper>,
  ) {}

  async getAllZookeepersOlderThan(value: number): Promise<ZookeeperModel[]> {
    const result: ZookeeperModel[] = [];
    const zookeepers: Zookeeper[] = await this.zookeeperRepository.find({
      where: {
        age: MoreThanOrEqual(value),
      },
    });
    zookeepers.forEach((element) => {
      result.push(this.toZookeeper(element));
    });
    return result;
  }

  getAllZookeepersBy(column: string, value: string): Promise<ZookeeperModel[]> {
    throw new Error('Method not implemented.' + column + value);
  }

  private toZookeeper(zookeeperEntity: Zookeeper): ZookeeperModel {
    const zookeeperModel: ZookeeperModel = new ZookeeperModel();
    zookeeperModel.id = zookeeperEntity.id;
    zookeeperModel.name = zookeeperEntity.name;
    zookeeperModel.age = zookeeperEntity.age;
    zookeeperModel.isActive = zookeeperEntity.isActive;
    zookeeperModel.location = zookeeperEntity.location;
    return zookeeperModel;
  }
}
