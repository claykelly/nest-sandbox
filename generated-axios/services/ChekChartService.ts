/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleEnginesRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleEnginesRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleMakesRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleMakesRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleModelsRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleModelsRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleYearsRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleYearsRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehiclesByChekChartRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehiclesByChekChartRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChekChartService {

    /**
     * Get Chek-Chart Vehicle Years
     * Returns all of the years for which there is data.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleYearsRs OK
     * @throws ApiError
     */
    public static getChekChartVehicleYears({
        max,
        min,
        withRel,
    }: {
        /** Specify the maximum year that should be returned. The year should be no greater than the current calendar year +1. **/
        max?: number,
        /** Specify the minimum year that can be used. The earliest year is 1961. **/
        min?: number,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleYearsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Chek-Chart/Years',
            query: {
                'Max': max,
                'Min': min,
                'WithRel': withRel,
            },
        });
    }

    /**
     * Get Chek-Chart Vehicle Makes
     * Returns all of the makes (for which there is data), for a specific vehicle year.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleMakesRs OK
     * @throws ApiError
     */
    public static getChekChartVehicleMakes({
        year,
        withRel,
    }: {
        /** A four-digit vehicle year. Valid years start at 1961 and go through the current calendar year + 1. **/
        year: number,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleMakesRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Chek-Chart/Years/{Year}/Makes',
            path: {
                'Year': year,
            },
            query: {
                'WithRel': withRel,
            },
        });
    }

    /**
     * Get Chek-Chart Vehicle Models
     * Returns a list of vehicle models and sub-models for a valid combination of a vehicle year and make.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleModelsRs OK
     * @throws ApiError
     */
    public static getChekChartVehicleModels({
        year,
        makeCode,
        withRel,
    }: {
        /** A four-digit vehicle year. Valid years start at 1961 and go through the current calendar year + 1. **/
        year: number,
        /** A two-letter code indicating the vehicle make. **/
        makeCode: string,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleModelsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Chek-Chart/Years/{Year}/Makes/{MakeCode}/Models',
            path: {
                'Year': year,
                'MakeCode': makeCode,
            },
            query: {
                'WithRel': withRel,
            },
        });
    }

    /**
     * Get Chek-Chart Vehicle Engines
     * Returns a list of engines based on the supplied year, make, and model information.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleEnginesRs OK
     * @throws ApiError
     */
    public static getChekChartVehicleEngines({
        year,
        makeCode,
        modelCode,
        withRel,
    }: {
        /** A four-digit vehicle year. Valid years start at 1961 and go through the current calendar year + 1. **/
        year: number,
        /** A two-letter code indicating the vehicle make. **/
        makeCode: string,
        /** A five-character code indicating the vehicle model. **/
        modelCode: string,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSChekChartVehicleEnginesRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Chek-Chart/Years/{Year}/Makes/{MakeCode}/Models/{ModelCode}/Engines',
            path: {
                'Year': year,
                'MakeCode': makeCode,
                'ModelCode': modelCode,
            },
            query: {
                'WithRel': withRel,
            },
        });
    }

    /**
     * Get Vehicles By Chek-Chart
     * Returns a list of vehicles based on the supplied year, make, model, and engine information.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehiclesByChekChartRs OK
     * @throws ApiError
     */
    public static getVehiclesByChekChart({
        year,
        makeCode,
        modelCode,
        engineCode,
        outputStandard = 'MOTOR',
    }: {
        /** A four-digit vehicle year. Valid years start at 1961 and go through the current calendar year + 1. **/
        year: number,
        /** A two-letter code indicating the vehicle make. **/
        makeCode: string,
        /** A five-character code indicating the vehicle model. **/
        modelCode: string,
        /** A one-character code indicating the vehicle engine. **/
        engineCode: string,
        outputStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehiclesByChekChartRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Chek-Chart/Years/{Year}/Makes/{MakeCode}/Models/{ModelCode}/Engines/{EngineCode}/Vehicles',
            path: {
                'Year': year,
                'MakeCode': makeCode,
                'ModelCode': modelCode,
                'EngineCode': engineCode,
            },
            query: {
                'OutputStandard': outputStandard,
            },
        });
    }

}