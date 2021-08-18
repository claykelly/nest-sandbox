import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  test = async () => {
    console.log('wazzz upppp');

    return 'Done';
  };
}
