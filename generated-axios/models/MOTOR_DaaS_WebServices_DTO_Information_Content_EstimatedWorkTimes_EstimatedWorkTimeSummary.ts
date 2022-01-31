/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_EstimatedWorkTimes_Skill } from './MOTOR_DaaS_WebServices_DTO_Information_Content_EstimatedWorkTimes_Skill';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Note } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Note';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_EstimatedWorkTimes_EstimatedWorkTimeSummary = {
    /**
     * Provides additional information about what is and is not included in the estimated time.
     */
    Notes?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_Note>;
    /**
     * MOTOR estimated time to perform the operation on additional instances of the part.
     */
    AdditionalLaborTime?: number;
    /**
     * Description of the additional labor time, such as “Each Additional”.
     */
    AdditionalLaborTimeDescription?: string;
    /**
     * OEM warranty time for performing the operation on additional instances of the part.
     */
    AdditionalWarrantyLaborTime?: number;
    /**
     * Description of all labor time, such as "All", "Both", "Both Sides".
     */
    AllLaborTime?: number;
    /**
     * Description of all labor time, such as "All", "Both", "Both Sides".
     */
    AllLaborTimeDescription?: string;
    /**
     * OEM warranty time for performing the operation on all instances of the part.
     */
    AllWarrantyLaborTime?: number;
    /**
     * MOTOR estimated time to perform the operation.
     */
    BaseLaborTime?: number;
    BaseLaborTimeDescription?: string;
    /**
     * OEM warranty time for performing the operation.
     */
    BaseWarrantyLaborTime?: number;
    EstimatedWorkTimeID?: number;
    /**
     * Unit of measure, will be either Minutes or Hours.
     */
    LaborTimeInterval?: string;
    RequiredSkill?: MOTOR_DaaS_WebServices_DTO_Information_Content_EstimatedWorkTimes_Skill;
    /**
     * Grouping of types of service. Values are: Inspect or Service.
     */
    ServiceType?: string;
};
