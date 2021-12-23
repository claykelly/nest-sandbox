import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FptsService } from './fpts-examples/fpts.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FptsService],
})
export class AppModule {}
