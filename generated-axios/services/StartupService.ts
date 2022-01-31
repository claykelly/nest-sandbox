/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_GettingStarted_Request_MWSHelloWorldPutRq } from '../models/MOTOR_DaaS_WebServices_DTO_GettingStarted_Request_MWSHelloWorldPutRq';
import type { MOTOR_DaaS_WebServices_DTO_GettingStarted_Response_MWSHelloWorldRs } from '../models/MOTOR_DaaS_WebServices_DTO_GettingStarted_Response_MWSHelloWorldRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StartupService {

    /**
     * Get Hello World
     * A sample route used to demonstrate GET functionality
     * @returns MOTOR_DaaS_WebServices_DTO_GettingStarted_Response_MWSHelloWorldRs OK
     * @throws ApiError
     */
    public static getHelloWorld(): CancelablePromise<MOTOR_DaaS_WebServices_DTO_GettingStarted_Response_MWSHelloWorldRs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/HelloWorld',
        });
    }

    /**
     * Put Hello World
     * A sample route used to demonstrate PUT functionality
     * @returns MOTOR_DaaS_WebServices_DTO_GettingStarted_Response_MWSHelloWorldRs OK
     * @throws ApiError
     */
    public static putHelloWorld({
        request,
    }: {
        request?: MOTOR_DaaS_WebServices_DTO_GettingStarted_Request_MWSHelloWorldPutRq,
    }): CancelablePromise<MOTOR_DaaS_WebServices_DTO_GettingStarted_Response_MWSHelloWorldRs> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/HelloWorld',
            body: request,
        });
    }

}