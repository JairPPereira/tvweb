'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _DVBErrorsTranslator=require('./utils/DVBErrorsTranslator');var _DVBErrorsTranslator2=_interopRequireDefault(_DVBErrorsTranslator);var _MetricsReportingEvents=require('./MetricsReportingEvents');var _MetricsReportingEvents2=_interopRequireDefault(_MetricsReportingEvents);var _MetricsCollectionController=require('./controllers/MetricsCollectionController');var _MetricsCollectionController2=_interopRequireDefault(_MetricsCollectionController);var _MetricsHandlerFactory=require('./metrics/MetricsHandlerFactory');var _MetricsHandlerFactory2=_interopRequireDefault(_MetricsHandlerFactory);var _ReportingFactory=require('./reporting/ReportingFactory');var _ReportingFactory2=_interopRequireDefault(_ReportingFactory);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function MetricsReporting(){var context=this.context;var instance=void 0,dvbErrorsTranslator=void 0;/**
     * Create a MetricsCollectionController, and a DVBErrorsTranslator
     * @param {Object} config - dependancies from owner
     * @return {MetricsCollectionController} Metrics Collection Controller
     */function createMetricsReporting(config){dvbErrorsTranslator=(0,_DVBErrorsTranslator2.default)(context).getInstance({eventBus:config.eventBus,dashMetrics:config.dashMetrics,metricsConstants:config.metricsConstants,events:config.events});return(0,_MetricsCollectionController2.default)(context).create(config);}/**
     * Get the ReportingFactory to allow new reporters to be registered
     * @return {ReportingFactory} Reporting Factory
     */function getReportingFactory(){return(0,_ReportingFactory2.default)(context).getInstance();}/**
     * Get the MetricsHandlerFactory to allow new handlers to be registered
     * @return {MetricsHandlerFactory} Metrics Handler Factory
     */function getMetricsHandlerFactory(){return(0,_MetricsHandlerFactory2.default)(context).getInstance();}instance={createMetricsReporting:createMetricsReporting,getReportingFactory:getReportingFactory,getMetricsHandlerFactory:getMetricsHandlerFactory};return instance;}/**
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
 */MetricsReporting.__dashjs_factory_name='MetricsReporting';var factory=dashjs.FactoryMaker.getClassFactory(MetricsReporting);/* jshint ignore:line */factory.events=_MetricsReportingEvents2.default;dashjs.FactoryMaker.updateClassFactory(MetricsReporting.__dashjs_factory_name,factory);/* jshint ignore:line */exports.default=factory;
//# sourceMappingURL=MetricsReporting.js.map
