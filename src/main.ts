import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await createBaseAppContext();
  const appService = app.get(AppService);
  const x = await appService.test();
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
