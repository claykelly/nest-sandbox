/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleCountry } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleCountry';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleSubModel } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleSubModel';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleType } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleType';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleModelItem = {
    SubModels?: Array<MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleSubModel>;
    Countries?: Array<MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_VehicleCountry>;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
    ModelID?: number;
    /**
     * Name of model based on manufactures marketing nomenclature – Malibu, Corolla, etc.
     */
    ModelName?: string;
    Type?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleType;
};
