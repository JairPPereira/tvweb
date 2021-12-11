'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _ErrorsBase2=require('./ErrorsBase');var _ErrorsBase3=_interopRequireDefault(_ErrorsBase2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
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
 * Errors declaration
 * @class
 */var Errors=function(_ErrorsBase){_inherits(Errors,_ErrorsBase);function Errors(){_classCallCheck(this,Errors);/**
         * Error code returned when a manifest parsing error occurs
         */var _this=_possibleConstructorReturn(this,(Errors.__proto__||Object.getPrototypeOf(Errors)).call(this));_this.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE=10;/**
         * Error code returned when a manifest loading error occurs
         */_this.MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE=11;/**
         * Error code returned when a xlink loading error occurs
         */_this.XLINK_LOADER_LOADING_FAILURE_ERROR_CODE=12;/**
         * Error code returned when the update of segments list has failed
         */_this.SEGMENTS_UPDATE_FAILED_ERROR_CODE=13;_this.SEGMENTS_UNAVAILABLE_ERROR_CODE=14;_this.SEGMENT_BASE_LOADER_ERROR_CODE=15;_this.TIME_SYNC_FAILED_ERROR_CODE=16;_this.FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE=17;_this.FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE=18;_this.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE=19;_this.APPEND_ERROR_CODE=20;_this.REMOVE_ERROR_CODE=21;_this.DATA_UPDATE_FAILED_ERROR_CODE=22;/**
         * Error code returned when MediaSource is not supported by the browser
         */_this.CAPABILITY_MEDIASOURCE_ERROR_CODE=23;/**
         * Error code returned when Protected contents are not supported
         */_this.CAPABILITY_MEDIAKEYS_ERROR_CODE=24;_this.DOWNLOAD_ERROR_ID_MANIFEST_CODE=25;_this.DOWNLOAD_ERROR_ID_SIDX_CODE=26;_this.DOWNLOAD_ERROR_ID_CONTENT_CODE=27;_this.DOWNLOAD_ERROR_ID_INITIALIZATION_CODE=28;_this.DOWNLOAD_ERROR_ID_XLINK_CODE=29;_this.MANIFEST_ERROR_ID_CODEC_CODE=30;_this.MANIFEST_ERROR_ID_PARSE_CODE=31;/**
         * Error code returned when no stream (period) has been detected in the manifest
         */_this.MANIFEST_ERROR_ID_NOSTREAMS_CODE=32;/**
         * Error code returned when something wrong has append during subtitles parsing (TTML or VTT)
         */_this.TIMED_TEXT_ERROR_ID_PARSE_CODE=33;/**
         * Error code returned when a 'muxed' media type has been detected in the manifest. This type is not supported
         */_this.MANIFEST_ERROR_ID_MULTIPLEXED_CODE=34;/**
         * Error code returned when a media source type is not supported
         */_this.MEDIASOURCE_TYPE_UNSUPPORTED_CODE=35;_this.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE='parsing failed for ';_this.MANIFEST_LOADER_LOADING_FAILURE_ERROR_MESSAGE='Failed loading manifest: ';_this.XLINK_LOADER_LOADING_FAILURE_ERROR_MESSAGE='Failed loading Xlink element: ';_this.SEGMENTS_UPDATE_FAILED_ERROR_MESSAGE='Segments update failed';_this.SEGMENTS_UNAVAILABLE_ERROR_MESSAGE='no segments are available yet';_this.SEGMENT_BASE_LOADER_ERROR_MESSAGE='error loading segments';_this.TIME_SYNC_FAILED_ERROR_MESSAGE='Failed to synchronize time';_this.FRAGMENT_LOADER_NULL_REQUEST_ERROR_MESSAGE='request is null';_this.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE='Failed to resolve a valid URL';_this.APPEND_ERROR_MESSAGE='chunk is not defined';_this.REMOVE_ERROR_MESSAGE='buffer is not defined';_this.DATA_UPDATE_FAILED_ERROR_MESSAGE='Data update failed';_this.CAPABILITY_MEDIASOURCE_ERROR_MESSAGE='mediasource is not supported';_this.CAPABILITY_MEDIAKEYS_ERROR_MESSAGE='mediakeys is not supported';_this.TIMED_TEXT_ERROR_MESSAGE_PARSE='parsing error :';_this.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE='Error creating source buffer of type : ';return _this;}return Errors;}(_ErrorsBase3.default);var errors=new Errors();exports.default=errors;
//# sourceMappingURL=Errors.js.map
