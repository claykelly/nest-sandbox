/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleAttributesRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleAttributesRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleDetailsRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleDetailsRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSValidVehicleConfigurationsRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSValidVehicleConfigurationsRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsListRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsListRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleEnginesRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleEnginesRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleMakesRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleMakesRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleModelsRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleModelsRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleTypesRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleTypesRs';
import type { MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleYearsRs } from '../models/MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleYearsRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VehiclesService {

    /**
     * Get Base Vehicle Details By Attribute
     * Returns information for a base vehicle by a supplied primary vehicle attribute ID.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleDetailsRs OK
     * @throws ApiError
     */
    public static getBaseVehicleDetailsByAttribute({
        attributeType,
        attributeId,
        attributeStandard = 'MOTOR',
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'BaseVehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleDetailsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/BaseVehicle',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Vehicle Attributes
     * Returns information on the complete set of attributes available for a base vehicle.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleAttributesRs OK
     * @throws ApiError
     */
    public static getVehicleAttributes({
        attributeType,
        attributeId,
        ax,
        bs,
        cb,
        dt,
        en,
        tr,
        attributeStandard = 'MOTOR',
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'BaseVehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        /** Axle Type ID **/
        ax?: number,
        /** Body Style ID **/
        bs?: number,
        /** Cab Type ID **/
        cb?: number,
        /** Drive Type ID **/
        dt?: number,
        /** Engine ID **/
        en?: number,
        /** Transmission ID **/
        tr?: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleAttributesRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/BaseVehicle/Attributes',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'AX': ax,
                'BS': bs,
                'CB': cb,
                'DT': dt,
                'EN': en,
                'TR': tr,
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Vehicle Attributes By Type
     * Returns information on a specific attribute set available for a base vehicle.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleAttributesRs OK
     * @throws ApiError
     */
    public static getVehicleAttributesByType({
        attributeType,
        attributeId,
        vehicleAttributeLookupType,
        ax,
        bs,
        cb,
        dt,
        en,
        tr,
        attributeStandard = 'MOTOR',
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'BaseVehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        vehicleAttributeLookupType: 'AxleTypes' | 'BedTypes' | 'BodyStyles' | 'BrakeTypes' | 'CabTypes' | 'Countries' | 'DriveTypes' | 'Engines' | 'ManufacturerBodyCodes' | 'SpringTypes' | 'SteeringTypes' | 'SubModels' | 'Transmissions' | 'WheelBases',
        /** Axle Type ID **/
        ax?: number,
        /** Body Style ID **/
        bs?: number,
        /** Cab Type ID **/
        cb?: number,
        /** Drive Type ID **/
        dt?: number,
        /** Engine ID **/
        en?: number,
        /** Transmission ID **/
        tr?: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleAttributesRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/BaseVehicle/Attributes/{VehicleAttributeLookupType}',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
                'VehicleAttributeLookupType': vehicleAttributeLookupType,
            },
            query: {
                'AX': ax,
                'BS': bs,
                'CB': cb,
                'DT': dt,
                'EN': en,
                'TR': tr,
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Vehicle Details By Attribute
     * Returns a specific vehicle detail for a supplied vehicle attribute identifier (VehicleID).
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsRs OK
     * @throws ApiError
     */
    public static getVehicleDetailsByAttribute({
        attributeType,
        attributeId,
        attributeStandard = 'MOTOR',
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'VehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Vehicle',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Vehicles By Attribute
     * Returns a list of vehicles for a supplied vehicle attribute identifiers (VehicleID).
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsListRs OK
     * @throws ApiError
     */
    public static getVehiclesByAttribute({
        attributeType,
        attributeId,
        withRel,
        ax,
        bs,
        cb,
        co,
        dt,
        en,
        sm,
        tr,
        attributeStandard = 'MOTOR',
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'BaseVehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
        /** Axle Type ID **/
        ax?: number,
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
        /** Sub-Model ID **/
        sm?: number,
        /** Transmission ID **/
        tr?: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsListRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Vehicles',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'WithRel': withRel,
                'AX': ax,
                'BS': bs,
                'CB': cb,
                'CO': co,
                'DT': dt,
                'EN': en,
                'SM': sm,
                'TR': tr,
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Valid Vehicle Configurations
     * Returns a list of valid attribute combinations and attribute details for a specific vehicle (VehicleID).
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSValidVehicleConfigurationsRs OK
     * @throws ApiError
     */
    public static getValidVehicleConfigurations({
        attributeType,
        attributeId,
        ax,
        bs,
        cb,
        co,
        dt,
        en,
        sm,
        tr,
        attributeStandard = 'MOTOR',
    }: {
        /** Describes the type of primary attribute ID supplied in the attributeID route variable. **/
        attributeType: 'BaseVehicleID' | 'VehicleID',
        /** The primary attribute ID of a valid vehicle. **/
        attributeId: number,
        /** Axle Type ID **/
        ax?: number,
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
        /** Sub-Model ID **/
        sm?: number,
        /** Transmission ID **/
        tr?: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSValidVehicleConfigurationsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Attributes/{AttributeType}/{AttributeID}/Vehicles/Attributes/Configurations',
            path: {
                'AttributeType': attributeType,
                'AttributeID': attributeId,
            },
            query: {
                'AX': ax,
                'BS': bs,
                'CB': cb,
                'CO': co,
                'DT': dt,
                'EN': en,
                'SM': sm,
                'TR': tr,
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Vehicle Types
     * Gets the various types of vehicles
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleTypesRs OK
     * @throws ApiError
     */
    public static getVehicleTypes({
        attributeStandard = 'MOTOR',
    }: {
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleTypesRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/Vehicles/Types',
            query: {
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Years
     * Returns all of the years for which there is data.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleYearsRs OK
     * @throws ApiError
     */
    public static getYears({
        max,
        min,
        vehicleTypes,
        withRel,
        attributeStandard = 'MOTOR',
    }: {
        /** Specify the maximum year that should be returned. The year should be no greater than the current calendar year +1. **/
        max?: number,
        /** Specify the minimum year that can be used. The earliest year is 1896. **/
        min?: number,
        /** The Vehicle Type identifies the type of vehicle. Supported types are car, truck, and van. The IDs can be retrieved from the Vehicle Type service. **/
        vehicleTypes?: Array<number>,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleYearsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/YMME/Years',
            query: {
                'Max': max,
                'Min': min,
                'VehicleTypes': vehicleTypes,
                'WithRel': withRel,
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Makes
     * Returns all of the makes (for which there is data), for a specific vehicle year.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleMakesRs OK
     * @throws ApiError
     */
    public static getMakes({
        year,
        vehicleTypes,
        withRel,
        attributeStandard = 'MOTOR',
    }: {
        /** A four-digit vehicle year. Valid years start at 1896 and go through the current calendar year +1. **/
        year: number,
        /** The Vehicle Type identifies the type of vehicle. Supported types are car, truck, and van. The IDs can be retrieved from the Vehicle Type service. **/
        vehicleTypes?: Array<number>,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleMakesRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/YMME/Years/{Year}/Makes',
            path: {
                'Year': year,
            },
            query: {
                'VehicleTypes': vehicleTypes,
                'WithRel': withRel,
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Models
     * Returns a list of vehicle models and sub-models for a valid combination of a vehicle year and make.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleModelsRs OK
     * @throws ApiError
     */
    public static getModels({
        year,
        makeId,
        vehicleTypes,
        co,
        withRel,
        attributeStandard = 'MOTOR',
    }: {
        /** A four-digit vehicle year. Valid years start at 1896 and go through the current calendar year +1. **/
        year: number,
        /** The makeID identifies the vehicle make (brand), defined within the attribute standard. **/
        makeId: number,
        /** The Vehicle Type identifies the type of vehicle. Supported types are car, truck, and van. The IDs can be retrieved from the Vehicle Type service. **/
        vehicleTypes?: Array<number>,
        /** The Country ID identifies the country or countries for a vehicle model and sub-model. **/
        co?: Array<number>,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleModelsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/YMME/Years/{Year}/Makes/{MakeID}/Models',
            path: {
                'Year': year,
                'MakeID': makeId,
            },
            query: {
                'VehicleTypes': vehicleTypes,
                'CO': co,
                'WithRel': withRel,
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Base Vehicle Details By YMM
     * Returns a specific base vehicle based on the supplied YMM values.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleDetailsRs OK
     * @throws ApiError
     */
    public static getBaseVehicleDetailsByYmm({
        year,
        makeId,
        modelId,
        attributeStandard = 'MOTOR',
    }: {
        /** A four-digit vehicle year. Valid years start at 1896 and go through the current calendar year +1. **/
        year: number,
        /** The makeID identifies the vehicle make (brand), defined within the attribute standard. **/
        makeId: number,
        /** The modelID identifies the vehicle model, defined within the supplied attribute standard. **/
        modelId: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSBaseVehicleDetailsRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/YMME/Years/{Year}/Makes/{MakeID}/Models/{ModelID}/BaseVehicle',
            path: {
                'Year': year,
                'MakeID': makeId,
                'ModelID': modelId,
            },
            query: {
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Engines
     * Returns a list of engines based on the supplied year, make, and model information.
     * The results may be further filtered by vehicle attribute identifiers.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleEnginesRs OK
     * @throws ApiError
     */
    public static getEngines({
        year,
        makeId,
        modelId,
        withRel,
        sm,
        attributeStandard = 'MOTOR',
    }: {
        /** A four-digit vehicle year. Valid years start at 1896 and go through the current calendar year +1. **/
        year: number,
        /** The makeID identifies the vehicle make (brand), defined within the attribute standard. **/
        makeId: number,
        /** The modelID identifies the vehicle model, defined within the supplied attribute standard. **/
        modelId: number,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
        /** Sub-Model ID **/
        sm?: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleEnginesRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/YMME/Years/{Year}/Makes/{MakeID}/Models/{ModelID}/Engines',
            path: {
                'Year': year,
                'MakeID': makeId,
                'ModelID': modelId,
            },
            query: {
                'WithRel': withRel,
                'SM': sm,
                'AttributeStandard': attributeStandard,
            },
        });
    }

    /**
     * Get Vehicles By YMM
     * Returns a list of vehicles for a supplied year, make, and model.
     * @returns MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsListRs OK
     * @throws ApiError
     */
    public static getVehiclesByYmm({
        year,
        makeId,
        modelId,
        withRel,
        ax,
        bs,
        cb,
        co,
        dt,
        en,
        sm,
        tr,
        attributeStandard = 'MOTOR',
    }: {
        /** A four-digit vehicle year. Valid years start at 1896 and go through the current calendar year +1. **/
        year: number,
        /** The makeID identifies the vehicle make (brand), defined within the attribute standard. **/
        makeId: number,
        /** The modelID identifies the vehicle model, defined within the supplied attribute standard. **/
        modelId: number,
        /** In the query, specify the relations that should exist for vehicle. This service will only return makes which have a record in the Estimated Work Times Data as a Service product. The only valid value is EWT. **/
        withRel?: 'EWT',
        /** Axle Type ID **/
        ax?: number,
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
        /** Sub-Model ID **/
        sm?: number,
        /** Transmission ID **/
        tr?: number,
        /** The standard for the request and the response returned by the service. **/
        attributeStandard?: 'MOTOR' | 'VCDB',
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Information_Response_VehicleInfo_MWSVehicleDetailsListRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Information/YMME/Years/{Year}/Makes/{MakeID}/Models/{ModelID}/Vehicles',
            path: {
                'Year': year,
                'MakeID': makeId,
                'ModelID': modelId,
            },
            query: {
                'WithRel': withRel,
                'AX': ax,
                'BS': bs,
                'CB': cb,
                'CO': co,
                'DT': dt,
                'EN': en,
                'SM': sm,
                'TR': tr,
                'AttributeStandard': attributeStandard,
            },
        });
    }

}