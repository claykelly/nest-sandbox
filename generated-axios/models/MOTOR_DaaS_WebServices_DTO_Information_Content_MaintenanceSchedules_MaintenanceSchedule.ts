/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_Note } from './MOTOR_DaaS_WebServices_DTO_Information_Content_Note';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_MaintenanceSchedules_MaintenanceSchedule = {
    /**
     * Can contain meta data to retrieve the file containing the image of the indicator light as seen on the dashboard.
     */
    Documents?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument>;
    /**
     * Frequency in which the recommended operation should be performed.
     */
    FrequencyCode?: string;
    /**
     * Frequency in which the recommended operation should be performed.
     */
    FrequencyDescription?: string;
    /**
     * Text description of the display on the vehicle dashboard of the service indicator light.
     */
    Indicator?: string;
    /**
     * Recommended maintenance interval in kilometers.
     */
    IntervalKilometer?: number;
    /**
     * Recommended maintenance interval in miles.
     */
    IntervalMile?: number;
    /**
     * Recommended maintenance interval in months.
     */
    IntervalMonth?: number;
    /**
     * Recommended maintenance interval in operating hours/
     */
    IntervalOperatingHours?: number;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    Notes?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_Note>;
    /**
     * Severe service interval indicator (yes; no) if indicated by the manufacturer.
     */
    SevereServiceDescription?: string;
    WarrantyDescription?: string;
    MaintenanceScheduleID?: number;
};
