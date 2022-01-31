/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_DiagnosticTroubleCodes_DTCAlias } from './MOTOR_DaaS_WebServices_DTO_Information_Content_DiagnosticTroubleCodes_DTCAlias';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_DiagnosticTroubleCodes_DTC = {
    Action?: string;
    Aliases?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_DiagnosticTroubleCodes_DTCAlias>;
    CodeType?: string;
    Description?: string;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    StepDescription?: string;
    TestCode?: string;
    TestCondition?: string;
    Code?: string;
    DTCID?: number;
};
