'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _ProtectionKeyController=require('../controllers/ProtectionKeyController');var _ProtectionKeyController2=_interopRequireDefault(_ProtectionKeyController);var _NeedKey=require('../vo/NeedKey');var _NeedKey2=_interopRequireDefault(_NeedKey);var _DashJSError=require('../../vo/DashJSError');var _DashJSError2=_interopRequireDefault(_DashJSError);var _KeyMessage=require('../vo/KeyMessage');var _KeyMessage2=_interopRequireDefault(_KeyMessage);var _KeySystemConfiguration=require('../vo/KeySystemConfiguration');var _KeySystemConfiguration2=_interopRequireDefault(_KeySystemConfiguration);var _KeySystemAccess=require('../vo/KeySystemAccess');var _KeySystemAccess2=_interopRequireDefault(_KeySystemAccess);var _ProtectionErrors=require('../errors/ProtectionErrors');var _ProtectionErrors2=_interopRequireDefault(_ProtectionErrors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function ProtectionModel_01b(config){config=config||{};var context=this.context;var eventBus=config.eventBus;//Need to pass in here so we can use same instance since this is optional module
var events=config.events;var debug=config.debug;var api=config.api;var errHandler=config.errHandler;var instance=void 0,logger=void 0,videoElement=void 0,keySystem=void 0,protectionKeyController=void 0,// With this version of the EME APIs, sessionIDs are not assigned to
// sessions until the first key message is received.  We are assuming
// that in the case of multiple sessions, key messages will be received
// in the order that generateKeyRequest() is called.
// Holding spot for newly-created sessions until we determine whether or
// not the CDM supports sessionIDs
pendingSessions=void 0,// List of sessions that have been initialized.  Only the first position will
// be used in the case that the CDM does not support sessionIDs
sessions=void 0,// Not all CDMs support the notion of sessionIDs.  Without sessionIDs
// there is no way for us to differentiate between sessions, therefore
// we must only allow a single session.  Once we receive the first key
// message we can set this flag to determine if more sessions are allowed
moreSessionsAllowed=void 0,// This is our main event handler for all desired HTMLMediaElement events
// related to EME.  These events are translated into our API-independent
// versions of the same events
eventHandler=void 0;function setup(){logger=debug.getLogger(instance);videoElement=null;keySystem=null;pendingSessions=[];sessions=[];protectionKeyController=(0,_ProtectionKeyController2.default)(context).getInstance();eventHandler=createEventHandler();}function reset(){if(videoElement){removeEventListeners();}for(var i=0;i<sessions.length;i++){closeKeySession(sessions[i]);}eventBus.trigger(events.TEARDOWN_COMPLETE);}function getKeySystem(){return keySystem;}function getAllInitData(){var retVal=[];for(var i=0;i<pendingSessions.length;i++){retVal.push(pendingSessions[i].initData);}for(var _i=0;_i<sessions.length;_i++){retVal.push(sessions[_i].initData);}return retVal;}function requestKeySystemAccess(ksConfigurations){var ve=videoElement;if(!ve){// Must have a video element to do this capability tests
ve=document.createElement('video');}// Try key systems in order, first one with supported key system configuration
// is used
var found=false;for(var ksIdx=0;ksIdx<ksConfigurations.length;ksIdx++){var systemString=ksConfigurations[ksIdx].ks.systemString;var configs=ksConfigurations[ksIdx].configs;var supportedAudio=null;var supportedVideo=null;// Try key system configs in order, first one with supported audio/video
// is used
for(var configIdx=0;configIdx<configs.length;configIdx++){//let audios = configs[configIdx].audioCapabilities;
var videos=configs[configIdx].videoCapabilities;// Look for supported video container/codecs
if(videos&&videos.length!==0){supportedVideo=[];// Indicates that we have a requested video config
for(var videoIdx=0;videoIdx<videos.length;videoIdx++){if(ve.canPlayType(videos[videoIdx].contentType,systemString)!==''){supportedVideo.push(videos[videoIdx]);}}}// No supported audio or video in this configuration OR we have
// requested audio or video configuration that is not supported
if(!supportedAudio&&!supportedVideo||supportedAudio&&supportedAudio.length===0||supportedVideo&&supportedVideo.length===0){continue;}// This configuration is supported
found=true;var ksConfig=new _KeySystemConfiguration2.default(supportedAudio,supportedVideo);var ks=protectionKeyController.getKeySystemBySystemString(systemString);eventBus.trigger(events.KEY_SYSTEM_ACCESS_COMPLETE,{data:new _KeySystemAccess2.default(ks,ksConfig)});break;}}if(!found){eventBus.trigger(events.KEY_SYSTEM_ACCESS_COMPLETE,{error:'Key system access denied! -- No valid audio/video content configurations detected!'});}}function selectKeySystem(keySystemAccess){keySystem=keySystemAccess.keySystem;eventBus.trigger(events.INTERNAL_KEY_SYSTEM_SELECTED);}function setMediaElement(mediaElement){if(videoElement===mediaElement){return;}// Replacing the previous element
if(videoElement){removeEventListeners();// Close any open sessions - avoids memory leak on LG webOS 2016/2017 TVs
for(var i=0;i<sessions.length;i++){closeKeySession(sessions[i]);}sessions=[];}videoElement=mediaElement;// Only if we are not detaching from the existing element
if(videoElement){videoElement.addEventListener(api.keyerror,eventHandler);videoElement.addEventListener(api.needkey,eventHandler);videoElement.addEventListener(api.keymessage,eventHandler);videoElement.addEventListener(api.keyadded,eventHandler);eventBus.trigger(events.VIDEO_ELEMENT_SELECTED);}}function createKeySession(initData/*, protData, keySystemType */){if(!keySystem){throw new Error('Can not create sessions until you have selected a key system');}// Determine if creating a new session is allowed
if(moreSessionsAllowed||sessions.length===0){var newSession={// Implements SessionToken
sessionID:null,initData:initData,getSessionID:function getSessionID(){return this.sessionID;},getExpirationTime:function getExpirationTime(){return NaN;},getSessionType:function getSessionType(){return'temporary';}};pendingSessions.push(newSession);// Send our request to the CDM
videoElement[api.generateKeyRequest](keySystem.systemString,new Uint8Array(initData));return newSession;}else{throw new Error('Multiple sessions not allowed!');}}function updateKeySession(sessionToken,message){var sessionID=sessionToken.sessionID;if(!protectionKeyController.isClearKey(keySystem)){// Send our request to the CDM
videoElement[api.addKey](keySystem.systemString,new Uint8Array(message),new Uint8Array(sessionToken.initData),sessionID);}else{// For clearkey, message is a ClearKeyKeySet
for(var i=0;i<message.keyPairs.length;i++){videoElement[api.addKey](keySystem.systemString,message.keyPairs[i].key,message.keyPairs[i].keyID,sessionID);}}}function closeKeySession(sessionToken){// Send our request to the CDM
try{videoElement[api.cancelKeyRequest](keySystem.systemString,sessionToken.sessionID);}catch(error){eventBus.trigger(events.KEY_SESSION_CLOSED,{data:null,error:'Error closing session ('+sessionToken.sessionID+') '+error.message});}}function setServerCertificate()/*serverCertificate*/{/* Not supported */}function loadKeySession()/*sessionID*/{/* Not supported */}function removeKeySession()/*sessionToken*/{/* Not supported */}function createEventHandler(){return{handleEvent:function handleEvent(event){var sessionToken=null;switch(event.type){case api.needkey:var initData=ArrayBuffer.isView(event.initData)?event.initData.buffer:event.initData;eventBus.trigger(events.NEED_KEY,{key:new _NeedKey2.default(initData,'cenc')});break;case api.keyerror:sessionToken=findSessionByID(sessions,event.sessionId);if(!sessionToken){sessionToken=findSessionByID(pendingSessions,event.sessionId);}if(sessionToken){var code=_ProtectionErrors2.default.MEDIA_KEYERR_CODE;var msg='';switch(event.errorCode.code){case 1:code=_ProtectionErrors2.default.MEDIA_KEYERR_UNKNOWN_CODE;msg+='MEDIA_KEYERR_UNKNOWN - '+_ProtectionErrors2.default.MEDIA_KEYERR_UNKNOWN_MESSAGE;break;case 2:code=_ProtectionErrors2.default.MEDIA_KEYERR_CLIENT_CODE;msg+='MEDIA_KEYERR_CLIENT - '+_ProtectionErrors2.default.MEDIA_KEYERR_CLIENT_MESSAGE;break;case 3:code=_ProtectionErrors2.default.MEDIA_KEYERR_SERVICE_CODE;msg+='MEDIA_KEYERR_SERVICE - '+_ProtectionErrors2.default.MEDIA_KEYERR_SERVICE_MESSAGE;break;case 4:code=_ProtectionErrors2.default.MEDIA_KEYERR_OUTPUT_CODE;msg+='MEDIA_KEYERR_OUTPUT - '+_ProtectionErrors2.default.MEDIA_KEYERR_OUTPUT_MESSAGE;break;case 5:code=_ProtectionErrors2.default.MEDIA_KEYERR_HARDWARECHANGE_CODE;msg+='MEDIA_KEYERR_HARDWARECHANGE - '+_ProtectionErrors2.default.MEDIA_KEYERR_HARDWARECHANGE_MESSAGE;break;case 6:code=_ProtectionErrors2.default.MEDIA_KEYERR_DOMAIN_CODE;msg+='MEDIA_KEYERR_DOMAIN - '+_ProtectionErrors2.default.MEDIA_KEYERR_DOMAIN_MESSAGE;break;}msg+='  System Code = '+event.systemCode;// TODO: Build error string based on key error
eventBus.trigger(events.KEY_ERROR,{data:new _DashJSError2.default(code,msg,sessionToken)});}else{logger.error('No session token found for key error');}break;case api.keyadded:sessionToken=findSessionByID(sessions,event.sessionId);if(!sessionToken){sessionToken=findSessionByID(pendingSessions,event.sessionId);}if(sessionToken){logger.debug('DRM: Key added.');eventBus.trigger(events.KEY_ADDED,{data:sessionToken});//TODO not sure anything is using sessionToken? why there?
}else{logger.debug('No session token found for key added');}break;case api.keymessage:// If this CDM does not support session IDs, we will be limited
// to a single session
moreSessionsAllowed=event.sessionId!==null&&event.sessionId!==undefined;// SessionIDs supported
if(moreSessionsAllowed){// Attempt to find an uninitialized token with this sessionID
sessionToken=findSessionByID(sessions,event.sessionId);if(!sessionToken&&pendingSessions.length>0){// This is the first message for our latest session, so set the
// sessionID and add it to our list
sessionToken=pendingSessions.shift();sessions.push(sessionToken);sessionToken.sessionID=event.sessionId;eventBus.trigger(events.KEY_SESSION_CREATED,{data:sessionToken});}}else if(pendingSessions.length>0){// SessionIDs not supported
sessionToken=pendingSessions.shift();sessions.push(sessionToken);if(pendingSessions.length!==0){errHandler.error(new _DashJSError2.default(_ProtectionErrors2.default.MEDIA_KEY_MESSAGE_ERROR_CODE,_ProtectionErrors2.default.MEDIA_KEY_MESSAGE_ERROR_MESSAGE));}}if(sessionToken){var message=ArrayBuffer.isView(event.message)?event.message.buffer:event.message;// For ClearKey, the spec mandates that you pass this message to the
// addKey method, so we always save it to the token since there is no
// way to tell which key system is in use
sessionToken.keyMessage=message;eventBus.trigger(events.INTERNAL_KEY_MESSAGE,{data:new _KeyMessage2.default(sessionToken,message,event.defaultURL)});}else{logger.warn('No session token found for key message');}break;}}};}/**
     * Helper function to retrieve the stored session token based on a given
     * sessionID value
     *
     * @param {Array} sessionArray - the array of sessions to search
     * @param {*} sessionID - the sessionID to search for
     * @returns {*} the session token with the given sessionID
     */function findSessionByID(sessionArray,sessionID){if(!sessionID||!sessionArray){return null;}else{var len=sessionArray.length;for(var i=0;i<len;i++){if(sessionArray[i].sessionID==sessionID){return sessionArray[i];}}return null;}}function removeEventListeners(){videoElement.removeEventListener(api.keyerror,eventHandler);videoElement.removeEventListener(api.needkey,eventHandler);videoElement.removeEventListener(api.keymessage,eventHandler);videoElement.removeEventListener(api.keyadded,eventHandler);}instance={getAllInitData:getAllInitData,requestKeySystemAccess:requestKeySystemAccess,getKeySystem:getKeySystem,selectKeySystem:selectKeySystem,setMediaElement:setMediaElement,createKeySession:createKeySession,updateKeySession:updateKeySession,closeKeySession:closeKeySession,setServerCertificate:setServerCertificate,loadKeySession:loadKeySession,removeKeySession:removeKeySession,stop:reset,reset:reset};setup();return instance;}/**
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
 * Initial implementation of EME
 *
 * Implemented by Google Chrome prior to v36
 *
 * @implements ProtectionModel
 * @class
 */ProtectionModel_01b.__dashjs_factory_name='ProtectionModel_01b';exports.default=dashjs.FactoryMaker.getClassFactory(ProtectionModel_01b);/* jshint ignore:line */
//# sourceMappingURL=ProtectionModel_01b.js.map
