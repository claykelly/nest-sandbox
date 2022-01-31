/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Fluids_MWSFluidSummaryRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Fluids_MWSFluidSummaryRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FluidsService {

    /**
     * Get Fluid Details By Application
     * Returns the details of the fluids that match a specific application record.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs OK
     * @throws ApiError
     */
    public static getFluidDetailsByApplication({
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Details/Of/Fluids/{ApplicationID}',
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
     * Get Fluids Summary
     * Returns the summary information for fluid applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Fluids_MWSFluidSummaryRs OK
     * @throws ApiError
     */
    public static getFluidsSummary({
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
        include,
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
        contentSilos?: '2' | '30' | '34' | '35',
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
        include?: 'Capacities' | 'Details',
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Fluids_MWSFluidSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/Fluids',
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
                'Include': include,
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
     * Get Fluids Summary With Relation
     * Returns a paged list of summarized fluids for a specified attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Fluids_MWSFluidSummaryRs OK
     * @throws ApiError
     */
    public static getFluidsSummaryWithRelation({
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
        include,
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
        appRelTypes?: '35' | '37',
        contentSilos?: '2' | '30' | '34' | '35',
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
        include?: 'Capacities' | 'Details',
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Fluids_MWSFluidSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/Fluids/RelatedTo/{ContentType}/{ApplicationID}',
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
                'Include': include,
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
     * Get Fluids Taxonomy
     * Returns the taxonomy for fluids.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs OK
     * @throws ApiError
     */
    public static getFluidsTaxonomy({
        attributeType,
        attributeId,
        contentSilos,
        groupId,
        resultType = 'DrillDown',
        subGroupId,
        systemId,
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
        contentSilos?: '2' | '30' | '34' | '35',
        /** Taxonomy groupID. **/
        groupId?: number,
        /** Determines the result type that the service will return. Valid values are DrillDown or List. When DrillDown is specified, the result will only contain the highest level of taxonomy, based on the supplied FilteredBy parameters. **/
        resultType?: 'DrillDown' | 'List',
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        /** Taxonomy systemID. **/
        systemId?: number,
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/Fluids',
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
     * Get Fluids Taxonomy With Relation
     * Returns a complete list or a filtered list of fluids taxonomy related to the supplied attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs OK
     * @throws ApiError
     */
    public static getFluidsTaxonomyWithRelation({
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
        appRelTypes?: '35' | '37',
        contentSilos?: '2' | '30' | '34' | '35',
        /** Taxonomy groupID. **/
        groupId?: number,
        /** Determines the result type that the service will return. Valid values are DrillDown or List. When DrillDown is specified, the result will only contain the highest level of taxonomy, based on the supplied FilteredBy parameters. **/
        resultType?: 'DrillDown' | 'List',
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        /** Taxonomy systemID. **/
        systemId?: number,
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/Fluids/RelatedTo/{ContentType}/{ApplicationID}',
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