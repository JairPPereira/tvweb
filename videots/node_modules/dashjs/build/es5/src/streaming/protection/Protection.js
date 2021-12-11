'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _ProtectionController=require('./controllers/ProtectionController');var _ProtectionController2=_interopRequireDefault(_ProtectionController);var _ProtectionKeyController=require('./controllers/ProtectionKeyController');var _ProtectionKeyController2=_interopRequireDefault(_ProtectionKeyController);var _ProtectionEvents=require('./ProtectionEvents');var _ProtectionEvents2=_interopRequireDefault(_ProtectionEvents);var _ProtectionErrors=require('./errors/ProtectionErrors');var _ProtectionErrors2=_interopRequireDefault(_ProtectionErrors);var _ProtectionModel_21Jan=require('./models/ProtectionModel_21Jan2015');var _ProtectionModel_21Jan2=_interopRequireDefault(_ProtectionModel_21Jan);var _ProtectionModel_3Feb=require('./models/ProtectionModel_3Feb2014');var _ProtectionModel_3Feb2=_interopRequireDefault(_ProtectionModel_3Feb);var _ProtectionModel_01b=require('./models/ProtectionModel_01b');var _ProtectionModel_01b2=_interopRequireDefault(_ProtectionModel_01b);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var APIS_ProtectionModel_01b=[// Un-prefixed as per spec
{// Video Element
generateKeyRequest:'generateKeyRequest',addKey:'addKey',cancelKeyRequest:'cancelKeyRequest',// Events
needkey:'needkey',keyerror:'keyerror',keyadded:'keyadded',keymessage:'keymessage'},// Webkit-prefixed (early Chrome versions and Chrome with EME disabled in chrome://flags)
{// Video Element
generateKeyRequest:'webkitGenerateKeyRequest',addKey:'webkitAddKey',cancelKeyRequest:'webkitCancelKeyRequest',// Events
needkey:'webkitneedkey',keyerror:'webkitkeyerror',keyadded:'webkitkeyadded',keymessage:'webkitkeymessage'}];/**
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
 */var APIS_ProtectionModel_3Feb2014=[// Un-prefixed as per spec
// Chrome 38-39 (and some earlier versions) with chrome://flags -- Enable Encrypted Media Extensions
{// Video Element
setMediaKeys:'setMediaKeys',// MediaKeys
MediaKeys:'MediaKeys',// MediaKeySession
release:'close',// Events
needkey:'needkey',error:'keyerror',message:'keymessage',ready:'keyadded',close:'keyclose'},// MS-prefixed (IE11, Windows 8.1)
{// Video Element
setMediaKeys:'msSetMediaKeys',// MediaKeys
MediaKeys:'MSMediaKeys',// MediaKeySession
release:'close',// Events
needkey:'msneedkey',error:'mskeyerror',message:'mskeymessage',ready:'mskeyadded',close:'mskeyclose'}];function Protection(){var instance=void 0;var context=this.context;/**
     * Create a ProtectionController and associated ProtectionModel for use with
     * a single piece of content.
     *
     * @param {Object} config
     * @return {ProtectionController} protection controller
     *
     */function createProtectionSystem(config){var controller=null;var protectionKeyController=(0,_ProtectionKeyController2.default)(context).getInstance();protectionKeyController.setConfig({debug:config.debug,BASE64:config.BASE64});protectionKeyController.initialize();var protectionModel=getProtectionModel(config);if(!controller&&protectionModel){//TODO add ability to set external controller if still needed at all?
controller=(0,_ProtectionController2.default)(context).create({protectionModel:protectionModel,protectionKeyController:protectionKeyController,eventBus:config.eventBus,debug:config.debug,events:config.events,BASE64:config.BASE64,constants:config.constants});config.capabilities.setEncryptedMediaSupported(true);}return controller;}function getProtectionModel(config){var debug=config.debug;var logger=debug.getLogger(instance);var eventBus=config.eventBus;var errHandler=config.errHandler;var videoElement=config.videoModel?config.videoModel.getElement():null;if((!videoElement||videoElement.onencrypted!==undefined)&&(!videoElement||videoElement.mediaKeys!==undefined)){logger.info('EME detected on this user agent! (ProtectionModel_21Jan2015)');return(0,_ProtectionModel_21Jan2.default)(context).create({debug:debug,eventBus:eventBus,events:config.events});}else if(getAPI(videoElement,APIS_ProtectionModel_3Feb2014)){logger.info('EME detected on this user agent! (ProtectionModel_3Feb2014)');return(0,_ProtectionModel_3Feb2.default)(context).create({debug:debug,eventBus:eventBus,events:config.events,api:getAPI(videoElement,APIS_ProtectionModel_3Feb2014)});}else if(getAPI(videoElement,APIS_ProtectionModel_01b)){logger.info('EME detected on this user agent! (ProtectionModel_01b)');return(0,_ProtectionModel_01b2.default)(context).create({debug:debug,eventBus:eventBus,errHandler:errHandler,events:config.events,api:getAPI(videoElement,APIS_ProtectionModel_01b)});}else{logger.warn('No supported version of EME detected on this user agent! - Attempts to play encrypted content will fail!');return null;}}function getAPI(videoElement,apis){for(var i=0;i<apis.length;i++){var api=apis[i];// detect if api is supported by browser
// check only first function in api -> should be fine
if(typeof videoElement[api[Object.keys(api)[0]]]!=='function'){continue;}return api;}return null;}instance={createProtectionSystem:createProtectionSystem};return instance;}Protection.__dashjs_factory_name='Protection';var factory=dashjs.FactoryMaker.getClassFactory(Protection);/* jshint ignore:line */factory.events=_ProtectionEvents2.default;factory.errors=_ProtectionErrors2.default;dashjs.FactoryMaker.updateClassFactory(Protection.__dashjs_factory_name,factory);/* jshint ignore:line */exports.default=factory;
//# sourceMappingURL=Protection.js.map
