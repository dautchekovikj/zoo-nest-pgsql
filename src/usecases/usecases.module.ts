import { Module } from '@nestjs/common';
import { LoginUseCase } from './auth/login.usecase';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';
import { GetAllAnimalsOlderThan } from './animal/getAllAnimalsOlderThan.usesace';
import { GetAllAnimalsBy } from './animal/getAllAnimalsBy.usecase';
import { GetAllZookeeperBy } from './zookeeper/getAllZookeepersBy.usecase';
import { GetAllZookeepersOlderThan } from './zookeeper/getAllZookeepersOlderThan.usesace';

@Module({
  imports: [RepositoriesModule],
  providers: [
    LoginUseCase,
    GetAllAnimalsOlderThan,
    GetAllAnimalsBy,
    GetAllZookeepersOlderThan,
    GetAllZookeeperBy,
  ],
  exports: [
    LoginUseCase,
    GetAllAnimalsOlderThan,
    GetAllAnimalsBy,
    GetAllZookeepersOlderThan,
    GetAllZookeeperBy,
  ],
})
export class UseCasesModule {}
