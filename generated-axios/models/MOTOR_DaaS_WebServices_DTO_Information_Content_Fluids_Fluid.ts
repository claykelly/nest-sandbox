/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Fluids_FluidGrade } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Fluids_FluidGrade';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Note } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Note';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricingFamily } from './MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricingFamily';
import type { MOTOR_DaaS_WebServices_DTO_Information_PCDB_PCDBPartInfo } from './MOTOR_DaaS_WebServices_DTO_Information_PCDB_PCDBPartInfo';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_Fluids_Fluid = {
    FluidID?: number;
    Grade?: MOTOR_DaaS_WebServices_DTO_Information_Content_Fluids_FluidGrade;
    GradePreference?: number;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    MaxCapacity?: number;
    Notes?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_Note>;
    PartNumber?: string;
    PCDBPart?: MOTOR_DaaS_WebServices_DTO_Information_PCDB_PCDBPartInfo;
    PricingFamilies?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_PartPricingFamily>;
    Quantity?: number;
    SpecStandard?: string;
    TempRange?: string;
    TradeName?: string;
    UnitOfMeasure?: string;
    Viscosity?: string;
    Formulation?: string;
};
