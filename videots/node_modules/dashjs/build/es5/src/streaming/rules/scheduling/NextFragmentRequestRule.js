'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Constants=require('../../constants/Constants');var _Constants2=_interopRequireDefault(_Constants);var _Debug=require('../../../core/Debug');var _Debug2=_interopRequireDefault(_Debug);var _FactoryMaker=require('../../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);var _FragmentRequest=require('../../../streaming/vo/FragmentRequest');var _FragmentRequest2=_interopRequireDefault(_FragmentRequest);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
 */function NextFragmentRequestRule(config){config=config||{};var context=this.context;var textController=config.textController;var playbackController=config.playbackController;var instance=void 0,logger=void 0;function setup(){logger=(0,_Debug2.default)(context).getInstance().getLogger(instance);}function execute(streamProcessor,seekTarget,requestToReplace){if(!streamProcessor){return null;}var representationInfo=streamProcessor.getRepresentationInfo();var mediaType=streamProcessor.getType();var hasSeekTarget=!isNaN(seekTarget);var bufferController=streamProcessor.getBufferController();var currentTime=playbackController.getNormalizedTime();var time=hasSeekTarget?seekTarget:streamProcessor.getIndexHandlerTime();var bufferIsDivided=false;var request=void 0;if(isNaN(time)||mediaType===_Constants2.default.FRAGMENTED_TEXT&&!textController.isTextEnabled()){return null;}/**
         * This is critical for IE/Safari/EDGE
         * */if(bufferController){var range=bufferController.getRangeAt(time);var playingRange=bufferController.getRangeAt(currentTime);var hasDiscontinuities=bufferController.getBuffer().hasDiscontinuitiesAfter(currentTime);if((range!==null||playingRange!==null)&&!hasSeekTarget){if(!range||playingRange&&playingRange.start!=range.start&&playingRange.end!=range.end){if(hasDiscontinuities&&mediaType!==_Constants2.default.FRAGMENTED_TEXT){streamProcessor.getFragmentModel().removeExecutedRequestsAfterTime(playingRange.end);bufferIsDivided=true;}range=playingRange;}}}if(requestToReplace){time=requestToReplace.startTime+requestToReplace.duration/2;request=streamProcessor.getFragmentRequest(representationInfo,time,{timeThreshold:0,ignoreIsFinished:true});}else{// Use time just whenever is strictly needed
request=streamProcessor.getFragmentRequest(representationInfo,hasSeekTarget||bufferIsDivided?time:undefined,{keepIdx:!hasSeekTarget&&!bufferIsDivided});// Then, check if this request was downloaded or not
while(request&&request.action!==_FragmentRequest2.default.ACTION_COMPLETE&&streamProcessor.getFragmentModel().isFragmentLoaded(request)){// loop until we found not loaded fragment, or no fragment
request=streamProcessor.getFragmentRequest(representationInfo);}}return request;}instance={execute:execute};setup();return instance;}NextFragmentRequestRule.__dashjs_factory_name='NextFragmentRequestRule';exports.default=_FactoryMaker2.default.getClassFactory(NextFragmentRequestRule);
//# sourceMappingURL=NextFragmentRequestRule.js.map
