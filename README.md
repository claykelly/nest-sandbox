## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. This project serves as a testing sandbox for nest.js and libraries like fp-ts, ramda, luxon, etc...

## Installation

```bash
$ yarn
```

## Running the app

To change the service you want to run go to ./src/main.ts and update the callService funciton to call the service you want to use.

```
const callService = async (app: INestApplicationContext) => {
  const appService = app.get(AppService);
  const fptsService = app.get(FptsService);
  // change this return to use the service you want
  return await fptsService.test();
}
```

```bash
# development
$ npm run start
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
