/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Note } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Note';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricingFamily } from './MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricingFamily';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_Part = {
    DisplayOrder?: number;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    Notes?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_Note>;
    /**
     * The OEM part number.
     */
    PartNumber?: string;
    PricingFamilies?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricingFamily>;
    Quantity?: number;
    Source?: MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_Part.Source;
    PartID?: number;
};

export namespace MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_Part {

    export enum Source {
        NONE = 'None',
        MECHANICAL = 'Mechanical',
        COLLISION = 'Collision',
    }


}
