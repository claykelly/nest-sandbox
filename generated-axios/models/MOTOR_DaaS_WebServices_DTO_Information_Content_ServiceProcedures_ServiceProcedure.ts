/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ServiceProcedures_ServiceProcedureDocumentSet } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ServiceProcedures_ServiceProcedureDocumentSet';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_ServiceProcedures_ServiceProcedure = {
    Data?: string;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    ReferenceSet?: MOTOR_DaaS_WebServices_DTO_Information_Content_ServiceProcedures_ServiceProcedureDocumentSet;
    Schema?: string;
    Sequence?: number;
    ProcedureID?: number;
};
