/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Fluids_FluidApplicationSummary } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Fluids_FluidApplicationSummary';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_AttributeContainer } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_AttributeContainer';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_Fluids_FluidSummaryContainer = {
    Applications?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_Fluids_FluidApplicationSummary>;
    Attributes?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_AttributeContainer;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
};
