'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _BaseMatcher2=require('./BaseMatcher');var _BaseMatcher3=_interopRequireDefault(_BaseMatcher2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
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
 * @classdesc matches and converts xs:datetime to Date
 */var SECONDS_IN_MIN=60;var MINUTES_IN_HOUR=60;var MILLISECONDS_IN_SECONDS=1000;var datetimeRegex=/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})(?::?)([0-9]{2}))?/;var DateTimeMatcher=function(_BaseMatcher){_inherits(DateTimeMatcher,_BaseMatcher);function DateTimeMatcher(){_classCallCheck(this,DateTimeMatcher);return _possibleConstructorReturn(this,(DateTimeMatcher.__proto__||Object.getPrototypeOf(DateTimeMatcher)).call(this,function(attr){return datetimeRegex.test(attr.value);},function(str){var match=datetimeRegex.exec(str);var utcDate=void 0;// If the string does not contain a timezone offset different browsers can interpret it either
// as UTC or as a local time so we have to parse the string manually to normalize the given date value for
// all browsers
utcDate=Date.UTC(parseInt(match[1],10),parseInt(match[2],10)-1,// months start from zero
parseInt(match[3],10),parseInt(match[4],10),parseInt(match[5],10),match[6]&&parseInt(match[6],10)||0,match[7]&&parseFloat(match[7])*MILLISECONDS_IN_SECONDS||0);// If the date has timezone offset take it into account as well
if(match[9]&&match[10]){var timezoneOffset=parseInt(match[9],10)*MINUTES_IN_HOUR+parseInt(match[10],10);utcDate+=(match[8]==='+'?-1:+1)*timezoneOffset*SECONDS_IN_MIN*MILLISECONDS_IN_SECONDS;}return new Date(utcDate);}));}return DateTimeMatcher;}(_BaseMatcher3.default);exports.default=DateTimeMatcher;
//# sourceMappingURL=DateTimeMatcher.js.map
