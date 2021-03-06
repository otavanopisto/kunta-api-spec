/**
 * Kunta API
 * Solution to combine municipality services under single API.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequest', 'model/PhoneChannel', 'model/Forbidden', 'model/InternalServerError', 'model/NotFound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/PhoneChannel'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/NotFound'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.PhoneChannelsApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.PhoneChannel, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.NotFound);
  }
}(this, function(ApiClient, BadRequest, PhoneChannel, Forbidden, InternalServerError, NotFound) {
  'use strict';

  /**
   * PhoneChannels service.
   * @module api/PhoneChannelsApi
   * @version 0.0.31
   */

  /**
   * Constructs a new PhoneChannelsApi. 
   * @alias module:api/PhoneChannelsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * creates PhoneChannel
     * creates PhoneChannel
     * @param {String} serviceId service id
     * @param {module:model/PhoneChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PhoneChannel}
     */
    this.createServicePhoneChannel = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling createServicePhoneChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createServicePhoneChannel";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PhoneChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/phoneChannels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * finds PhoneChannel by phoneChannelId
     * finds PhoneChannels by phoneChannelId
     * @param {String} serviceId Service id
     * @param {String} phoneChannelId phoneChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PhoneChannel}
     */
    this.findServicePhoneChannel = function(serviceId, phoneChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findServicePhoneChannel";
      }

      // verify the required parameter 'phoneChannelId' is set
      if (phoneChannelId == undefined || phoneChannelId == null) {
        throw "Missing the required parameter 'phoneChannelId' when calling findServicePhoneChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'phoneChannelId': phoneChannelId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PhoneChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/phoneChannels/{phoneChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists PhoneChannels by serviceId
     * Lists PhoneChannels by serviceId
     * @param {String} serviceId Service id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PhoneChannel>}
     */
    this.listServicePhoneChannels = function(serviceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling listServicePhoneChannels";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [PhoneChannel];

      return this.apiClient.callApi(
        '/services/{serviceId}/phoneChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates PhoneChannel
     * Updates PhoneChannel
     * @param {String} serviceId service id
     * @param {String} phoneChannelId phoneChannel id
     * @param {module:model/PhoneChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PhoneChannel}
     */
    this.updatePhoneChannel = function(serviceId, phoneChannelId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updatePhoneChannel";
      }

      // verify the required parameter 'phoneChannelId' is set
      if (phoneChannelId == undefined || phoneChannelId == null) {
        throw "Missing the required parameter 'phoneChannelId' when calling updatePhoneChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updatePhoneChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'phoneChannelId': phoneChannelId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PhoneChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/phoneChannels/{phoneChannelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
