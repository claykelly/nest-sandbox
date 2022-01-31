/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleSummaryRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleSummaryRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VehiclesSearchTextService {

    /**
     * Get Vehicles By Search Term
     * Returns a list of vehicles based on free text value search that may include year, make name, or model name.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleSummaryRs OK
     * @throws ApiError
     */
    public static getVehiclesBySearchTerm({
        searchTerm,
        vehicleTypes,
        itemsPerPage,
        maxYear,
        minYear,
        pageIndex,
        withRel,
        attributeStandard = 'MOTOR',
    }: {
        /** Searching supports phrases that include two or four digit years, partial or complete vehicle make names, and partial or complete vehicle model names or a combination of all three. **/
        searchTerm?: string,
        /** The Vehicle Type identifies the type of vehicle. Supported types are car, truck, and van. The IDs can be retrieved from the Vehicle Type service. **/
        vehicleTypes?: Array<number>,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Search/ByTerm',
            query: {
                'SearchTerm': searchTerm,
                'VehicleTypes': vehicleTypes,
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