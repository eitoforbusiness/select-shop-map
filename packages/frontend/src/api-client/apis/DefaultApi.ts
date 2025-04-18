/* tslint:disable */
/* eslint-disable */
/**
 * My API
 * This is a sample API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  UsersGet200ResponseInner,
} from '../models/index';
import {
    UsersGet200ResponseInnerFromJSON,
    UsersGet200ResponseInnerToJSON,
} from '../models/index';

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Get all users
     */
    async usersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UsersGet200ResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UsersGet200ResponseInnerFromJSON));
    }

    /**
     * Get all users
     */
    async usersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UsersGet200ResponseInner>> {
        const response = await this.usersGetRaw(initOverrides);
        return await response.value();
    }

}
