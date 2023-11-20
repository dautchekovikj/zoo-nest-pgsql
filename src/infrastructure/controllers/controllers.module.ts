import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from 'src/auth/auth.guard';
import { UseCasesModule } from 'src/usecases/usecases.module';
import { AnimalController } from './animal/animal.controller';

@Module({
  imports: [UseCasesModule],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    AuthController,
    AnimalController,
  ],
  controllers: [AuthController, AnimalController],
  exports: [AuthController, AnimalController],
})
export class ControllersModule {}
