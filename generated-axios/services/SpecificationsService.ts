/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsAbbrRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsAbbrRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsSummaryRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsSummaryRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SpecificationsService {

    /**
     * Get Specifications Abbreviations
     * This service returns a list of all of the abbreviations that are used in the specification data.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsAbbrRs OK
     * @throws ApiError
     */
    public static getSpecificationsAbbreviations(): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsAbbrRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Content/Details/Of/Specifications/Abbreviations',
        });
    }

    /**
     * Get Specification Details By Application
     * Returns the details of the specifications that match a specific application record.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs OK
     * @throws ApiError
     */
    public static getSpecificationDetailsByApplication({
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Details/Of/Specifications/{ApplicationID}',
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
     * Get Specifications Document
     * The specifications services reference files in the response. Use the supplied documentID from other responses to query the document service to retrieve the file. The response will indicate the file type in the Content-Type header.
     *
     * This service returns the binary file for a specified document ID.
     * @returns binary OK
     * @throws ApiError
     */
    public static getSpecificationsDocument({
        attributeType,
        attributeId,
        documentId,
        attributeStandard = 'MOTOR',
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'BaseVehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        /** A valid document ID. **/
        documentId: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Documents/Of/Specifications/{DocumentID}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'DocumentID': documentId,
            },
            query: {
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Specifications Summary
     * Returns the summary information for specification applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsSummaryRs OK
     * @throws ApiError
     */
    public static getSpecificationsSummary({
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
        contentSilos?: '2' | '7' | '9' | '14' | '30' | '31' | '34' | '35' | '36' | '38' | '45' | '47' | '49' | '50' | '52' | '54' | '55' | '110',
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
        include?: 'Details',
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/Specifications',
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
     * Get Specifications Summary With Relation
     * Returns a paged list of summarized specifications for a specified attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsSummaryRs OK
     * @throws ApiError
     */
    public static getSpecificationsSummaryWithRelation({
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
        appRelTypes?: '35',
        contentSilos?: '2' | '7' | '9' | '14' | '30' | '31' | '34' | '35' | '36' | '38' | '45' | '47' | '49' | '50' | '52' | '54' | '55' | '110',
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
        include?: 'Details',
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Specifications_MWSSpecificationsSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/Specifications/RelatedTo/{ContentType}/{ApplicationID}',
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
     * Get Specifications Taxonomy
     * Returns the taxonomy for specifications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs OK
     * @throws ApiError
     */
    public static getSpecificationsTaxonomy({
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
        contentSilos?: '2' | '7' | '9' | '14' | '30' | '31' | '34' | '35' | '36' | '38' | '45' | '47' | '49' | '50' | '52' | '54' | '55' | '110',
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/Specifications',
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
     * Get Specifications Taxonomy With Relation
     * Returns a complete list or a filtered list of specifications taxonomy related to the supplied attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs OK
     * @throws ApiError
     */
    public static getSpecificationsTaxonomyWithRelation({
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
        appRelTypes?: '35',
        contentSilos?: '2' | '7' | '9' | '14' | '30' | '31' | '34' | '35' | '36' | '38' | '45' | '47' | '49' | '50' | '52' | '54' | '55' | '110',
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/Specifications/RelatedTo/{ContentType}/{ApplicationID}',
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