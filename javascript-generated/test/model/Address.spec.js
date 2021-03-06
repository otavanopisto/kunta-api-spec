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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KuntaApiClient);
  }
}(this, function(expect, KuntaApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KuntaApiClient.Address();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be.a(KuntaApiClient.Address);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property postOfficeBox (base name: "postOfficeBox")', function() {
      // uncomment below and update the code to test the property postOfficeBox
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property postOffice (base name: "postOffice")', function() {
      // uncomment below and update the code to test the property postOffice
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property streetAddress (base name: "streetAddress")', function() {
      // uncomment below and update the code to test the property streetAddress
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property municipality (base name: "municipality")', function() {
      // uncomment below and update the code to test the property municipality
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property qualifier (base name: "qualifier")', function() {
      // uncomment below and update the code to test the property qualifier
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property additionalInformations (base name: "additionalInformations")', function() {
      // uncomment below and update the code to test the property additionalInformations
      //var instane = new KuntaApiClient.Address();
      //expect(instance).to.be();
    });

  });

}));
