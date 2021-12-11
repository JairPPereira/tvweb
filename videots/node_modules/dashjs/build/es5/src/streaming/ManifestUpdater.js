'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _EventBus=require('../core/EventBus');var _EventBus2=_interopRequireDefault(_EventBus);var _Events=require('../core/events/Events');var _Events2=_interopRequireDefault(_Events);var _FactoryMaker=require('../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);var _Debug=require('../core/Debug');var _Debug2=_interopRequireDefault(_Debug);var _Errors=require('../core/errors/Errors');var _Errors2=_interopRequireDefault(_Errors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function ManifestUpdater(){var context=this.context;var eventBus=(0,_EventBus2.default)(context).getInstance();var instance=void 0,logger=void 0,refreshDelay=void 0,refreshTimer=void 0,isPaused=void 0,isUpdating=void 0,manifestLoader=void 0,manifestModel=void 0,adapter=void 0,errHandler=void 0,settings=void 0;function setup(){logger=(0,_Debug2.default)(context).getInstance().getLogger(instance);}function setConfig(config){if(!config)return;if(config.manifestModel){manifestModel=config.manifestModel;}if(config.adapter){adapter=config.adapter;}if(config.manifestLoader){manifestLoader=config.manifestLoader;}if(config.errHandler){errHandler=config.errHandler;}if(config.settings){settings=config.settings;}}function initialize(){resetInitialSettings();eventBus.on(_Events2.default.STREAMS_COMPOSED,onStreamsComposed,this);eventBus.on(_Events2.default.PLAYBACK_STARTED,onPlaybackStarted,this);eventBus.on(_Events2.default.PLAYBACK_PAUSED,onPlaybackPaused,this);eventBus.on(_Events2.default.INTERNAL_MANIFEST_LOADED,onManifestLoaded,this);}function setManifest(manifest){update(manifest);}function resetInitialSettings(){refreshDelay=NaN;isUpdating=false;isPaused=true;stopManifestRefreshTimer();}function reset(){eventBus.off(_Events2.default.PLAYBACK_STARTED,onPlaybackStarted,this);eventBus.off(_Events2.default.PLAYBACK_PAUSED,onPlaybackPaused,this);eventBus.off(_Events2.default.STREAMS_COMPOSED,onStreamsComposed,this);eventBus.off(_Events2.default.INTERNAL_MANIFEST_LOADED,onManifestLoaded,this);resetInitialSettings();}function stopManifestRefreshTimer(){if(refreshTimer!==null){clearTimeout(refreshTimer);refreshTimer=null;}}function startManifestRefreshTimer(delay){stopManifestRefreshTimer();if(isNaN(delay)&&!isNaN(refreshDelay)){delay=refreshDelay*1000;}if(!isNaN(delay)){logger.debug('Refresh manifest in '+delay+' milliseconds.');refreshTimer=setTimeout(onRefreshTimer,delay);}}function refreshManifest(){isUpdating=true;var manifest=manifestModel.getValue();var url=manifest.url;var location=adapter.getLocation(manifest);if(location){url=location;}manifestLoader.load(url);}function update(manifest){manifestModel.setValue(manifest);var date=new Date();var latencyOfLastUpdate=(date.getTime()-manifest.loadedTime.getTime())/1000;refreshDelay=adapter.getManifestUpdatePeriod(manifest,latencyOfLastUpdate);// setTimeout uses a 32 bit number to store the delay. Any number greater than it
// will cause event associated with setTimeout to trigger immediately
if(refreshDelay*1000>0x7FFFFFFF){refreshDelay=0x7FFFFFFF/1000;}eventBus.trigger(_Events2.default.MANIFEST_UPDATED,{manifest:manifest});logger.info('Manifest has been refreshed at '+date+'['+date.getTime()/1000+'] ');if(!isPaused){startManifestRefreshTimer();}}function onRefreshTimer(){if(isPaused&&!settings.get().streaming.scheduleWhilePaused){return;}if(isUpdating){startManifestRefreshTimer(settings.get().streaming.manifestUpdateRetryInterval);return;}refreshManifest();}function onManifestLoaded(e){if(!e.error){update(e.manifest);}else if(e.error.code===_Errors2.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE){errHandler.error(e.error);}}function onPlaybackStarted()/*e*/{isPaused=false;startManifestRefreshTimer();}function onPlaybackPaused()/*e*/{isPaused=true;stopManifestRefreshTimer();}function onStreamsComposed()/*e*/{// When streams are ready we can consider manifest update completed. Resolve the update promise.
isUpdating=false;}instance={initialize:initialize,setManifest:setManifest,refreshManifest:refreshManifest,setConfig:setConfig,reset:reset};setup();return instance;}/**
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
 */ManifestUpdater.__dashjs_factory_name='ManifestUpdater';exports.default=_FactoryMaker2.default.getClassFactory(ManifestUpdater);
//# sourceMappingURL=ManifestUpdater.js.map
