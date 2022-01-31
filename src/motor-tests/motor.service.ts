import { Injectable } from '@nestjs/common';
import { OpenAPI, VehiclesService } from '../../generated-axios';
import * as I from 'fp-ts/Identity';
import { DateTime } from 'luxon';
import { pipe } from 'fp-ts/lib/function';
import * as crypto from 'crypto';

@Injectable()
export class MotorService {
  constructor() {}

  test = async () => {
    const creds = pipe(
      I.Do,
      I.apS('keys', {
        publicKey: '5g9tHrcAen',
        privateKey: 'wRQRA8xPksF4MONWTT841012i',
      }),
      I.apS('date', DateTime.local().toUTC()),
      I.bind(
        'signatureData',
        ({ keys: { publicKey }, date }) =>
          `${publicKey}\nGET\n${Math.floor(date.toSeconds())}\n/v1/Information/YMME/Years`,
      ),
      I.bind('hash', ({ signatureData, keys: { privateKey } }) =>
        crypto.createHmac('sha256', privateKey).update(signatureData).digest('base64'),
      ),
      I.map(({ keys: { publicKey }, hash, date }) => ({
        'X-Date': date.toJSDate().toUTCString(),
        Authorization: `Shared ${publicKey}:${hash}`,
      })),
    );

    OpenAPI.HEADERS = creds;
    const api = await VehiclesService.getYears({});
    return api;
  };
}
