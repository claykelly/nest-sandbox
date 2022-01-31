/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Manufacturer } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Manufacturer';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBAutoSystem } from './MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBAutoSystem';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBComponent } from './MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBComponent';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBDTC } from './MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBDTC';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBProblem } from './MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBProblem';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBSymptom } from './MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBSymptom';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBSystem } from './MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBSystem';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBType } from './MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBType';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TechnicalServiceBulletin = {
    AutoSystems?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBAutoSystem>;
    Components?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBComponent>;
    Description?: string;
    Document?: MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument;
    DTCs?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBDTC>;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    Issuer?: MOTOR_DaaS_WebServices_DTO_Information_Content_Manufacturer;
    Problems?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBProblem>;
    Symptoms?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBSymptom>;
    Systems?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBSystem>;
    IssueDate?: string;
    ManufacturerNumber?: string;
    TSBID?: number;
    Types?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_TechnicalServiceBulletins_TSBType>;
};
