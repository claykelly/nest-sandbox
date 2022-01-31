/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Request_Vehicle_MWSBulkVehicleSearchByVINRq } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Request_Vehicle_MWSBulkVehicleSearchByVINRq';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBulkVehicleSearchByVinRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBulkVehicleSearchByVinRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VehiclesSearchBulkVinService {

    /**
     * Get Bulk Vehicles By Vin
     * Returns a list of vehicles based on a list of submitted VINs. The requested VINs must be 10 char or greater to be processed, otherwise they will not return vehicle information.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBulkVehicleSearchByVinRs OK
     * @throws ApiError
     */
    public static getBulkVehiclesByVin({
        request,
    }: {
        request: MOTOR_DaaS_WebServices_DTO_Information_Request_Vehicle_MWSBulkVehicleSearchByVINRq,
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBulkVehicleSearchByVinRs> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/Information/Vehicles/Search/Bulk/ByVIN',
            body: request,
        });
    }

}