import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FptsService } from './fpts-examples/fpts.service';
import { MotorService } from './motor-tests/motor.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FptsService, MotorService],
})
export class AppModule {}
