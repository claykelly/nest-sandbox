/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleType } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleType';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleModel = {
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
    ModelID?: number;
    /**
     * Name of model based on manufactures marketing nomenclature – Malibu, Corolla, etc.
     */
    ModelName?: string;
    Type?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleType;
};
