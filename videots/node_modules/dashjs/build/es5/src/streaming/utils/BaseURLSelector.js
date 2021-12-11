'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Errors=require('../../core/errors/Errors');var _Errors2=_interopRequireDefault(_Errors);var _EventBus=require('../../core/EventBus');var _EventBus2=_interopRequireDefault(_EventBus);var _Events=require('../../core/events/Events');var _Events2=_interopRequireDefault(_Events);var _BlacklistController=require('../controllers/BlacklistController');var _BlacklistController2=_interopRequireDefault(_BlacklistController);var _DVBSelector=require('./baseUrlResolution/DVBSelector');var _DVBSelector2=_interopRequireDefault(_DVBSelector);var _BasicSelector=require('./baseUrlResolution/BasicSelector');var _BasicSelector2=_interopRequireDefault(_BasicSelector);var _FactoryMaker=require('../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);var _DashJSError=require('../vo/DashJSError');var _DashJSError2=_interopRequireDefault(_DashJSError);var _SupervisorTools=require('../utils/SupervisorTools');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function BaseURLSelector(){var context=this.context;var eventBus=(0,_EventBus2.default)(context).getInstance();var instance=void 0,serviceLocationBlacklistController=void 0,basicSelector=void 0,dvbSelector=void 0,selector=void 0;function setup(){serviceLocationBlacklistController=(0,_BlacklistController2.default)(context).create({updateEventName:_Events2.default.SERVICE_LOCATION_BLACKLIST_CHANGED,addBlacklistEventName:_Events2.default.SERVICE_LOCATION_BLACKLIST_ADD});basicSelector=(0,_BasicSelector2.default)(context).create({blacklistController:serviceLocationBlacklistController});dvbSelector=(0,_DVBSelector2.default)(context).create({blacklistController:serviceLocationBlacklistController});selector=basicSelector;}function setConfig(config){if(config.selector){selector=config.selector;}}function chooseSelector(isDVB){(0,_SupervisorTools.checkParameterType)(isDVB,'boolean');selector=isDVB?dvbSelector:basicSelector;}function select(data){if(!data){return;}var baseUrls=data.baseUrls;var selectedIdx=data.selectedIdx;// Once a random selection has been carried out amongst a group of BaseURLs with the same
// @priority attribute value, then that choice should be re-used if the selection needs to be made again
// unless the blacklist has been modified or the available BaseURLs have changed.
if(!isNaN(selectedIdx)){return baseUrls[selectedIdx];}var selectedBaseUrl=selector.select(baseUrls);if(!selectedBaseUrl){eventBus.trigger(_Events2.default.URL_RESOLUTION_FAILED,{error:new _DashJSError2.default(_Errors2.default.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE,_Errors2.default.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE)});if(selector===basicSelector){reset();}return;}data.selectedIdx=baseUrls.indexOf(selectedBaseUrl);return selectedBaseUrl;}function reset(){serviceLocationBlacklistController.reset();}instance={chooseSelector:chooseSelector,select:select,reset:reset,setConfig:setConfig};setup();return instance;}/**
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
 */BaseURLSelector.__dashjs_factory_name='BaseURLSelector';exports.default=_FactoryMaker2.default.getClassFactory(BaseURLSelector);
//# sourceMappingURL=BaseURLSelector.js.map
