/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_SubGroup } from './MOTOR_DaaS_WebServices_DTO_Information_Content_SubGroup';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_Group = {
    GroupID?: number;
    /**
     * Literal name.
     */
    Name?: string;
    SubGroups?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_SubGroup>;
};
