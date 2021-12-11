'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _RangeController=require('./RangeController');var _RangeController2=_interopRequireDefault(_RangeController);var _ReportingController=require('./ReportingController');var _ReportingController2=_interopRequireDefault(_ReportingController);var _MetricsHandlersController=require('./MetricsHandlersController');var _MetricsHandlersController2=_interopRequireDefault(_MetricsHandlersController);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function MetricsController(config){config=config||{};var metricsHandlersController=void 0,reportingController=void 0,rangeController=void 0,instance=void 0;var context=this.context;function initialize(metricsEntry){try{rangeController=(0,_RangeController2.default)(context).create({mediaElement:config.mediaElement});rangeController.initialize(metricsEntry.Range);reportingController=(0,_ReportingController2.default)(context).create({debug:config.debug,metricsConstants:config.metricsConstants});reportingController.initialize(metricsEntry.Reporting,rangeController);metricsHandlersController=(0,_MetricsHandlersController2.default)(context).create({debug:config.debug,eventBus:config.eventBus,metricsConstants:config.metricsConstants,events:config.events});metricsHandlersController.initialize(metricsEntry.metrics,reportingController);}catch(e){reset();throw e;}}function reset(){if(metricsHandlersController){metricsHandlersController.reset();}if(reportingController){reportingController.reset();}if(rangeController){rangeController.reset();}}instance={initialize:initialize,reset:reset};return instance;}/**
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
 */MetricsController.__dashjs_factory_name='MetricsController';exports.default=dashjs.FactoryMaker.getClassFactory(MetricsController);/* jshint ignore:line */
//# sourceMappingURL=MetricsController.js.map
