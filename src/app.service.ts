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
import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import * as NEA from 'fp-ts/NonEmptyArray';
import * as A from 'fp-ts/Array';
import { sequenceT } from 'fp-ts/Apply';
import { DateTime, Duration, Interval } from 'luxon';

@Injectable()
export class AppService {
  test = async () => {
    return 1;
  };

  private logThis = (a: any) => {
    console.log(a);
    return a;
  };
}
