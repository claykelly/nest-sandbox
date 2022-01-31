/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleSearchRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleSearchRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VehiclesSearchVinService {

    /**
     * Get Vehicles By Vin
     * Returns a list of vehicles based on a partial or complete VIN. The results can be filtered to include only vehicles for which Estimated Work Times are available; or to include vehicles within a supplied year range.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleSearchRs OK
     * @throws ApiError
     */
    public static getVehiclesByVin({
        vin,
        include,
        itemsPerPage,
        maxYear,
        minYear,
        pageIndex,
        withRel,
        attributeStandard = 'MOTOR',
    }: {
        /** The vehicle identification number issued by the manufacturer. The minimum length is 3 characters, the maximum length is 20 characters. **/
        vin: string,
        include?: 'AddlAttributes',
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The maximum year to search against. **/
        maxYear?: number,
        /** The minimum year to search against. **/
        minYear?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleSearchRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Search/ByVIN',
            query: {
                'VIN': vin,
                'Include': include,
                'ItemsPerPage': itemsPerPage,
                'MaxYear': maxYear,
                'MinYear': minYear,
                'PageIndex': pageIndex,
                'WithRel': withRel,
                'AttributeStandard': attributeStandard,
            },
        });
    }

}