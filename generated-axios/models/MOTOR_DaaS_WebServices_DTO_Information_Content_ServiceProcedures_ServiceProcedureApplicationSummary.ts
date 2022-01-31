/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ApplicationRelationType } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ApplicationRelationType';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ContentCategory } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ContentCategory';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ContentSilo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ContentSilo';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_MappedAttribute } from './MOTOR_DaaS_WebServices_DTO_Information_Content_MappedAttribute';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_PositionInfo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_PositionInfo';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_QualifierInfo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_QualifierInfo';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ServiceProcedures_ServiceProcedureSummary } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ServiceProcedures_ServiceProcedureSummary';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_BaseVehicle } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_BaseVehicle';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_ServiceProcedures_ServiceProcedureApplicationSummary = {
    SortOrderSequence?: number;
    Category?: MOTOR_DaaS_WebServices_DTO_Information_Content_ContentCategory;
    Item?: MOTOR_DaaS_WebServices_DTO_Information_Content_ServiceProcedures_ServiceProcedureSummary;
    /**
     * Unique identifier which indexes the defining attributes of the data item.
     */
    ApplicationID?: number;
    BaseVehicle?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_BaseVehicle;
    AppRelationType?: MOTOR_DaaS_WebServices_DTO_Information_Content_ApplicationRelationType;
    AttributeMappings?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_MappedAttribute>;
    ContentSilos?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_ContentSilo>;
    DisplayName?: string;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
    Position?: MOTOR_DaaS_WebServices_DTO_Information_Content_PositionInfo;
    Qualifiers?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_QualifierInfo>;
};
