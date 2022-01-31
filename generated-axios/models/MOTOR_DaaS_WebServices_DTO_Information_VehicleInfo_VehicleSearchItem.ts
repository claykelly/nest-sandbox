/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_BodyStyleInfo } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_BodyStyleInfo';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_DriveTypeInfo } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_DriveTypeInfo';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_WheelBaseInfo } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_WheelBaseInfo';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleSearchItem = {
    BaseVehicleID?: number;
    BaseVehicleIsActive?: boolean;
    CountryCode?: string;
    CountryID?: number;
    EngineDescription?: string;
    EngineID?: number;
    EngineIsActive?: boolean;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
    MakeID?: number;
    MakeName?: string;
    ModelID?: number;
    ModelName?: string;
    SubModelID?: number;
    SubModelName?: string;
    VehicleID?: number;
    VehicleIsActive?: boolean;
    Year?: number;
    WheelBaseInfo?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_WheelBaseInfo;
    BodyStyleInfo?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_BodyStyleInfo;
    DriveTypeInfo?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_DriveTypeInfo;
};
