/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_PartStatus } from './MOTOR_DaaS_WebServices_DTO_Information_Content_PartStatus';
import type { MOTOR_DaaS_WebServices_DTO_Information_PCDB_PCDBPartInfo } from './MOTOR_DaaS_WebServices_DTO_Information_PCDB_PCDBPartInfo';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricing = {
    ApproximateFlag?: string;
    /**
     * Part Pricing and Supersession information is accurate as of the effective date returned within the pricing data.
     */
    EffectiveDate?: string;
    IsCurrent?: boolean;
    MOTORPartNumber?: string;
    MOTORSuperPartNumber?: string;
    /**
     * Do not use this field.
     */
    NetCorePrice?: number;
    OEMPartNumber?: string;
    /**
     * OEM part number that has superseded another part number.
     */
    OEMSuperPartNumber?: string;
    OEPRPartNumber?: string;
    PCDBPart?: MOTOR_DaaS_WebServices_DTO_Information_PCDB_PCDBPartInfo;
    /**
     * Part price. The Part Price returned by the web services reflects the Manufacturers Suggested Retail Price; because each dealer is free to set their own pricing, the price returned by the web services may differ from what is reported by the dealer.
     */
    Price?: number;
    PricingID?: number;
    ReturnOldPart?: string;
    Status?: MOTOR_DaaS_WebServices_DTO_Information_Content_PartStatus;
};
