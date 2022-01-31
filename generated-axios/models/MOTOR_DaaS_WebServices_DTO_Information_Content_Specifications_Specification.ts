/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_DocumentSet } from './MOTOR_DaaS_WebServices_DTO_Information_Content_DocumentSet';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Note } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Note';
import type { MOTOR_DaaS_WebServices_DTO_Parameter } from './MOTOR_DaaS_WebServices_DTO_Parameter';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_Specifications_Specification = {
    DocumentSets?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_DocumentSet>;
    ExtendedParameters?: Array<MOTOR_DaaS_WebServices_DTO_Parameter>;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    MaxValue?: string;
    MinValue?: string;
    Notes?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_Note>;
    SpecificationID?: number;
    UnitOfMeasure?: string;
    Value?: string;
};
