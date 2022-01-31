/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSAppRelationsTypeMappingRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSAppRelationsTypeMappingRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSContentSiloMappingRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSContentSiloMappingRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSTaxonomyByContentSiloRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSTaxonomyByContentSiloRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InformationContentCommonService {

    /**
     * Get Application Relation Type Mappings
     * The AppRelationType service is used across DaaS products with the exception of Vehicle Identification.
     *
     * This service returns a list of application relation type mappings categorized by content data type. The application relation type IDs can be used as a comma separated list to filter all summary and taxonomy services.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSAppRelationsTypeMappingRs OK
     * @throws ApiError
     */
    public static getApplicationRelationTypeMappings(): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSAppRelationsTypeMappingRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Content/Details/Of/AppRelationTypes',
        });
    }

    /**
     * Get Content Silo Mappings
     * Gets a list of content silos grouped by content data type
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSContentSiloMappingRs OK
     * @throws ApiError
     */
    public static getContentSiloMappings(): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSContentSiloMappingRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Content/Details/Of/ContentSilos',
        });
    }

    /**
     * Get Taxonomy By Content Silo
     * Returns a list of all standard taxonomies, grouped by which content silos they are applicable to.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSTaxonomyByContentSiloRs OK
     * @throws ApiError
     */
    public static getTaxonomyByContentSilo({
        contentDataTypes,
    }: {
        contentDataTypes?: 'AftermarketPartsCatalog' | 'ComponentLocations' | 'EstimatedWorkTimes' | 'Fluids' | 'MaintenanceSchedules' | 'Parts' | 'PartVectorIllustrations' | 'ServiceProcedures' | 'Specifications',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSTaxonomyByContentSiloRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Content/Details/Of/Taxonomies/By/ContentSilos',
            query: {
                'ContentDataTypes': contentDataTypes,
            },
        });
    }

}