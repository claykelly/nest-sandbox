/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MOTOR_DaaS_WebServices_DTO_ResponseMessage = {
    Code?: string;
    LongDescription?: string;
    ShortDescription?: string;
    Type?: MOTOR_DaaS_WebServices_DTO_ResponseMessage.Type;
};

export namespace MOTOR_DaaS_WebServices_DTO_ResponseMessage {

    export enum Type {
        DEBUG = 'Debug',
        INFO = 'Info',
        WARNING = 'Warning',
        ERROR = 'Error',
    }


}
