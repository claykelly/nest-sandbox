/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_PositionInfo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_PositionInfo';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_TaxonomyInfo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_TaxonomyInfo';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_EstimatedWorkTimes_IncludedOperation = {
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    OperationID?: number;
    Position?: MOTOR_DaaS_WebServices_DTO_Information_Content_PositionInfo;
    Taxonomy?: MOTOR_DaaS_WebServices_DTO_Information_Content_TaxonomyInfo;
};
