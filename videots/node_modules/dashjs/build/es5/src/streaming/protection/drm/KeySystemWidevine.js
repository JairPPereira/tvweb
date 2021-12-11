'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _CommonEncryption=require('../CommonEncryption');var _CommonEncryption2=_interopRequireDefault(_CommonEncryption);var _ProtectionConstants=require('../../constants/ProtectionConstants');var _ProtectionConstants2=_interopRequireDefault(_ProtectionConstants);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
 *//**
 * Google Widevine DRM
 *
 * @class
 * @implements MediaPlayer.dependencies.protection.KeySystem
 */var uuid='edef8ba9-79d6-4ace-a3c8-27dcd51d21ed';var systemString=_ProtectionConstants2.default.WIDEVINE_KEYSTEM_STRING;var schemeIdURI='urn:uuid:'+uuid;function KeySystemWidevine(config){config=config||{};var instance=void 0;var protData=null;var BASE64=config.BASE64;function init(protectionData){if(protectionData){protData=protectionData;}}function getInitData(cp){return _CommonEncryption2.default.parseInitDataFromContentProtection(cp,BASE64);}function getRequestHeadersFromMessage()/*message*/{return null;}function getLicenseRequestFromMessage(message){return new Uint8Array(message);}function getLicenseServerURLFromInitData()/*initData*/{return null;}function getCDMData(){return null;}function getSessionId(cp){// Get sessionId from protectionData or from manifest
if(protData&&protData.sessionId){return protData.sessionId;}else if(cp&&cp.sessionId){return cp.sessionId;}return null;}instance={uuid:uuid,schemeIdURI:schemeIdURI,systemString:systemString,init:init,getInitData:getInitData,getRequestHeadersFromMessage:getRequestHeadersFromMessage,getLicenseRequestFromMessage:getLicenseRequestFromMessage,getLicenseServerURLFromInitData:getLicenseServerURLFromInitData,getCDMData:getCDMData,getSessionId:getSessionId};return instance;}KeySystemWidevine.__dashjs_factory_name='KeySystemWidevine';exports.default=dashjs.FactoryMaker.getSingletonFactory(KeySystemWidevine);/* jshint ignore:line */
//# sourceMappingURL=KeySystemWidevine.js.map
