/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Request_Vehicle_MWSBulkVehicleSearchInputCriteria } from './MOTOR_DaaS_WebServices_DTO_Information_Request_Vehicle_MWSBulkVehicleSearchInputCriteria';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleSearchItem } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleSearchItem';

export type MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_BulkVehicleSearchResult = {
    InputCriteria?: MOTOR_DaaS_WebServices_DTO_Information_Request_Vehicle_MWSBulkVehicleSearchInputCriteria;
    Vehicles?: Array<MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_VehicleSearchItem>;
};
