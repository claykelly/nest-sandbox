/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ContentCategory } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ContentCategory';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_ContentSilo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_ContentSilo';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_MappedAttribute } from './MOTOR_DaaS_WebServices_DTO_Information_Content_MappedAttribute';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_PartVectorIllustrations_PartVectorLayerApp } from './MOTOR_DaaS_WebServices_DTO_Information_Content_PartVectorIllustrations_PartVectorLayerApp';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_PartVectorIllustrations_PartVectorTaxonomyInfo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_PartVectorIllustrations_PartVectorTaxonomyInfo';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_PositionInfo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_PositionInfo';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_QualifierInfo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_QualifierInfo';
import type { MOTOR_DaaS_WebServices_DTO_Information_Content_TaxonomyInfo } from './MOTOR_DaaS_WebServices_DTO_Information_Content_TaxonomyInfo';
import type { MOTOR_DaaS_WebServices_DTO_Link } from './MOTOR_DaaS_WebServices_DTO_Link';

export type MOTOR_DaaS_WebServices_DTO_Information_Content_PartVectorIllustrations_PartVectorApp = {
    Document?: MOTOR_DaaS_WebServices_DTO_Information_Content_ContentDocument;
    Layers?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_PartVectorIllustrations_PartVectorLayerApp>;
    TaxonomyInfo?: MOTOR_DaaS_WebServices_DTO_Information_Content_PartVectorIllustrations_PartVectorTaxonomyInfo;
    /**
     * Unique identifier which indexes the defining attributes of the data item.
     */
    ApplicationID?: number;
    AttributeMappings?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_MappedAttribute>;
    Category?: MOTOR_DaaS_WebServices_DTO_Information_Content_ContentCategory;
    ContentSilos?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_ContentSilo>;
    /**
     * If the IsActive flag is returned as 'true', the data associated with the flag is applicable. If the IsActive flag is returned as 'false', the data has been superseded.
     */
    IsActive?: boolean;
    Links?: Array<MOTOR_DaaS_WebServices_DTO_Link>;
    Position?: MOTOR_DaaS_WebServices_DTO_Information_Content_PositionInfo;
    Qualifiers?: Array<MOTOR_DaaS_WebServices_DTO_Information_Content_QualifierInfo>;
    Taxonomy?: MOTOR_DaaS_WebServices_DTO_Information_Content_TaxonomyInfo;
};
