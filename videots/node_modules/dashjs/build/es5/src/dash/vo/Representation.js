'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();/**
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
 * @ignore
 */var _DashConstants=require('../constants/DashConstants');var _DashConstants2=_interopRequireDefault(_DashConstants);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Representation=function(){function Representation(){_classCallCheck(this,Representation);this.id=null;this.index=-1;this.adaptation=null;this.segmentInfoType=null;this.initialization=null;this.codecs=null;this.codecPrivateData=null;this.segmentDuration=NaN;this.timescale=1;this.startNumber=1;this.indexRange=null;this.range=null;this.presentationTimeOffset=0;// Set the source buffer timeOffset to this
this.MSETimeOffset=NaN;this.segmentAvailabilityRange=null;this.availableSegmentsNumber=0;this.bandwidth=NaN;this.width=NaN;this.height=NaN;this.scanType=null;this.maxPlayoutRate=NaN;this.availabilityTimeOffset=0;this.availabilityTimeComplete=true;}_createClass(Representation,[{key:'hasInitialization',value:function hasInitialization(){return this.initialization!==null||this.range!==null;}},{key:'hasSegments',value:function hasSegments(){return this.segmentInfoType!==_DashConstants2.default.BASE_URL&&this.segmentInfoType!==_DashConstants2.default.SEGMENT_BASE&&!this.indexRange;}}]);return Representation;}();exports.default=Representation;
//# sourceMappingURL=Representation.js.map
