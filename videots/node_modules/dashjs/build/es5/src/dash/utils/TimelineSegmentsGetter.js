'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _FactoryMaker=require('../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);var _Constants=require('../../streaming/constants/Constants');var _Constants2=_interopRequireDefault(_Constants);var _SegmentsUtils=require('./SegmentsUtils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function TimelineSegmentsGetter(config,isDynamic){config=config||{};var timelineConverter=config.timelineConverter;var instance=void 0;function checkConfig(){if(!timelineConverter||!timelineConverter.hasOwnProperty('calcMediaTimeFromPresentationTime')||!timelineConverter.hasOwnProperty('calcSegmentAvailabilityRange')){throw new Error(_Constants2.default.MISSING_CONFIG_ERROR);}}function iterateSegments(representation,iterFunc){var base=representation.adaptation.period.mpd.manifest.Period_asArray[representation.adaptation.period.index].AdaptationSet_asArray[representation.adaptation.index].Representation_asArray[representation.index].SegmentTemplate||representation.adaptation.period.mpd.manifest.Period_asArray[representation.adaptation.period.index].AdaptationSet_asArray[representation.adaptation.index].Representation_asArray[representation.index].SegmentList;var timeline=base.SegmentTimeline;var list=base.SegmentURL_asArray;var time=0;var scaledTime=0;var availabilityIdx=-1;var fragments=void 0,frag=void 0,i=void 0,len=void 0,j=void 0,repeat=void 0,repeatEndTime=void 0,nextFrag=void 0,fTimescale=void 0;fTimescale=representation.timescale;fragments=timeline.S_asArray;var breakIterator=false;for(i=0,len=fragments.length;i<len&&!breakIterator;i++){frag=fragments[i];repeat=0;if(frag.hasOwnProperty('r')){repeat=frag.r;}// For a repeated S element, t belongs only to the first segment
if(frag.hasOwnProperty('t')){time=frag.t;scaledTime=time/fTimescale;}// This is a special case: "A negative value of the @r attribute of the S element indicates that the duration indicated in @d attribute repeats until the start of the next S element, the end of the Period or until the
// next MPD update."
if(repeat<0){nextFrag=fragments[i+1];if(nextFrag&&nextFrag.hasOwnProperty('t')){repeatEndTime=nextFrag.t/fTimescale;}else{var availabilityEnd=representation.segmentAvailabilityRange?representation.segmentAvailabilityRange.end:timelineConverter.calcSegmentAvailabilityRange(representation,isDynamic).end;repeatEndTime=timelineConverter.calcMediaTimeFromPresentationTime(availabilityEnd,representation);representation.segmentDuration=frag.d/fTimescale;}repeat=Math.ceil((repeatEndTime-scaledTime)/(frag.d/fTimescale))-1;}for(j=0;j<=repeat&&!breakIterator;j++){availabilityIdx++;breakIterator=iterFunc(time,scaledTime,base,list,frag,fTimescale,availabilityIdx,i);if(breakIterator){representation.segmentDuration=frag.d/fTimescale;// check if there is at least one more segment
if(j<repeat-1||i<len-1){availabilityIdx++;}}time+=frag.d;scaledTime=time/fTimescale;}}representation.availableSegmentsNumber=availabilityIdx;}function getSegmentByIndex(representation,index,lastSegmentTime){checkConfig();if(!representation){return null;}var segment=null;var found=false;iterateSegments(representation,function(time,scaledTime,base,list,frag,fTimescale,availabilityIdx,i){if(found||lastSegmentTime<0){var media=base.media;var mediaRange=frag.mediaRange;if(list){media=list[i].media||'';mediaRange=list[i].mediaRange;}segment=(0,_SegmentsUtils.getTimeBasedSegment)(timelineConverter,isDynamic,representation,time,frag.d,fTimescale,media,mediaRange,availabilityIdx,frag.tManifest);return true;}else if(scaledTime>=lastSegmentTime-frag.d*0.5/fTimescale){// same logic, if deviation is
// 50% of segment duration, segment is found if scaledTime is greater than or equal to (startTime of previous segment - half of the previous segment duration)
found=true;}return false;});return segment;}function getSegmentByTime(representation,requestedTime){checkConfig();if(!representation){return null;}if(requestedTime===undefined){requestedTime=null;}var segment=null;var requiredMediaTime=timelineConverter.calcMediaTimeFromPresentationTime(requestedTime,representation);iterateSegments(representation,function(time,scaledTime,base,list,frag,fTimescale,availabilityIdx,i){// In some cases when requiredMediaTime = actual end time of the last segment
// it is possible that this time a bit exceeds the declared end time of the last segment.
// in this case we still need to include the last segment in the segment list.
if(requiredMediaTime<scaledTime+frag.d/fTimescale){var media=base.media;var mediaRange=frag.mediaRange;if(list){media=list[i].media||'';mediaRange=list[i].mediaRange;}segment=(0,_SegmentsUtils.getTimeBasedSegment)(timelineConverter,isDynamic,representation,time,frag.d,fTimescale,media,mediaRange,availabilityIdx,frag.tManifest);return true;}return false;});return segment;}instance={getSegmentByIndex:getSegmentByIndex,getSegmentByTime:getSegmentByTime};return instance;}/**
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
 */TimelineSegmentsGetter.__dashjs_factory_name='TimelineSegmentsGetter';var factory=_FactoryMaker2.default.getClassFactory(TimelineSegmentsGetter);exports.default=factory;
//# sourceMappingURL=TimelineSegmentsGetter.js.map
