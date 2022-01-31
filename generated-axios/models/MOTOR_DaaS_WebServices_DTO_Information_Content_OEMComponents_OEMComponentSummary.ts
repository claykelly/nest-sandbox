/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_OEMComponents_OEMComponent } from './MOTOR_DaaS_WebServices_DTO_Information_Content_OEMComponents_OEMComponent';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_WiringDiagrams_WiringApp } from './MOTOR_DaaS_WebServices_DTO_Information_Content_WiringDiagrams_WiringApp';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_OEMComponents_OEMComponentSummary = {
    Applications?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_WiringDiagrams_WiringApp>;
    Description?: string;
    ID?: number;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    Legend?: MOTOR_DaaS_WebServices_DTO_Information_Content_OEMComponents_OEMComponent;
};
