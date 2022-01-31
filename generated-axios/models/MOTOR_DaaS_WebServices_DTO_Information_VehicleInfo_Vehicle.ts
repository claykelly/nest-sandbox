/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleCountry } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleCountry';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleSubModel } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleSubModel';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleMake } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleMake';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleModel } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleModel';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Vehicle = {
    Country?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleCountry;
    SubModel?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleSubModel;
    VehicleID?: number;
    BaseVehicleID?: number;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
    Make?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleMake;
    Model?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleModel;
    Year?: number;
};
