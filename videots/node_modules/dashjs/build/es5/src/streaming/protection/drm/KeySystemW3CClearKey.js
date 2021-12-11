'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _KeyPair=require('../vo/KeyPair');var _KeyPair2=_interopRequireDefault(_KeyPair);var _ClearKeyKeySet=require('../vo/ClearKeyKeySet');var _ClearKeyKeySet2=_interopRequireDefault(_ClearKeyKeySet);var _CommonEncryption=require('../CommonEncryption');var _CommonEncryption2=_interopRequireDefault(_CommonEncryption);var _ProtectionConstants=require('../../constants/ProtectionConstants');var _ProtectionConstants2=_interopRequireDefault(_ProtectionConstants);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */var uuid='1077efec-c0b2-4d02-ace3-3c1e52e2fb4b';var systemString=_ProtectionConstants2.default.CLEARKEY_KEYSTEM_STRING;var schemeIdURI='urn:uuid:'+uuid;function KeySystemW3CClearKey(config){var instance=void 0;var BASE64=config.BASE64;var logger=config.debug.getLogger(instance);/**
     * Returns desired clearkeys (as specified in the CDM message) from protection data
     *
     * @param {ProtectionData} protectionData the protection data
     * @param {ArrayBuffer} message the ClearKey CDM message
     * @returns {ClearKeyKeySet} the key set or null if none found
     * @throws {Error} if a keyID specified in the CDM message was not found in the
     * protection data
     * @memberof KeySystemClearKey
     */function getClearKeysFromProtectionData(protectionData,message){var clearkeySet=null;if(protectionData){// ClearKey is the only system that does not require a license server URL, so we
// handle it here when keys are specified in protection data
var jsonMsg=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(message)));var keyPairs=[];for(var i=0;i<jsonMsg.kids.length;i++){var clearkeyID=jsonMsg.kids[i];var clearkey=protectionData.clearkeys&&protectionData.clearkeys.hasOwnProperty(clearkeyID)?protectionData.clearkeys[clearkeyID]:null;if(!clearkey){throw new Error('DRM: ClearKey keyID ('+clearkeyID+') is not known!');}// KeyIDs from CDM are not base64 padded.  Keys may or may not be padded
keyPairs.push(new _KeyPair2.default(clearkeyID,clearkey));}clearkeySet=new _ClearKeyKeySet2.default(keyPairs);logger.warn('ClearKey schemeIdURI is using W3C Common PSSH systemID (1077efec-c0b2-4d02-ace3-3c1e52e2fb4b) in Content Protection. See DASH-IF IOP v4.1 section 7.6.2.4');}return clearkeySet;}function getInitData(cp){return _CommonEncryption2.default.parseInitDataFromContentProtection(cp,BASE64);}function getRequestHeadersFromMessage()/*message*/{return null;}function getLicenseRequestFromMessage(message){return new Uint8Array(message);}function getLicenseServerURLFromInitData()/*initData*/{return null;}function getCDMData(){return null;}function getSessionId()/*cp*/{return null;}instance={uuid:uuid,schemeIdURI:schemeIdURI,systemString:systemString,getInitData:getInitData,getRequestHeadersFromMessage:getRequestHeadersFromMessage,getLicenseRequestFromMessage:getLicenseRequestFromMessage,getLicenseServerURLFromInitData:getLicenseServerURLFromInitData,getCDMData:getCDMData,getSessionId:getSessionId,getClearKeysFromProtectionData:getClearKeysFromProtectionData};return instance;}KeySystemW3CClearKey.__dashjs_factory_name='KeySystemW3CClearKey';exports.default=dashjs.FactoryMaker.getSingletonFactory(KeySystemW3CClearKey);/* jshint ignore:line */
//# sourceMappingURL=KeySystemW3CClearKey.js.map
