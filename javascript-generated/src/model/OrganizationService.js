/**
 * Kunta API
 * One API to rule them all. One API to find them, One API to bring them all and in the darkness bind them.
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
    define(['ApiClient', 'model/LocalizedValue', 'model/WebPage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocalizedValue'), require('./WebPage'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.OrganizationService = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.LocalizedValue, root.KuntaApiClient.WebPage);
  }
}(this, function(ApiClient, LocalizedValue, WebPage) {
  'use strict';




  /**
   * The OrganizationService model module.
   * @module model/OrganizationService
   * @version 0.0.13
   */

  /**
   * Constructs a new <code>OrganizationService</code>.
   * @alias module:model/OrganizationService
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>OrganizationService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationService} obj Optional instance to populate.
   * @return {module:model/OrganizationService} The populated <code>OrganizationService</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('serviceId')) {
        obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('roleType')) {
        obj['roleType'] = ApiClient.convertToType(data['roleType'], 'String');
      }
      if (data.hasOwnProperty('provisionType')) {
        obj['provisionType'] = ApiClient.convertToType(data['provisionType'], 'String');
      }
      if (data.hasOwnProperty('additionalInformation')) {
        obj['additionalInformation'] = ApiClient.convertToType(data['additionalInformation'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('webPages')) {
        obj['webPages'] = ApiClient.convertToType(data['webPages'], [WebPage]);
      }
    }
    return obj;
  }

  /**
   * @member {String} serviceId
   */
  exports.prototype['serviceId'] = undefined;
  /**
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * @member {String} roleType
   */
  exports.prototype['roleType'] = undefined;
  /**
   * @member {String} provisionType
   */
  exports.prototype['provisionType'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} additionalInformation
   */
  exports.prototype['additionalInformation'] = undefined;
  /**
   * @member {Array.<module:model/WebPage>} webPages
   */
  exports.prototype['webPages'] = undefined;



  return exports;
}));


