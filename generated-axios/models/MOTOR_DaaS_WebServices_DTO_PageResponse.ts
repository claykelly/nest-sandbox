/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_PageResponse = {
    EndIndex?: number;
    ItemsPerPage?: number;
    StartIndex?: number;
    TotalItemCount?: number;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
};
