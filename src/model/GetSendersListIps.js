/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetSendersListIps = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetSendersListIps model module.
   * @module model/GetSendersListIps
   * @version 7.2.3
   */

  /**
   * Constructs a new <code>GetSendersListIps</code>.
   * @alias module:model/GetSendersListIps
   * @class
   * @param ip {String} Dedicated IP available in your account
   * @param domain {String} Domain of the IP
   * @param weight {Number} Weight of the IP for this sender
   */
  var exports = function(ip, domain, weight) {
    var _this = this;

    _this['ip'] = ip;
    _this['domain'] = domain;
    _this['weight'] = weight;
  };

  /**
   * Constructs a <code>GetSendersListIps</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSendersListIps} obj Optional instance to populate.
   * @return {module:model/GetSendersListIps} The populated <code>GetSendersListIps</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Dedicated IP available in your account
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * Domain of the IP
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * Weight of the IP for this sender
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;



  return exports;
}));


