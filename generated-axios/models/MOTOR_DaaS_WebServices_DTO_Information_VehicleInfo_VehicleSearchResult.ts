/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleSearchItem } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleSearchItem';

export type MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleSearchResult = {
    /**
     * Type of search - VIN, YMME
     */
    SearchType?: string;
    Vehicles?: Array<MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleSearchItem>;
};
