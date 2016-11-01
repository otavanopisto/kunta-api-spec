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
    define(['ApiClient', 'model/LocalizedValue', 'model/ServiceHour', 'model/SupportContact', 'model/WebPage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocalizedValue'), require('./ServiceHour'), require('./SupportContact'), require('./WebPage'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.PhoneChannel = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.LocalizedValue, root.KuntaApiClient.ServiceHour, root.KuntaApiClient.SupportContact, root.KuntaApiClient.WebPage);
  }
}(this, function(ApiClient, LocalizedValue, ServiceHour, SupportContact, WebPage) {
  'use strict';




  /**
   * The PhoneChannel model module.
   * @module model/PhoneChannel
   * @version 0.0.19
   */

  /**
   * Constructs a new <code>PhoneChannel</code>.
   * @alias module:model/PhoneChannel
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>PhoneChannel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneChannel} obj Optional instance to populate.
   * @return {module:model/PhoneChannel} The populated <code>PhoneChannel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('names')) {
        obj['names'] = ApiClient.convertToType(data['names'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('descriptions')) {
        obj['descriptions'] = ApiClient.convertToType(data['descriptions'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('phoneType')) {
        obj['phoneType'] = ApiClient.convertToType(data['phoneType'], 'String');
      }
      if (data.hasOwnProperty('chargeTypes')) {
        obj['chargeTypes'] = ApiClient.convertToType(data['chargeTypes'], ['String']);
      }
      if (data.hasOwnProperty('supportContacts')) {
        obj['supportContacts'] = ApiClient.convertToType(data['supportContacts'], [SupportContact]);
      }
      if (data.hasOwnProperty('phoneNumbers')) {
        obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('languages')) {
        obj['languages'] = ApiClient.convertToType(data['languages'], ['String']);
      }
      if (data.hasOwnProperty('phoneChargeDescriptions')) {
        obj['phoneChargeDescriptions'] = ApiClient.convertToType(data['phoneChargeDescriptions'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('webPages')) {
        obj['webPages'] = ApiClient.convertToType(data['webPages'], [WebPage]);
      }
      if (data.hasOwnProperty('serviceHours')) {
        obj['serviceHours'] = ApiClient.convertToType(data['serviceHours'], [ServiceHour]);
      }
      if (data.hasOwnProperty('publishingStatus')) {
        obj['publishingStatus'] = ApiClient.convertToType(data['publishingStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} names
   */
  exports.prototype['names'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} descriptions
   */
  exports.prototype['descriptions'] = undefined;
  /**
   * @member {String} phoneType
   */
  exports.prototype['phoneType'] = undefined;
  /**
   * @member {Array.<String>} chargeTypes
   */
  exports.prototype['chargeTypes'] = undefined;
  /**
   * @member {Array.<module:model/SupportContact>} supportContacts
   */
  exports.prototype['supportContacts'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} phoneNumbers
   */
  exports.prototype['phoneNumbers'] = undefined;
  /**
   * @member {Array.<String>} languages
   */
  exports.prototype['languages'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} phoneChargeDescriptions
   */
  exports.prototype['phoneChargeDescriptions'] = undefined;
  /**
   * @member {Array.<module:model/WebPage>} webPages
   */
  exports.prototype['webPages'] = undefined;
  /**
   * @member {Array.<module:model/ServiceHour>} serviceHours
   */
  exports.prototype['serviceHours'] = undefined;
  /**
   * @member {String} publishingStatus
   */
  exports.prototype['publishingStatus'] = undefined;



  return exports;
}));


