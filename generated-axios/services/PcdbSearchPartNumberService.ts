/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_PCDB_MWSPCDBPartListRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_PCDB_MWSPCDBPartListRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PcdbSearchPartNumberService {

    /**
     * Get PCDB Part Details By Part Number
     * Gets details of a PCDB part by part number
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_PCDB_MWSPCDBPartListRs OK
     * @throws ApiError
     */
    public static getPcdbPartDetailsByPartNumber({
        attributeType,
        attributeId,
        partNumber,
        ax,
        bd,
        br,
        bs,
        cb,
        co,
        dt,
        en,
        mb,
        sm,
        sp,
        st,
        tr,
        wb,
        attributeStandard = 'MOTOR',
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'BaseVehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        /** The OEM Part Number to search for.  Full or partial Part Numbers are accepted. **/
        partNumber?: string,
        /** Axle Type ID **/
        ax?: number,
        /** Bed Type ID **/
        bd?: number,
        /** Brake Type ID **/
        br?: number,
        /** Body Style ID **/
        bs?: number,
        /** Cab Type ID **/
        cb?: number,
        /** Country ID **/
        co?: number,
        /** Drive Type ID **/
        dt?: number,
        /** Engine ID **/
        en?: number,
        /** Manufacture Body Code ID **/
        mb?: number,
        /** Sub-Model ID **/
        sm?: number,
        /** Spring ID **/
        sp?: number,
        /** Steering ID **/
        st?: number,
        /** Transmission ID **/
        tr?: number,
        /** Wheel Base ID **/
        wb?: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_PCDB_MWSPCDBPartListRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/PCDB/Details/Of/Parts',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'PartNumber': partNumber,
                'AX': ax,
                'BD': bd,
                'BR': br,
                'BS': bs,
                'CB': cb,
                'CO': co,
                'DT': dt,
                'EN': en,
                'MB': mb,
                'SM': sm,
                'SP': sp,
                'ST': st,
                'TR': tr,
                'WB': wb,
                'AttributeStandard': attributeStandard,
            },
        });
    }

}