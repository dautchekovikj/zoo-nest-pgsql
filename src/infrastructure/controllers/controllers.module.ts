import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from 'src/auth/auth.guard';
import { UseCasesModule } from 'src/usecases/usecases.module';
import { AnimalController } from './animal/animal.controller';
import { ZookeeperController } from './zookeeper/zookeeper.controller';

@Module({
  imports: [UseCasesModule],
  providers: [
    AuthController,
    AnimalController,
    ZookeeperController,
  ],
  controllers: [AuthController, AnimalController, ZookeeperController],
  exports: [AuthController, AnimalController, ZookeeperController],
})
export class ControllersModule {}
