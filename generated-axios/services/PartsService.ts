/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartPricingFamilyApplicationPartRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartPricingFamilyApplicationPartRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartSummaryRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartSummaryRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PartsService {

    /**
     * Get Parts Summary From Part Number
     * Returns the summary information for part applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartPricingFamilyApplicationPartRs OK
     * @throws ApiError
     */
    public static getPartsSummaryFromPartNumber({
        partNumber,
        itemsPerPage,
        pageIndex,
        attributeStandard = 'MOTOR',
    }: {
        /** The OEM Part Number to search for.  Full or partial Part Numbers are accepted. **/
        partNumber?: string,
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartPricingFamilyApplicationPartRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Parts/Content/Summaries/Of/Parts',
            query: {
                'PartNumber': partNumber,
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Part Details By Application
     * Returns the details of the parts that match a specific application record.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationContentRs OK
     * @throws ApiError
     */
    public static getPartDetailsByApplication({
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Details/Of/Parts/{ApplicationID}',
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
     * Get Parts Summary
     * Returns the summary information for part applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartSummaryRs OK
     * @throws ApiError
     */
    public static getPartsSummary({
        attributeType,
        attributeId,
        contentSilos,
        taxonomyIDs,
        partTerminologyIDs,
        groupId,
        itemsPerPage,
        pageIndex,
        searchTerm,
        searchPartNumber,
        subGroupId,
        systemId,
        filter,
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
        contentSilos?: '29' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '68' | '69' | '70' | '71' | '72' | '73' | '74' | '75' | '76' | '77' | '78' | '79' | '80' | '81' | '82' | '83' | '84' | '85' | '86' | '87' | '88' | '89' | '90' | '91' | '92' | '93' | '94' | '95' | '96' | '97' | '98' | '99' | '100' | '101' | '104' | '105' | '106' | '107' | '109' | '111',
        taxonomyIDs?: Array<number>,
        partTerminologyIDs?: Array<number>,
        /** Taxonomy groupID. **/
        groupId?: number,
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
        /** Searching is performed against the taxonomy literal name field and supports partial and complete matches. **/
        searchTerm?: string,
        /** Search is performed against part number fields. Complete match is required. **/
        searchPartNumber?: string,
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        /** Taxonomy systemID. **/
        systemId?: number,
        filter?: 'EquippedOnly',
        include?: 'CurrentPricing',
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/Parts',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'ContentSilos': contentSilos,
                'TaxonomyIDs': taxonomyIDs,
                'PartTerminologyIDs': partTerminologyIDs,
                'GroupID': groupId,
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'SearchTerm': searchTerm,
                'SearchPartNumber': searchPartNumber,
                'SubGroupID': subGroupId,
                'SystemID': systemId,
                'Filter': filter,
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
     * Get Parts Summary With Relation
     * Returns a paged list of summarized parts for a specified attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartSummaryRs OK
     * @throws ApiError
     */
    public static getPartsSummaryWithRelation({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        appRelTypes,
        contentSilos,
        taxonomyIDs,
        partTerminologyIDs,
        groupId,
        itemsPerPage,
        pageIndex,
        searchTerm,
        searchPartNumber,
        subGroupId,
        systemId,
        filter,
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
        contentSilos?: '29' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '68' | '69' | '70' | '71' | '72' | '73' | '74' | '75' | '76' | '77' | '78' | '79' | '80' | '81' | '82' | '83' | '84' | '85' | '86' | '87' | '88' | '89' | '90' | '91' | '92' | '93' | '94' | '95' | '96' | '97' | '98' | '99' | '100' | '101' | '104' | '105' | '106' | '107' | '109' | '111',
        taxonomyIDs?: Array<number>,
        partTerminologyIDs?: Array<number>,
        /** Taxonomy groupID. **/
        groupId?: number,
        /** The number of results to include in each page. **/
        itemsPerPage?: number,
        /** The index of the page to return. Each page will contain a maximum of 30 items in each page. **/
        pageIndex?: number,
        /** Searching is performed against the taxonomy literal name field and supports partial and complete matches. **/
        searchTerm?: string,
        /** Search is performed against part number fields. Complete match is required. **/
        searchPartNumber?: string,
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        /** Taxonomy systemID. **/
        systemId?: number,
        filter?: 'EquippedOnly',
        include?: 'CurrentPricing',
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
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_Content_Parts_MWSPartSummaryRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Summaries/Of/Parts/RelatedTo/{ContentType}/{ApplicationID}',
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
                'PartTerminologyIDs': partTerminologyIDs,
                'GroupID': groupId,
                'ItemsPerPage': itemsPerPage,
                'PageIndex': pageIndex,
                'SearchTerm': searchTerm,
                'SearchPartNumber': searchPartNumber,
                'SubGroupID': subGroupId,
                'SystemID': systemId,
                'Filter': filter,
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
     * Get Parts Taxonomy
     * Returns the taxonomy for parts.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs OK
     * @throws ApiError
     */
    public static getPartsTaxonomy({
        attributeType,
        attributeId,
        contentSilos,
        groupId,
        resultType = 'DrillDown',
        subGroupId,
        filter,
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
        contentSilos?: '29' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '68' | '69' | '70' | '71' | '72' | '73' | '74' | '75' | '76' | '77' | '78' | '79' | '80' | '81' | '82' | '83' | '84' | '85' | '86' | '87' | '88' | '89' | '90' | '91' | '92' | '93' | '94' | '95' | '96' | '97' | '98' | '99' | '100' | '101' | '104' | '105' | '106' | '107' | '109' | '111',
        /** Taxonomy groupID. **/
        groupId?: number,
        /** Determines the result type that the service will return. Valid values are DrillDown or List. When DrillDown is specified, the result will only contain the highest level of taxonomy, based on the supplied FilteredBy parameters. **/
        resultType?: 'DrillDown' | 'List',
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        filter?: 'EquippedOnly',
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/Parts',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'ContentSilos': contentSilos,
                'GroupID': groupId,
                'ResultType': resultType,
                'SubGroupID': subGroupId,
                'Filter': filter,
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
     * Get Parts Taxonomy With Relation
     * Returns a complete list or a filtered list of parts taxonomy related to the supplied attributeID and attributeType with relations to other applications.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_Content_MWSInformationTaxonomyRs OK
     * @throws ApiError
     */
    public static getPartsTaxonomyWithRelation({
        attributeType,
        attributeId,
        contentType,
        applicationId,
        appRelTypes,
        contentSilos,
        groupId,
        resultType = 'DrillDown',
        subGroupId,
        filter,
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
        contentSilos?: '29' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '68' | '69' | '70' | '71' | '72' | '73' | '74' | '75' | '76' | '77' | '78' | '79' | '80' | '81' | '82' | '83' | '84' | '85' | '86' | '87' | '88' | '89' | '90' | '91' | '92' | '93' | '94' | '95' | '96' | '97' | '98' | '99' | '100' | '101' | '104' | '105' | '106' | '107' | '109' | '111',
        /** Taxonomy groupID. **/
        groupId?: number,
        /** Determines the result type that the service will return. Valid values are DrillDown or List. When DrillDown is specified, the result will only contain the highest level of taxonomy, based on the supplied FilteredBy parameters. **/
        resultType?: 'DrillDown' | 'List',
        /** Taxonomy subgroupID. **/
        subGroupId?: number,
        filter?: 'EquippedOnly',
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
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Content/Taxonomies/Of/Parts/RelatedTo/{ContentType}/{ApplicationID}',
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
                'Filter': filter,
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