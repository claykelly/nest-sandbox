/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MOTOR_DaaS_WebServices_DTO_Auth_Tokens_Response_MWSTokenRs } from '../models/MOTOR_DaaS_WebServices_DTO_Auth_Tokens_Response_MWSTokenRs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TokenAuthenticationService {

    /**
     * Create Token
     * Generates and returns a temporary token that can be used for authentication.
     * @returns MOTOR_DaaS_WebServices_DTO_Auth_Tokens_Response_MWSTokenRs OK
     * @throws ApiError
     */
    public static createToken(): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Auth_Tokens_Response_MWSTokenRs> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/Token',
        });
    }

    /**
     * Delete Token
     * The token used for authentication on this request will be revoked and no longer be considered valid. This service MUST be called using token authentication.
     * @returns MOTOR_DaaS_WebServices_DTO_Auth_Tokens_Response_MWSTokenRs OK
     * @throws ApiError
     */
    public static deleteToken(): CancelablePromise<MOTOR_DaaS_WebServices_DTO_Auth_Tokens_Response_MWSTokenRs> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/Token',
        });
    }

}