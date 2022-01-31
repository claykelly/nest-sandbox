/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_ChekChartVehicleEngine = {
    /**
     * Engine code
     */
    EngineCode?: string;
    /**
     * Actual engine designation
     */
    EngineName?: string;
    /**
     * Number of cylinders
     */
    Cylinders?: string;
    /**
     * Displacement in liters
     */
    Liters?: string;
    /**
     * Displacement in cubic inches
     */
    CID?: string;
    /**
     * Carburetor barrels (None indicates fuel injection)
     */
    Barrels?: string;
    /**
     * Type of induction (N=normal; T=turbocharged; S=supercharged)
     */
    Induct?: string;
    /**
     * Fuel used in engine (C=compressed natural gas; D=Diesel; F=flex-fuel; L=leaded gas; O=leaded or unleaded gas; P=propane or LPG; U=unleaded gas; V=variable fuel)
     */
    Fuel?: string;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
};
