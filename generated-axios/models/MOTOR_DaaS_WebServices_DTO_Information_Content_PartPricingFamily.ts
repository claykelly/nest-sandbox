/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Manufacturer } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Manufacturer';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricing } from './MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricing';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_PartApplicationSummary } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_PartApplicationSummary';
import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_Country } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_Country';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricingFamily = {
    CountryInfo?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_Country;
    ManufacturerInfo?: MOTOR_DaaS_WebServices_DTO_Information_Content_Manufacturer;
    Pricing?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricing>;
    PricingFamilyID?: number;
    Applications?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_Parts_PartApplicationSummary>;
};
