/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationSAETaxonomyRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationSAETaxonomyRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsListRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsListRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsSummaryRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsSummaryRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_WiringDiagrams_MWSWiringSummaryRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_WiringDiagrams_MWSWiringSummaryRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WiringDiagramsService {

    /**
     * Get OEM Components Detail List By Application And Document
     * Returns information about OEM components within a document.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsListRs OK
     * @throws ApiError
     */
    public static getOemComponentsDetailListByApplicationAndDocument({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        documentId,
        itemsPerPage,
        pageIndex,
        searchTerm,
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
        /** A valid document ID. **/
        documentId: number,
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
        /** Searching is performed against the taxonomy literal name field and supports partial and complete matches. **/
        searchTerm?: string,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsListRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Details/Of/{ContentType}/{ApplicationID}/Documents/{DocumentID}/OEMComponents',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'ContentType': contentType,
                'ApplicationID': applicationId,
                'DocumentID': documentId,
            },
            query: {
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'SearchTerm': searchTerm,
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
     * Get Wiring Diagram Details By Application
     * Returns the details of the wiring diagrams that match a specific application record.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs OK
     * @throws ApiError
     */
    public static getWiringDiagramDetailsByApplication({
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Details/Of/WiringDiagrams/{ApplicationID}',
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
     * Get Wiring Diagrams Document
     * The wiring diagrams services reference files in the response. Use the supplied documentID from other responses to query the document service to retrieve the file. The response will indicate the file type in the Content-Type header.
     *
     * This service returns the binary file for a specified document ID.
     * @returns binary OK
     * @throws ApiError
     */
    public static getWiringDiagramsDocument({
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Documents/Of/WiringDiagrams/{DocumentID}',
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
     * Get OEM Components Summary
     * Returns a paged summary of OEM components and related documents for a specified attributeID and attributeType.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsSummaryRs OK
     * @throws ApiError
     */
    public static getOemComponentsSummary({
        attributeType,
        attributeId,
        searchTerm,
        contentSilos,
        itemsPerPage,
        pageIndex,
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
        /** Searching is performed against the taxonomy literal name field and supports partial and complete matches. **/
        searchTerm: string,
        contentSilos?: Array<number>,
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/OEMComponents',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'ContentSilos': contentSilos,
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'SearchTerm': searchTerm,
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
     * Get OEM Components Summary With Relation
     * Returns a paged list of OEM components and related documents for a specified attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsSummaryRs OK
     * @throws ApiError
     */
    public static getOemComponentsSummaryWithRelation({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        searchTerm,
        appRelTypes,
        contentSilos,
        itemsPerPage,
        pageIndex,
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
        /** Searching is performed against the taxonomy literal name field and supports partial and complete matches. **/
        searchTerm: string,
        /** A comma separated list of Application Relation Type IDs to filter the summary results. **/
        appRelTypes?: Array<number>,
        contentSilos?: Array<number>,
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_OEMComponents_MWSOEMComponentsSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/OEMComponents/RelatedTo/{ContentType}/{ApplicationID}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'ContentType': contentType,
                'ApplicationID': applicationId,
            },
            query: {
                'AppRelTypes': appRelTypes,
                'ContentSilos': contentSilos,
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'SearchTerm': searchTerm,
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
     * Get Wiring Diagrams Summary
     * Returns the summary information for wiring diagram applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_WiringDiagrams_MWSWiringSummaryRs OK
     * @throws ApiError
     */
    public static getWiringDiagramsSummary({
        attributeType,
        attributeId,
        contentSilos,
        itemsPerPage,
        pageIndex,
        saeSubjectId,
        saeSystemId,
        searchTerm,
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
        contentSilos?: '56',
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
        /** An SAE SubjectID value. **/
        saeSubjectId?: number,
        /** An SAE SystemID value. **/
        saeSystemId?: number,
        /** Searching is performed against the taxonomy literal name field and supports partial and complete matches. **/
        searchTerm?: string,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_WiringDiagrams_MWSWiringSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/WiringDiagrams',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'ContentSilos': contentSilos,
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'SAESubjectID': saeSubjectId,
                'SAESystemID': saeSystemId,
                'SearchTerm': searchTerm,
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
     * Get Wiring Diagrams Summary With Relation
     * Returns a paged list of summarized wiring diagrams for a specified attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_WiringDiagrams_MWSWiringSummaryRs OK
     * @throws ApiError
     */
    public static getWiringDiagramsSummaryWithRelation({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        appRelTypes,
        contentSilos,
        itemsPerPage,
        pageIndex,
        saeSubjectId,
        saeSystemId,
        searchTerm,
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
        contentSilos?: '56',
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
        /** An SAE SubjectID value. **/
        saeSubjectId?: number,
        /** An SAE SystemID value. **/
        saeSystemId?: number,
        /** Searching is performed against the taxonomy literal name field and supports partial and complete matches. **/
        searchTerm?: string,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_WiringDiagrams_MWSWiringSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/WiringDiagrams/RelatedTo/{ContentType}/{ApplicationID}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'ContentType': contentType,
                'ApplicationID': applicationId,
            },
            query: {
                'AppRelTypes': appRelTypes,
                'ContentSilos': contentSilos,
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'SAESubjectID': saeSubjectId,
                'SAESystemID': saeSystemId,
                'SearchTerm': searchTerm,
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
     * Get Wiring Diagrams Taxonomy
     * Returns the taxonomy for wiring diagrams.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationSAETaxonomyRs OK
     * @throws ApiError
     */
    public static getWiringDiagramsTaxonomy({
        attributeType,
        attributeId,
        contentSilos,
        resultType = 'DrillDown',
        saeSubjectId,
        saeSystemId,
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
        contentSilos?: '56',
        /** Determines the result type that the service will return. Valid values are DrillDown or List. When DrillDown is specified, the result will only contain the highest level of taxonomy, based on the supplied FilteredBy parameters. **/
        resultType?: 'DrillDown' | 'List',
        /** An SAE SubjectID value. **/
        saeSubjectId?: number,
        /** An SAE SystemID value. **/
        saeSystemId?: number,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationSAETaxonomyRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/WiringDiagrams',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'ContentSilos': contentSilos,
                'ResultType': resultType,
                'SAESubjectID': saeSubjectId,
                'SAESystemID': saeSystemId,
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
     * Get Wiring Diagrams Taxonomy With Relation
     * Returns a complete list or a filtered list of wiring diagrams taxonomy related to the supplied attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationSAETaxonomyRs OK
     * @throws ApiError
     */
    public static getWiringDiagramsTaxonomyWithRelation({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        appRelTypes,
        contentSilos,
        resultType = 'DrillDown',
        saeSubjectId,
        saeSystemId,
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
        contentSilos?: '56',
        /** Determines the result type that the service will return. Valid values are DrillDown or List. When DrillDown is specified, the result will only contain the highest level of taxonomy, based on the supplied FilteredBy parameters. **/
        resultType?: 'DrillDown' | 'List',
        /** An SAE SubjectID value. **/
        saeSubjectId?: number,
        /** An SAE SystemID value. **/
        saeSystemId?: number,
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationSAETaxonomyRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/WiringDiagrams/RelatedTo/{ContentType}/{ApplicationID}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'ContentType': contentType,
                'ApplicationID': applicationId,
            },
            query: {
                'AppRelTypes': appRelTypes,
                'ContentSilos': contentSilos,
                'ResultType': resultType,
                'SAESubjectID': saeSubjectId,
                'SAESystemID': saeSystemId,
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