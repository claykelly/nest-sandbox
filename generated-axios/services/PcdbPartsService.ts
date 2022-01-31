/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_PCDB_MWSPCDBPartListRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_PCDB_MWSPCDBPartListRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PcdbPartsService {

    /**
     * Get PCDB Part Details By Application Relation
     * Gets details of a PCDB part by a specified application relation
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_PCDB_MWSPCDBPartListRs OK
     * @throws ApiError
     */
    public static getPcdbPartDetailsByApplicationRelation({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        filter,
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'BaseVehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        /** A content type describing the relation being specified. **/
        contentType: 'AftermarketPartsCatalog' | 'ComponentLocations' | 'DiagnosticTroubleCodes' | 'ECSGuide' | 'EstimatedWorkTimes' | 'Fluids' | 'MaintenanceSchedules' | 'Parts' | 'PartVectorIllustrationLayers' | 'PartVectorIllustrations' | 'PCDBParts' | 'ServiceProcedures' | 'Specifications' | 'TechnicalServiceBulletins' | 'VehicleImages' | 'WiringDiagrams',
        /** The application ID of an application record. **/
        applicationId: number,
        filter?: 'OEMNotApplicable',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_PCDB_MWSPCDBPartListRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/PCDB/Details/Of/Parts/RelatedTo/{ContentType}/{ApplicationID}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'ContentType': contentType,
                'ApplicationID': applicationId,
            },
            query: {
                'Filter': filter,
            },
        });
    }

}