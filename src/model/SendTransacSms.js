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
    root.SibApiV3Sdk.SendTransacSms = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendTransacSms model module.
   * @module model/SendTransacSms
   * @version 7.2.3
   */

  /**
   * Constructs a new <code>SendTransacSms</code>.
   * @alias module:model/SendTransacSms
   * @class
   * @param sender {String} Name of the sender. Only alphanumeric characters. No more than 11 characters
   * @param recipient {String} Mobile number to send SMS with the country code
   * @param content {String} Content of the message. If more than 160 characters long, will be sent as multiple text messages
   */
  var exports = function(sender, recipient, content) {
    var _this = this;

    _this['sender'] = sender;
    _this['recipient'] = recipient;
    _this['content'] = content;



  };

  /**
   * Constructs a <code>SendTransacSms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendTransacSms} obj Optional instance to populate.
   * @return {module:model/SendTransacSms} The populated <code>SendTransacSms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('recipient')) {
        obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('webUrl')) {
        obj['webUrl'] = ApiClient.convertToType(data['webUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the sender. Only alphanumeric characters. No more than 11 characters
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * Mobile number to send SMS with the country code
   * @member {String} recipient
   */
  exports.prototype['recipient'] = undefined;
  /**
   * Content of the message. If more than 160 characters long, will be sent as multiple text messages
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Type of the SMS. Marketing SMS messages are those sent typically with marketing content. Transactional SMS messages are sent to individuals and are triggered in response to some action, such as a sign-up, purchase, etc.
   * @member {module:model/SendTransacSms.TypeEnum} type
   * @default 'transactional'
   */
  exports.prototype['type'] = 'transactional';
  /**
   * Tag of the message
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * Webhook to call for each event triggered by the message (delivered etc.)
   * @member {String} webUrl
   */
  exports.prototype['webUrl'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "transactional"
     * @const
     */
    "transactional": "transactional",
    /**
     * value: "marketing"
     * @const
     */
    "marketing": "marketing"  };


  return exports;
}));


