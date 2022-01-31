/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MOTOR_DaaS_WebServices_DTO_Information_Content_QualifierInfo = {
    /**
     * Textual description of the qualifier, used for display.
     */
    Description?: string;
    /**
     * Categorization of the qualifier, the top level is Type, followed by Family.
     */
    Family?: string;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    QualifierID?: number;
    Sequence?: number;
    /**
     * Categorization of the qualifier, the top level is Type, followed by Family.
     */
    Type?: string;
};
