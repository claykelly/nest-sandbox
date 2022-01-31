/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ComponentLocations_CompLocApplicationSummary } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ComponentLocations_CompLocApplicationSummary';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_AttributeContainer } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_AttributeContainer';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_ComponentLocations_CompLocSummaryContainer = {
    Applications?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_ComponentLocations_CompLocApplicationSummary>;
    Attributes?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_AttributeContainer;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
};
