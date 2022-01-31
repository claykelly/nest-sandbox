/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_PartApplicationSummary } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_PartApplicationSummary';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_AttributeContainer } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_AttributeContainer';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_PartApplicationSummaryContainer = {
    Applications?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_PartApplicationSummary>;
    Attributes?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_AttributeContainer;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
};
