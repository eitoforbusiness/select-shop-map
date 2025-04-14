/* tslint:disable */
/* eslint-disable */
/**
 * Select Shop Map API
 * API for the Select Shop Map application
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ShopLocation } from './ShopLocation';
import {
    ShopLocationFromJSON,
    ShopLocationFromJSONTyped,
    ShopLocationToJSON,
    ShopLocationToJSONTyped,
} from './ShopLocation';

/**
 * 
 * @export
 * @interface Shop
 */
export interface Shop {
    /**
     * Unique identifier for the shop
     * @type {string}
     * @memberof Shop
     */
    id: string;
    /**
     * Name of the shop
     * @type {string}
     * @memberof Shop
     */
    name: string;
    /**
     * Description of the shop
     * @type {string}
     * @memberof Shop
     */
    description?: string;
    /**
     * 
     * @type {ShopLocation}
     * @memberof Shop
     */
    location?: ShopLocation;
}

/**
 * Check if a given object implements the Shop interface.
 */
export function instanceOfShop(value: object): value is Shop {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function ShopFromJSON(json: any): Shop {
    return ShopFromJSONTyped(json, false);
}

export function ShopFromJSONTyped(json: any, ignoreDiscriminator: boolean): Shop {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'location': json['location'] == null ? undefined : ShopLocationFromJSON(json['location']),
    };
}

export function ShopToJSON(json: any): Shop {
    return ShopToJSONTyped(json, false);
}

export function ShopToJSONTyped(value?: Shop | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'location': ShopLocationToJSON(value['location']),
    };
}

