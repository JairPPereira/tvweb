'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _FactoryMaker=require('../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);var _Debug=require('../../core/Debug');var _Debug2=_interopRequireDefault(_Debug);var _EventBus=require('../../core/EventBus');var _EventBus2=_interopRequireDefault(_EventBus);var _Events=require('../../core/events/Events');var _Events2=_interopRequireDefault(_Events);var _XHRLoader=require('../net/XHRLoader');var _XHRLoader2=_interopRequireDefault(_XHRLoader);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function EventController(){var MPD_RELOAD_SCHEME='urn:mpeg:dash:event:2012';var MPD_RELOAD_VALUE=1;var MPD_CALLBACK_SCHEME='urn:mpeg:dash:event:callback:2015';var MPD_CALLBACK_VALUE=1;var context=this.context;var eventBus=(0,_EventBus2.default)(context).getInstance();var instance=void 0,logger=void 0,inlineEvents=void 0,// Holds all Inline Events not triggered yet
inbandEvents=void 0,// Holds all Inband Events not triggered yet
activeEvents=void 0,// Holds all Events currently running
eventInterval=void 0,// variable holding the setInterval
refreshDelay=void 0,// refreshTime for the setInterval
lastEventTimerCall=void 0,manifestUpdater=void 0,playbackController=void 0,isStarted=void 0;function setup(){logger=(0,_Debug2.default)(context).getInstance().getLogger(instance);resetInitialSettings();}function resetInitialSettings(){isStarted=false;inlineEvents={};inbandEvents={};activeEvents={};eventInterval=null;refreshDelay=100;lastEventTimerCall=Date.now()/1000;}function checkConfig(){if(!manifestUpdater||!playbackController){throw new Error('setConfig function has to be called previously');}}function stop(){if(eventInterval!==null&&isStarted){clearInterval(eventInterval);eventInterval=null;isStarted=false;}}function start(){checkConfig();logger.debug('Start Event Controller');if(!isStarted&&!isNaN(refreshDelay)){isStarted=true;eventInterval=setInterval(onEventTimer,refreshDelay);}}/**
     * Add events to the eventList. Events that are not in the mpd anymore but not triggered yet will still be deleted
     * @param {Array.<Object>} values
     */function addInlineEvents(values){checkConfig();inlineEvents={};if(values){for(var i=0;i<values.length;i++){var event=values[i];inlineEvents[event.id]=event;logger.debug('Add inline event with id '+event.id);}}logger.debug('Added '+values.length+' inline events');}/**
     * i.e. processing of any one event message box with the same id is sufficient
     * @param {Array.<Object>} values
     */function addInbandEvents(values){checkConfig();for(var i=0;i<values.length;i++){var event=values[i];if(!(event.id in inbandEvents)){if(event.eventStream.schemeIdUri===MPD_RELOAD_SCHEME&&inbandEvents[event.id]===undefined){handleManifestReloadEvent(event);}inbandEvents[event.id]=event;logger.debug('Add inband event with id '+event.id);}else{logger.debug('Repeated event with id '+event.id);}}}function handleManifestReloadEvent(event){if(event.eventStream.value==MPD_RELOAD_VALUE){var timescale=event.eventStream.timescale||1;var validUntil=event.presentationTime/timescale;var newDuration=void 0;if(event.presentationTime==0xFFFFFFFF){//0xFF... means remaining duration unknown
newDuration=NaN;}else{newDuration=(event.presentationTime+event.duration)/timescale;}logger.info('Manifest validity changed: Valid until: '+validUntil+'; remaining duration: '+newDuration);eventBus.trigger(_Events2.default.MANIFEST_VALIDITY_CHANGED,{id:event.id,validUntil:validUntil,newDuration:newDuration,newManifestValidAfter:NaN//event.message_data - this is an arraybuffer with a timestring in it, but not used yet
});}}/**
     * Remove events which are over from the list
     */function removeEvents(){if(activeEvents){var currentVideoTime=playbackController.getTime();var eventIds=Object.keys(activeEvents);for(var i=0;i<eventIds.length;i++){var eventId=eventIds[i];var curr=activeEvents[eventId];if(curr!==null&&(curr.duration+curr.presentationTime)/curr.eventStream.timescale<currentVideoTime){logger.debug('Remove Event '+eventId+' at time '+currentVideoTime);curr=null;delete activeEvents[eventId];}}}}/**
     * Iterate through the eventList and trigger/remove the events
     */function onEventTimer(){var currentVideoTime=playbackController.getTime();var presentationTimeThreshold=currentVideoTime-lastEventTimerCall;lastEventTimerCall=currentVideoTime;presentationTimeThreshold=Math.max(0,presentationTimeThreshold);triggerEvents(inbandEvents,presentationTimeThreshold,currentVideoTime);triggerEvents(inlineEvents,presentationTimeThreshold,currentVideoTime);removeEvents();}function refreshManifest(){checkConfig();manifestUpdater.refreshManifest();}function sendCallbackRequest(url){var loader=(0,_XHRLoader2.default)(context).create({});loader.load({method:'get',url:url,request:{responseType:'arraybuffer'}});}function triggerEvents(events,presentationTimeThreshold,currentVideoTime){var presentationTime;/* == Trigger events that are ready == */if(events){var eventIds=Object.keys(events);for(var i=0;i<eventIds.length;i++){var eventId=eventIds[i];var curr=events[eventId];if(curr!==undefined){presentationTime=curr.presentationTime/curr.eventStream.timescale;if(presentationTime===0||presentationTime<=currentVideoTime&&presentationTime+presentationTimeThreshold>currentVideoTime){logger.debug('Start Event '+eventId+' at '+currentVideoTime);if(curr.duration>0){activeEvents[eventId]=curr;}if(curr.eventStream.schemeIdUri==MPD_RELOAD_SCHEME&&curr.eventStream.value==MPD_RELOAD_VALUE){if(curr.duration!==0||curr.presentationTimeDelta!==0){//If both are set to zero, it indicates the media is over at this point. Don't reload the manifest.
refreshManifest();}}else if(curr.eventStream.schemeIdUri==MPD_CALLBACK_SCHEME&&curr.eventStream.value==MPD_CALLBACK_VALUE){sendCallbackRequest(curr.messageData);}else{eventBus.trigger(curr.eventStream.schemeIdUri,{event:curr});}delete events[eventId];}else if(presentationTime<=currentVideoTime-presentationTimeThreshold){delete events[eventId];}}}}}function setConfig(config){if(!config)return;if(config.manifestUpdater){manifestUpdater=config.manifestUpdater;}if(config.playbackController){playbackController=config.playbackController;}}function reset(){stop();resetInitialSettings();}instance={addInlineEvents:addInlineEvents,addInbandEvents:addInbandEvents,stop:stop,start:start,setConfig:setConfig,reset:reset};setup();return instance;}/**
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
 */EventController.__dashjs_factory_name='EventController';exports.default=_FactoryMaker2.default.getClassFactory(EventController);
//# sourceMappingURL=EventController.js.map
