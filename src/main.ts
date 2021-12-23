import { INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { FptsService } from './fpts-examples/fpts.service';

const callService = async (app: INestApplicationContext) => {
  const appService = app.get(AppService);
  const fptsService = app.get(FptsService);
  return await fptsService.test();
}

async function bootstrap() {
  const app = await createBaseAppContext();
  const x = await callService(app);
  console.log(JSON.stringify(x));
  await app.close();
  //await app.listen(3000);
}

export const createBaseAppContext = async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  app.enableShutdownHooks();
  return app;
};

bootstrap();
