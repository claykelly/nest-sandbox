/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Note } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Note';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument = {
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    /**
     * Literal name.
     */
    Name?: string;
    Notes?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_Note>;
    Sequence?: number;
    Type?: string;
    Caption?: string;
    DocumentID?: number;
    /**
     * The file type of the document.
     */
    Format?: string;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
};
