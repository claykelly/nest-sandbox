/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VMRS_MWSVehicleMaintenanceReportingStandardsRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VMRS_MWSVehicleMaintenanceReportingStandardsRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VmrsService {

    /**
     * Get VMRS Part Details By Application Relation
     * Returns a list of applicable VMRS Codes with Group, System, Assembly and ComponentCode information for the Base Vehicle ID and Application ID passed.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VMRS_MWSVehicleMaintenanceReportingStandardsRs OK
     * @throws ApiError
     */
    public static getVmrsPartDetailsByApplicationRelation({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        vmrsCode,
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'BaseVehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        /** A content type describing the relation being specified. **/
        contentType: 'AftermarketPartsCatalog' | 'ComponentLocations' | 'DiagnosticTroubleCodes' | 'ECSGuide' | 'EstimatedWorkTimes' | 'Fluids' | 'MaintenanceSchedules' | 'Parts' | 'PartVectorIllustrationLayers' | 'PartVectorIllustrations' | 'PCDBParts' | 'ServiceProcedures' | 'Specifications' | 'TechnicalServiceBulletins' | 'VehicleImages' | 'WiringDiagrams',
        /** The application ID of an application record. **/
        applicationId: number,
        /** The 3, 6, or 9 digit VMRS code to filter the response by. **/
        vmrsCode?: string,
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VMRS_MWSVehicleMaintenanceReportingStandardsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/VMRS/Details/Of/Parts/RelatedTo/{ContentType}/{ApplicationID}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'ContentType': contentType,
                'ApplicationID': applicationId,
            },
            query: {
                'VMRSCode': vmrsCode,
            },
        });
    }

}