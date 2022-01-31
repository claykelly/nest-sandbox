/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_FuelDelivery } from './MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_FuelDelivery';

export type MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_EngineInfo = {
    /**
     * Aspiration or Boost Type name – Normal, Turbocharger, Supercharged, etc.
     */
    Aspiration?: string;
    /**
     * Engine block type – V, In-line,Rotary, etc.
     */
    BlockType?: string;
    /**
     * Cubic inches of displacement represented as a whole number – 350, 400, etc.
     */
    CID?: string;
    /**
     * Cubic centimeters represented as a whole number – 2800, 3200, etc.
     */
    CylinderCC?: string;
    /**
     * Value of cylinder head name, SOHC, DOHC and OHV.
     */
    CylinderHeadType?: string;
    /**
     * Number of engine liters to one decimal point of precision - 2.8, 3.0, etc
     */
    CylinderLiter?: string;
    /**
     * Number of engine cylinders represented as a whole number – 4, 6, 8, etc.
     */
    Cylinders?: string;
    Description?: string;
    /**
     * Manufacturer unique code, 2-TC, etc.
     */
    Designation?: string;
    /**
     * Engine cylinder bore in inches to a minimum of two decimal points of precision – 1.14, 3.50, etc., or to a maximum of four decimal points of significant precision – eg. 1.233 not 1.2330.
     */
    EngineBoreInch?: string;
    /**
     * Engine cylinder bore in millimeters to a minimum of one decimal point of precision – 28.0, 32.5, etc., or to a maximum of four decimal points of significant precision – eg. 2.093 not 2.0930.
     */
    EngineBoreMetric?: string;
    EngineID?: number;
    /**
     * Engine cylinder stroke in inches to a minimum of two decimal points of precision – 1.14, 3.50, etc., or to a maximum of four decimal points of significant precision – eg. 1.233 not 1.2330.
     */
    EngineStrokeInch?: string;
    /**
     * Engine cylinder stroke in millimeters to a minimum of one decimal point of precision – 54.0, 67.5, etc., to a maximum of four decimal points of significant precision – eg. 2.093 not 2.0930.
     */
    EngineStrokeMetric?: string;
    /**
     * Unique, system generated identifier from the EngineVIN table.
     */
    EngineVIN?: string;
    FuelDeliveryInfo?: MOTOR_DaaS_WebServices_DTO_Information_VehicleInfo_Attributes_FuelDelivery;
    /**
     * Fuel type - Diesel, Gas, etc.
     */
    FuelType?: string;
    HorsePower?: string;
    /**
     * Basic ignition system type - Distributor-Breaker, Distributorless, etc.
     */
    IgnitionSystem?: string;
    /**
     * Engine Power output expressed in Kilowatts, including a decimal point only when required to represent fractional values.
     */
    KilowattPower?: string;
    /**
     * Name of component manufacturer – Allison, Borg Warner, Ford, Toyota, etc.
     */
    Manufacturer?: string;
    ManufacturerType?: string;
    /**
     * Total number of intake and exhaust vales in the engine – 8, 16, 24, etc.
     */
    Valves?: string;
    /**
     * Engine version, i.e. "Windsor", "Cleveland", "Modified", etc.
     */
    Version?: string;
};
