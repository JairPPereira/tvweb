'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _FactoryMaker=require('../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * @module XHRLoader
 * @ignore
 * @description Manages download of resources via HTTP.
 * @param {Object} cfg - dependencies from parent
 */function XHRLoader(cfg){cfg=cfg||{};var requestModifier=cfg.requestModifier;var instance=void 0;function load(httpRequest){// Variables will be used in the callback functions
var requestStartTime=new Date();var request=httpRequest.request;var xhr=new XMLHttpRequest();xhr.open(httpRequest.method,httpRequest.url,true);if(request.responseType){xhr.responseType=request.responseType;}if(request.range){xhr.setRequestHeader('Range','bytes='+request.range);}if(!request.requestStartDate){request.requestStartDate=requestStartTime;}if(requestModifier){xhr=requestModifier.modifyRequestHeader(xhr);}xhr.withCredentials=httpRequest.withCredentials;xhr.onload=httpRequest.onload;xhr.onloadend=httpRequest.onend;xhr.onerror=httpRequest.onerror;xhr.onprogress=httpRequest.progress;xhr.onabort=httpRequest.onabort;xhr.send();httpRequest.response=xhr;}function abort(request){var x=request.response;x.onloadend=x.onerror=x.onprogress=undefined;//Ignore events from aborted requests.
x.abort();}instance={load:load,abort:abort};return instance;}/**
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
 */XHRLoader.__dashjs_factory_name='XHRLoader';var factory=_FactoryMaker2.default.getClassFactory(XHRLoader);exports.default=factory;
//# sourceMappingURL=XHRLoader.js.map
