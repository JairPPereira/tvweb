'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _ErrorsBase2=require('../../../core/errors/ErrorsBase');var _ErrorsBase3=_interopRequireDefault(_ErrorsBase2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
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
 * @class
 */var ProtectionErrors=function(_ErrorsBase){_inherits(ProtectionErrors,_ErrorsBase);function ProtectionErrors(){_classCallCheck(this,ProtectionErrors);/**
         *  Generid key Error code
         */var _this=_possibleConstructorReturn(this,(ProtectionErrors.__proto__||Object.getPrototypeOf(ProtectionErrors)).call(this));_this.MEDIA_KEYERR_CODE=100;/**
         *  Error code returned by keyerror api for ProtectionModel_01b
         */_this.MEDIA_KEYERR_UNKNOWN_CODE=101;/**
         *  Error code returned by keyerror api for ProtectionModel_01b
         */_this.MEDIA_KEYERR_CLIENT_CODE=102;/**
         *  Error code returned by keyerror api for ProtectionModel_01b
         */_this.MEDIA_KEYERR_SERVICE_CODE=103;/**
         *  Error code returned by keyerror api for ProtectionModel_01b
         */_this.MEDIA_KEYERR_OUTPUT_CODE=104;/**
         *  Error code returned by keyerror api for ProtectionModel_01b
         */_this.MEDIA_KEYERR_HARDWARECHANGE_CODE=105;/**
         *  Error code returned by keyerror api for ProtectionModel_01b
         */_this.MEDIA_KEYERR_DOMAIN_CODE=106;/**
         *  Error code returned when an error occured in keymessage event for ProtectionModel_01b
         */_this.MEDIA_KEY_MESSAGE_ERROR_CODE=107;/**
         *  Error code returned when challenge is invalid in keymessage event (event triggered by CDM)
         */_this.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE=108;/**
         *  Error code returned when License server certificate has not been successfully updated
         */_this.SERVER_CERTIFICATE_UPDATED_ERROR_CODE=109;/**
         *  Error code returned when license validity has expired
         */_this.KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE=110;/**
         *  Error code returned when no licenser url is defined
         */_this.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE=111;/**
         *  Error code returned when key system access is denied
         */_this.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE=112;/**
         *  Error code returned when key session has not been successfully created
         */_this.KEY_SESSION_CREATED_ERROR_CODE=113;/**
         *  Error code returned when license request failed after a keymessage event has been triggered
         */_this.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE=114;_this.MEDIA_KEYERR_UNKNOWN_MESSAGE='An unspecified error occurred. This value is used for errors that don\'t match any of the other codes.';_this.MEDIA_KEYERR_CLIENT_MESSAGE='The Key System could not be installed or updated.';_this.MEDIA_KEYERR_SERVICE_MESSAGE='The message passed into update indicated an error from the license service.';_this.MEDIA_KEYERR_OUTPUT_MESSAGE='There is no available output device with the required characteristics for the content protection system.';_this.MEDIA_KEYERR_HARDWARECHANGE_MESSAGE='A hardware configuration change caused a content protection error.';_this.MEDIA_KEYERR_DOMAIN_MESSAGE='An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain.';_this.MEDIA_KEY_MESSAGE_ERROR_MESSAGE='Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!';_this.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_MESSAGE='DRM: Empty key message from CDM';_this.SERVER_CERTIFICATE_UPDATED_ERROR_MESSAGE='Error updating server certificate -- ';_this.KEY_STATUS_CHANGED_EXPIRED_ERROR_MESSAGE='DRM: KeyStatusChange error! -- License has expired';_this.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_MESSAGE='DRM: No license server URL specified!';_this.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE='DRM: KeySystem Access Denied! -- ';_this.KEY_SESSION_CREATED_ERROR_MESSAGE='DRM: unable to create session! --';_this.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE='DRM: licenser error! --';return _this;}return ProtectionErrors;}(_ErrorsBase3.default);var protectionErrors=new ProtectionErrors();exports.default=protectionErrors;
//# sourceMappingURL=ProtectionErrors.js.map
