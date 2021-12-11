'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _HandlerHelpers=require('../../utils/HandlerHelpers');var _HandlerHelpers2=_interopRequireDefault(_HandlerHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function HttpListHandler(config){config=config||{};var instance=void 0,reportingController=void 0,n=void 0,type=void 0,name=void 0,interval=void 0;var storedVos=[];var handlerHelpers=(0,_HandlerHelpers2.default)(this.context).getInstance();var metricsConstants=config.metricsConstants;function intervalCallback(){var vos=storedVos;if(vos.length){if(reportingController){reportingController.report(name,vos);}}storedVos=[];}function initialize(basename,rc,n_ms,requestType){if(rc){// this will throw if n is invalid, to be
// caught by the initialize caller.
n=handlerHelpers.validateN(n_ms);reportingController=rc;if(requestType&&requestType.length){type=requestType;}name=handlerHelpers.reconstructFullMetricName(basename,n_ms,requestType);interval=setInterval(intervalCallback,n);}}function reset(){clearInterval(interval);interval=null;n=null;type=null;storedVos=[];reportingController=null;}function handleNewMetric(metric,vo){if(metric===metricsConstants.HTTP_REQUEST){if(!type||type===vo.type){storedVos.push(vo);}}}instance={initialize:initialize,reset:reset,handleNewMetric:handleNewMetric};return instance;}/**
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
 */HttpListHandler.__dashjs_factory_name='HttpListHandler';exports.default=dashjs.FactoryMaker.getClassFactory(HttpListHandler);/* jshint ignore:line */
//# sourceMappingURL=HttpListHandler.js.map
