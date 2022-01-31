/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_DocumentSetType } from './MOTOR_DaaS_WebServices_DTO_Information_Content_DocumentSetType';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_DiagnosticTroubleCodes_DTCDocumentSet = {
    Caption?: string;
    TestCode?: string;
    Type?: MOTOR_DaaS_WebServices_DTO_Information_Content_DocumentSetType;
    Documents?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument>;
    Set?: string;
};
