'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _ProtectionConstants=require('../../constants/ProtectionConstants');var _ProtectionConstants2=_interopRequireDefault(_ProtectionConstants);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function DRMToday(config){config=config||{};var BASE64=config.BASE64;var keySystems={};keySystems[_ProtectionConstants2.default.WIDEVINE_KEYSTEM_STRING]={responseType:'json',getLicenseMessage:function getLicenseMessage(response){return BASE64.decodeArray(response.license);},getErrorResponse:function getErrorResponse(response){return response;}};keySystems[_ProtectionConstants2.default.PLAYREADY_KEYSTEM_STRING]={responseType:'arraybuffer',getLicenseMessage:function getLicenseMessage(response){return response;},getErrorResponse:function getErrorResponse(response){return String.fromCharCode.apply(null,new Uint8Array(response));}};var instance=void 0;function checkConfig(){if(!BASE64||!BASE64.hasOwnProperty('decodeArray')){throw new Error('Missing config parameter(s)');}}function getServerURLFromMessage(url/*, message, messageType*/){return url;}function getHTTPMethod()/*messageType*/{return'POST';}function getResponseType(keySystemStr/*, messageType*/){return keySystems[keySystemStr].responseType;}function getLicenseMessage(serverResponse,keySystemStr/*, messageType*/){checkConfig();return keySystems[keySystemStr].getLicenseMessage(serverResponse);}function getErrorResponse(serverResponse,keySystemStr/*, messageType*/){return keySystems[keySystemStr].getErrorResponse(serverResponse);}instance={getServerURLFromMessage:getServerURLFromMessage,getHTTPMethod:getHTTPMethod,getResponseType:getResponseType,getLicenseMessage:getLicenseMessage,getErrorResponse:getErrorResponse};return instance;}/**
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
 * CastLabs DRMToday License Server implementation
 *
 * @implements LicenseServer
 * @class
 */DRMToday.__dashjs_factory_name='DRMToday';exports.default=dashjs.FactoryMaker.getSingletonFactory(DRMToday);/* jshint ignore:line */
//# sourceMappingURL=DRMToday.js.map
