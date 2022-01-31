/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_PageResponse } from './MOTOR_DaaS_WebServices_DTO_PageResponse';
import type { MOTOR_DaaS_WebServices_DTO_ResponseMessage } from './MOTOR_DaaS_WebServices_DTO_ResponseMessage';

export type MOTOR_DaaS_WebServices_DTO_ResponseHeader = {
    Date?: string;
    Messages?: Array<MOTOR_DaaS_WebServices_DTO_ResponseMessage>;
    PagingInfo?: MOTOR_DaaS_WebServices_DTO_PageResponse;
    Status?: string;
    StatusCode?: number;
};
