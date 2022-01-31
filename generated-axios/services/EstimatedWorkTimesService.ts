/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_EstimatedWorkTimes_MWSEWTSummaryRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_EstimatedWorkTimes_MWSEWTSummaryRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VMRS_MWSVehicleMaintenanceReportingStandardsRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VMRS_MWSVehicleMaintenanceReportingStandardsRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EstimatedWorkTimesService {

    /**
     * Get Estimated Work Time Details By Application
     * Returns the details of the estimated work times that match a specific application record.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs OK
     * @throws ApiError
     */
    public static getEstimatedWorkTimeDetailsByApplication({
        attributeType,
        attributeId,
        applicationId,
        active,
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
        /** The application ID of an application record. **/
        applicationId: number,
        active?: boolean,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Details/Of/EstimatedWorkTimes/{ApplicationID}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'ApplicationID': applicationId,
            },
            query: {
                'Active': active,
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

    /**
     * Get Estimated Work Times Summary
     * Returns the summary information for estimated work time applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_EstimatedWorkTimes_MWSEWTSummaryRs OK
     * @throws ApiError
     */
    public static getEstimatedWorkTimesSummary({
        attributeType,
        attributeId,
        contentSilos,
        taxonomyIDs,
        groupId,
        itemsPerPage,
        pageIndex,
        searchTerm,
        subGroupId,
        systemId,
        vmrsCode,
        partTerminologyIDs,
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
        contentSilos?: '28' | '103',
        taxonomyIDs?: Array<number>,
        /** Taxonomy groupID. **/
        groupId?: number,
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
        /** Searching is performed against the taxonomy literal name field and supports partial and complete matches. **/
        searchTerm?: string,
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        /** Taxonomy systemID. **/
        systemId?: number,
        /** The 3, 6, or 9 digit VMRS code to filter the response by. **/
        vmrsCode?: string,
        partTerminologyIDs?: Array<number>,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_EstimatedWorkTimes_MWSEWTSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/EstimatedWorkTimes',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'ContentSilos': contentSilos,
                'TaxonomyIDs': taxonomyIDs,
                'GroupID': groupId,
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'SearchTerm': searchTerm,
                'SubGroupID': subGroupId,
                'SystemID': systemId,
                'VMRSCode': vmrsCode,
                'PartTerminologyIDs': partTerminologyIDs,
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

    /**
     * Get Estimated Work Times Summary With Relation
     * Returns a paged list of summarized estimated work times for a specified attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_EstimatedWorkTimes_MWSEWTSummaryRs OK
     * @throws ApiError
     */
    public static getEstimatedWorkTimesSummaryWithRelation({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        appRelTypes,
        contentSilos,
        taxonomyIDs,
        groupId,
        itemsPerPage,
        pageIndex,
        searchTerm,
        subGroupId,
        systemId,
        vmrsCode,
        partTerminologyIDs,
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
        /** A content type describing the relation being specified. **/
        contentType: 'AftermarketPartsCatalog' | 'ComponentLocations' | 'DiagnosticTroubleCodes' | 'ECSGuide' | 'EstimatedWorkTimes' | 'Fluids' | 'MaintenanceSchedules' | 'Parts' | 'PartVectorIllustrationLayers' | 'PartVectorIllustrations' | 'PCDBParts' | 'ServiceProcedures' | 'Specifications' | 'TechnicalServiceBulletins' | 'VehicleImages' | 'WiringDiagrams',
        /** The application ID of an application record. **/
        applicationId: number,
        /** A comma separated list of Application Relation Type IDs to filter the summary results. **/
        appRelTypes?: '1' | '2' | '32' | '35' | '36' | '37',
        contentSilos?: '28' | '103',
        taxonomyIDs?: Array<number>,
        /** Taxonomy groupID. **/
        groupId?: number,
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
        /** Searching is performed against the taxonomy literal name field and supports partial and complete matches. **/
        searchTerm?: string,
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        /** Taxonomy systemID. **/
        systemId?: number,
        /** The 3, 6, or 9 digit VMRS code to filter the response by. **/
        vmrsCode?: string,
        partTerminologyIDs?: Array<number>,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_EstimatedWorkTimes_MWSEWTSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/EstimatedWorkTimes/RelatedTo/{ContentType}/{ApplicationID}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'ContentType': contentType,
                'ApplicationID': applicationId,
            },
            query: {
                'AppRelTypes': appRelTypes,
                'ContentSilos': contentSilos,
                'TaxonomyIDs': taxonomyIDs,
                'GroupID': groupId,
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'SearchTerm': searchTerm,
                'SubGroupID': subGroupId,
                'SystemID': systemId,
                'VMRSCode': vmrsCode,
                'PartTerminologyIDs': partTerminologyIDs,
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

    /**
     * Get Estimated Work Times Taxonomy
     * Returns the taxonomy for estimated work times.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs OK
     * @throws ApiError
     */
    public static getEstimatedWorkTimesTaxonomy({
        attributeType,
        attributeId,
        contentSilos,
        groupId,
        resultType = 'DrillDown',
        subGroupId,
        systemId,
        partTerminologyIDs,
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
        contentSilos?: '28' | '103',
        /** Taxonomy groupID. **/
        groupId?: number,
        /** Determines the result type that the service will return. Valid values are DrillDown or List. When DrillDown is specified, the result will only contain the highest level of taxonomy, based on the supplied FilteredBy parameters. **/
        resultType?: 'DrillDown' | 'List',
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        /** Taxonomy systemID. **/
        systemId?: number,
        partTerminologyIDs?: Array<number>,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/EstimatedWorkTimes',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'ContentSilos': contentSilos,
                'GroupID': groupId,
                'ResultType': resultType,
                'SubGroupID': subGroupId,
                'SystemID': systemId,
                'PartTerminologyIDs': partTerminologyIDs,
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

    /**
     * Get Estimated Work Times Taxonomy With Relation
     * Returns a complete list or a filtered list of estimated work times taxonomy related to the supplied attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs OK
     * @throws ApiError
     */
    public static getEstimatedWorkTimesTaxonomyWithRelation({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        appRelTypes,
        contentSilos,
        groupId,
        resultType = 'DrillDown',
        subGroupId,
        systemId,
        partTerminologyIDs,
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
        /** A content type describing the relation being specified. **/
        contentType: 'AftermarketPartsCatalog' | 'ComponentLocations' | 'DiagnosticTroubleCodes' | 'ECSGuide' | 'EstimatedWorkTimes' | 'Fluids' | 'MaintenanceSchedules' | 'Parts' | 'PartVectorIllustrationLayers' | 'PartVectorIllustrations' | 'PCDBParts' | 'ServiceProcedures' | 'Specifications' | 'TechnicalServiceBulletins' | 'VehicleImages' | 'WiringDiagrams',
        /** The application ID of an application record. **/
        applicationId: number,
        /** A comma separated list of Application Relation Type IDs to filter the summary results. **/
        appRelTypes?: '1' | '2' | '32' | '35' | '36' | '37',
        contentSilos?: '28' | '103',
        /** Taxonomy groupID. **/
        groupId?: number,
        /** Determines the result type that the service will return. Valid values are DrillDown or List. When DrillDown is specified, the result will only contain the highest level of taxonomy, based on the supplied FilteredBy parameters. **/
        resultType?: 'DrillDown' | 'List',
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        /** Taxonomy systemID. **/
        systemId?: number,
        partTerminologyIDs?: Array<number>,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/EstimatedWorkTimes/RelatedTo/{ContentType}/{ApplicationID}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'ContentType': contentType,
                'ApplicationID': applicationId,
            },
            query: {
                'AppRelTypes': appRelTypes,
                'ContentSilos': contentSilos,
                'GroupID': groupId,
                'ResultType': resultType,
                'SubGroupID': subGroupId,
                'SystemID': systemId,
                'PartTerminologyIDs': partTerminologyIDs,
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

    /**
     * Get VMRS Codes
     * Returns a list of applicable VMRS Codes with Group, System, Assembly and ComponentCode information for the Base Vehicle ID passed.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VMRS_MWSVehicleMaintenanceReportingStandardsRs OK
     * @throws ApiError
     */
    public static getVmrsCodes({
        attributeType,
        attributeId,
        vmrsCode,
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
        /** The 3, 6, or 9 digit VMRS code to filter the response by. **/
        vmrsCode?: string,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VMRS_MWSVehicleMaintenanceReportingStandardsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/VMRS/Of/EstimatedWorkTimes',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'VMRSCode': vmrsCode,
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