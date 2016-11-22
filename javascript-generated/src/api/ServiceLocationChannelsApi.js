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
    define(['ApiClient', 'model/BadRequest', 'model/ServiceLocationChannel', 'model/Forbidden', 'model/InternalServerError', 'model/NotFound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ServiceLocationChannel'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/NotFound'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.ServiceLocationChannelsApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.ServiceLocationChannel, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.NotFound);
  }
}(this, function(ApiClient, BadRequest, ServiceLocationChannel, Forbidden, InternalServerError, NotFound) {
  'use strict';

  /**
   * ServiceLocationChannels service.
   * @module api/ServiceLocationChannelsApi
   * @version 0.0.28
   */

  /**
   * Constructs a new ServiceLocationChannelsApi. 
   * @alias module:api/ServiceLocationChannelsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * creates ServiceLocationChannel
     * creates ServiceLocationChannel
     * @param {String} serviceId service id
     * @param {module:model/ServiceLocationChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceLocationChannel}
     */
    this.createServiceServiceLocationChannel = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling createServiceServiceLocationChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createServiceServiceLocationChannel";
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
      var returnType = ServiceLocationChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/serviceLocationChannels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * finds ServiceLocationChannel by serviceLocationChannelId
     * finds ServiceLocationChannels by serviceLocationChannelId
     * @param {String} serviceId Service id
     * @param {String} serviceLocationChannelId serviceLocationChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceLocationChannel}
     */
    this.findServiceServiceLocationChannel = function(serviceId, serviceLocationChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findServiceServiceLocationChannel";
      }

      // verify the required parameter 'serviceLocationChannelId' is set
      if (serviceLocationChannelId == undefined || serviceLocationChannelId == null) {
        throw "Missing the required parameter 'serviceLocationChannelId' when calling findServiceServiceLocationChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'serviceLocationChannelId': serviceLocationChannelId
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
      var returnType = ServiceLocationChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/serviceLocationChannels/{serviceLocationChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists ServiceLocationChannels by serviceId
     * Lists ServiceLocationChannels by serviceId
     * @param {String} serviceId Service id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServiceLocationChannel>}
     */
    this.listServiceServiceLocationChannels = function(serviceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling listServiceServiceLocationChannels";
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
      var returnType = [ServiceLocationChannel];

      return this.apiClient.callApi(
        '/services/{serviceId}/serviceLocationChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates ServiceLocationChannel
     * Updates ServiceLocationChannel
     * @param {String} serviceId service id
     * @param {String} serviceLocationChannelId serviceLocationChannel id
     * @param {module:model/ServiceLocationChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceLocationChannel}
     */
    this.updateServiceLocationChannel = function(serviceId, serviceLocationChannelId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updateServiceLocationChannel";
      }

      // verify the required parameter 'serviceLocationChannelId' is set
      if (serviceLocationChannelId == undefined || serviceLocationChannelId == null) {
        throw "Missing the required parameter 'serviceLocationChannelId' when calling updateServiceLocationChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateServiceLocationChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'serviceLocationChannelId': serviceLocationChannelId
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
      var returnType = ServiceLocationChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/serviceLocationChannels/{serviceLocationChannelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
