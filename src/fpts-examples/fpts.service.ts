import { Injectable } from '@nestjs/common';
import { pipe, flow } from 'fp-ts/lib/function';
import {
  pluck,
  sum,
  splitAt,
  join,
  toString,
  cond,
  identity,
  T,
  always,
  isNil,
  not,
  isEmpty,
  or,
  either,
  complement,
  none,
} from 'ramda';
import * as currency from 'currency.js';
import * as TE from 'fp-ts/TaskEither';
import * as Task from 'fp-ts/Task';
import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import * as NEA from 'fp-ts/NonEmptyArray';
import * as A from 'fp-ts/Array';
import { sequenceT } from 'fp-ts/Apply';
import { DateTime, Duration, Interval } from 'luxon';

@Injectable()
export class FptsService {
  test = async () => {
    // Lets showcase some FP-TS functions
    //const nonfpts = await this.nonFPTS();

    //const fpts = this.fpts();
    const fpts = await pipe(
      this.fpts(),
      TE.getOrElse((e) => {
        throw e;
        //return Task.of('oh no');
      }),
      v => v,
    )();

    return fpts;
  };

  nonFPTS = async () => {
    const a = 1;
    const b = `${a}`
    const number = await this.someRepoCall(5);

    // fail
    let number2 = 0;
    try {
      number2 = await this.someRepoCall(6);
    } catch (error) {
      this.logThis(`Error from non fpts try catch: ${error}`);
      number2 = 5;
    }

    return number + number2;
  };

  fpts = () =>

    // pipe(
    //   this.someRepoCallTE(5),
    //   (v) => v,
    //   TE.map((number) => {return `${number}`}),
    //   (v) => v,
    // );
  pipe(
      TE.Do,
      TE.apS('number1', this.someRepoCallTE(5)),
      TE.apS('number2', this.someRepoCallTE(6)),
      v => v,

      TE.bind('number3', ({ number1, number2 }) => {return TE.right(5)}),
      v => v,
      TE.map(({ number1, number2, number3 }) => {
        this.logThis(`number1: ${number1} number2: ${number2} number3: ${number3}`);
        return number1 + number2 + number3;
      }),
      v => v,
      TE.orElse((e) => {
          this.logThis(`Error from or else: ${e}`);
          return TE.of(1);
      }),
      v => v,
    );
  somefun = (num) => {return 1};

  someRepoCall = async (num: number) => {
    if (num === 5) {
      return await Promise.resolve(5);
    } else {
      throw new Error('Num was not 5 you jackass!');
    }
  };

  someRepoCallTE = (num: number) =>
    // TODO: could showcase ramda cond here
    TE.tryCatch(
      () => this.someRepoCall(num),
      (e) => {
        this.logThis(`Error from TE try catch: ${e}`);
        return E.toError(e);
      },
    );

  // test = async () => {
  //   const v1 = (n: number) => {
  //     return n > 5 ? E.right(n) : E.left(NEA.of('too big'));
  //   };
  //   const v2 = (n: number) => {
  //     return n > 6 ? E.right(n) : E.left(NEA.of('much too big'));
  //   };
  //   const v3 = (n: number) => {
  //     return n > 7 ? E.right(n) : E.left(NEA.of('way too big'));
  //   };
  //   const number = 8;

  //   // // TODO: validation needs to be a list
  //   const validate = <E, T>(n: T, ...validations: NEA.NonEmptyArray<(n: T) => E.Either<E[], T>>) => {
  //     //const x = A.of(validations);
  //     //const x = validations.map(v => v.apply(n));
  //     return pipe(
  //       sequenceT(E.getApplicativeValidation(NEA.getSemigroup<E>()))(
  //         ...validations.map(v => v(n)),
  //         // pipe(validations, NEA.ap(n))
  //         //NEA.map(validations, v => v)
  //         ///...validations.map(v => v(n))

  //         //validat.applyions[0](n),
  //         //validations[1](n),
  //         // validations[2](n),
  //       ),
  //       E.map(() => n),
  //     );
  //   };

  //   const x = validate(number, v1, v2, v3);

  //   return 'Done';
  // };

  private logThis = (a: any) => {
    console.log(a);
    return a;
  };
}
