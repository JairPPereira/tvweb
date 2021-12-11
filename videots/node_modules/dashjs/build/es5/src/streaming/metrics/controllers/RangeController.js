'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _CustomTimeRanges=require('../../utils/CustomTimeRanges');var _CustomTimeRanges2=_interopRequireDefault(_CustomTimeRanges);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function RangeController(config){config=config||{};var useWallClockTime=false;var context=this.context;var instance=void 0,ranges=void 0;var mediaElement=config.mediaElement;function initialize(rs){if(rs&&rs.length){rs.forEach(function(r){var start=r.starttime;var end=start+r.duration;ranges.add(start,end);});useWallClockTime=!!rs[0]._useWallClockTime;}}function reset(){ranges.clear();}function setup(){ranges=(0,_CustomTimeRanges2.default)(context).create();}function isEnabled(){var numRanges=ranges.length;var time=void 0;if(!numRanges){return true;}// When not present, DASH Metrics reporting is requested
// for the whole duration of the content.
time=useWallClockTime?new Date().getTime()/1000:mediaElement.currentTime;for(var i=0;i<numRanges;i+=1){var start=ranges.start(i);var end=ranges.end(i);if(start<=time&&time<end){return true;}}return false;}instance={initialize:initialize,reset:reset,isEnabled:isEnabled};setup();return instance;}/**
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
 */RangeController.__dashjs_factory_name='RangeController';exports.default=dashjs.FactoryMaker.getClassFactory(RangeController);/* jshint ignore:line */
//# sourceMappingURL=RangeController.js.map
