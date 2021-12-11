'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Constants=require('../constants/Constants');var _Constants2=_interopRequireDefault(_Constants);var _FactoryMaker=require('../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// throughput generally stored in kbit/s
// latency generally stored in ms
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2017, Dash Industry Forum.
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
 */function ThroughputHistory(config){config=config||{};// sliding window constants
var MAX_MEASUREMENTS_TO_KEEP=20;var AVERAGE_THROUGHPUT_SAMPLE_AMOUNT_LIVE=3;var AVERAGE_THROUGHPUT_SAMPLE_AMOUNT_VOD=4;var AVERAGE_LATENCY_SAMPLE_AMOUNT=4;var THROUGHPUT_DECREASE_SCALE=1.3;var THROUGHPUT_INCREASE_SCALE=1.3;// EWMA constants
var EWMA_THROUGHPUT_SLOW_HALF_LIFE_SECONDS=8;var EWMA_THROUGHPUT_FAST_HALF_LIFE_SECONDS=3;var EWMA_LATENCY_SLOW_HALF_LIFE_COUNT=2;var EWMA_LATENCY_FAST_HALF_LIFE_COUNT=1;var settings=config.settings;var throughputDict=void 0,latencyDict=void 0,ewmaThroughputDict=void 0,ewmaLatencyDict=void 0,ewmaHalfLife=void 0;function setup(){ewmaHalfLife={throughputHalfLife:{fast:EWMA_THROUGHPUT_FAST_HALF_LIFE_SECONDS,slow:EWMA_THROUGHPUT_SLOW_HALF_LIFE_SECONDS},latencyHalfLife:{fast:EWMA_LATENCY_FAST_HALF_LIFE_COUNT,slow:EWMA_LATENCY_SLOW_HALF_LIFE_COUNT}};reset();}function isCachedResponse(mediaType,latencyMs,downloadTimeMs){if(mediaType===_Constants2.default.VIDEO){return downloadTimeMs<settings.get().streaming.cacheLoadThresholds[_Constants2.default.VIDEO];}else if(mediaType===_Constants2.default.AUDIO){return downloadTimeMs<settings.get().streaming.cacheLoadThresholds[_Constants2.default.AUDIO];}}function push(mediaType,httpRequest,useDeadTimeLatency){if(!httpRequest.trace||!httpRequest.trace.length){return;}var latencyTimeInMilliseconds=httpRequest.tresponse.getTime()-httpRequest.trequest.getTime()||1;var downloadTimeInMilliseconds=httpRequest._tfinish.getTime()-httpRequest.tresponse.getTime()||1;//Make sure never 0 we divide by this value. Avoid infinity!
var downloadBytes=httpRequest.trace.reduce(function(a,b){return a+b.b[0];},0);var throughputMeasureTime=void 0;if(settings.get().streaming.lowLatencyEnabled){throughputMeasureTime=httpRequest.trace.reduce(function(a,b){return a+b.d;},0);}else{throughputMeasureTime=useDeadTimeLatency?downloadTimeInMilliseconds:latencyTimeInMilliseconds+downloadTimeInMilliseconds;}var throughput=Math.round(8*downloadBytes/throughputMeasureTime);// bits/ms = kbits/s
checkSettingsForMediaType(mediaType);if(isCachedResponse(mediaType,latencyTimeInMilliseconds,downloadTimeInMilliseconds)){if(throughputDict[mediaType].length>0&&!throughputDict[mediaType].hasCachedEntries){// already have some entries which are not cached entries
// prevent cached fragment loads from skewing the average values
return;}else{// have no entries || have cached entries
// no uncached entries yet, rely on cached entries because ABR rules need something to go by
throughputDict[mediaType].hasCachedEntries=true;}}else if(throughputDict[mediaType]&&throughputDict[mediaType].hasCachedEntries){// if we are here then we have some entries already, but they are cached, and now we have a new uncached entry
clearSettingsForMediaType(mediaType);}throughputDict[mediaType].push(throughput);if(throughputDict[mediaType].length>MAX_MEASUREMENTS_TO_KEEP){throughputDict[mediaType].shift();}latencyDict[mediaType].push(latencyTimeInMilliseconds);if(latencyDict[mediaType].length>MAX_MEASUREMENTS_TO_KEEP){latencyDict[mediaType].shift();}updateEwmaEstimate(ewmaThroughputDict[mediaType],throughput,0.001*downloadTimeInMilliseconds,ewmaHalfLife.throughputHalfLife);updateEwmaEstimate(ewmaLatencyDict[mediaType],latencyTimeInMilliseconds,1,ewmaHalfLife.latencyHalfLife);}function updateEwmaEstimate(ewmaObj,value,weight,halfLife){// Note about startup:
// Estimates start at 0, so early values are underestimated.
// This effect is countered in getAverageEwma() by dividing the estimates by:
//     1 - Math.pow(0.5, ewmaObj.totalWeight / halfLife)
var fastAlpha=Math.pow(0.5,weight/halfLife.fast);ewmaObj.fastEstimate=(1-fastAlpha)*value+fastAlpha*ewmaObj.fastEstimate;var slowAlpha=Math.pow(0.5,weight/halfLife.slow);ewmaObj.slowEstimate=(1-slowAlpha)*value+slowAlpha*ewmaObj.slowEstimate;ewmaObj.totalWeight+=weight;}function getSampleSize(isThroughput,mediaType,isLive){var arr=void 0,sampleSize=void 0;if(isThroughput){arr=throughputDict[mediaType];sampleSize=isLive?AVERAGE_THROUGHPUT_SAMPLE_AMOUNT_LIVE:AVERAGE_THROUGHPUT_SAMPLE_AMOUNT_VOD;}else{arr=latencyDict[mediaType];sampleSize=AVERAGE_LATENCY_SAMPLE_AMOUNT;}if(!arr){sampleSize=0;}else if(sampleSize>=arr.length){sampleSize=arr.length;}else if(isThroughput){// if throughput samples vary a lot, average over a wider sample
for(var i=1;i<sampleSize;++i){var ratio=arr[i]/arr[i-1];if(ratio>=THROUGHPUT_INCREASE_SCALE||ratio<=1/THROUGHPUT_DECREASE_SCALE){sampleSize+=1;if(sampleSize===arr.length){// cannot increase sampleSize beyond arr.length
break;}}}}return sampleSize;}function getAverage(isThroughput,mediaType,isDynamic){// only two moving average methods defined at the moment
return settings.get().streaming.abr.movingAverageMethod!==_Constants2.default.MOVING_AVERAGE_SLIDING_WINDOW?getAverageEwma(isThroughput,mediaType):getAverageSlidingWindow(isThroughput,mediaType,isDynamic);}function getAverageSlidingWindow(isThroughput,mediaType,isDynamic){var sampleSize=getSampleSize(isThroughput,mediaType,isDynamic);var dict=isThroughput?throughputDict:latencyDict;var arr=dict[mediaType];if(sampleSize===0||!arr||arr.length===0){return NaN;}arr=arr.slice(-sampleSize);// still works if sampleSize too large
// arr.length >= 1
return arr.reduce(function(total,elem){return total+elem;})/arr.length;}function getAverageEwma(isThroughput,mediaType){var halfLife=isThroughput?ewmaHalfLife.throughputHalfLife:ewmaHalfLife.latencyHalfLife;var ewmaObj=isThroughput?ewmaThroughputDict[mediaType]:ewmaLatencyDict[mediaType];if(!ewmaObj||ewmaObj.totalWeight<=0){return NaN;}// to correct for startup, divide by zero factor = 1 - Math.pow(0.5, ewmaObj.totalWeight / halfLife)
var fastEstimate=ewmaObj.fastEstimate/(1-Math.pow(0.5,ewmaObj.totalWeight/halfLife.fast));var slowEstimate=ewmaObj.slowEstimate/(1-Math.pow(0.5,ewmaObj.totalWeight/halfLife.slow));return isThroughput?Math.min(fastEstimate,slowEstimate):Math.max(fastEstimate,slowEstimate);}function getAverageThroughput(mediaType,isDynamic){return getAverage(true,mediaType,isDynamic);}function getSafeAverageThroughput(mediaType,isDynamic){var average=getAverageThroughput(mediaType,isDynamic);if(!isNaN(average)){average*=settings.get().streaming.abr.bandwidthSafetyFactor;}return average;}function getAverageLatency(mediaType){return getAverage(false,mediaType);}function checkSettingsForMediaType(mediaType){throughputDict[mediaType]=throughputDict[mediaType]||[];latencyDict[mediaType]=latencyDict[mediaType]||[];ewmaThroughputDict[mediaType]=ewmaThroughputDict[mediaType]||{fastEstimate:0,slowEstimate:0,totalWeight:0};ewmaLatencyDict[mediaType]=ewmaLatencyDict[mediaType]||{fastEstimate:0,slowEstimate:0,totalWeight:0};}function clearSettingsForMediaType(mediaType){delete throughputDict[mediaType];delete latencyDict[mediaType];delete ewmaThroughputDict[mediaType];delete ewmaLatencyDict[mediaType];checkSettingsForMediaType(mediaType);}function reset(){throughputDict={};latencyDict={};ewmaThroughputDict={};ewmaLatencyDict={};}var instance={push:push,getAverageThroughput:getAverageThroughput,getSafeAverageThroughput:getSafeAverageThroughput,getAverageLatency:getAverageLatency,reset:reset};setup();return instance;}ThroughputHistory.__dashjs_factory_name='ThroughputHistory';exports.default=_FactoryMaker2.default.getClassFactory(ThroughputHistory);
//# sourceMappingURL=ThroughputHistory.js.map
