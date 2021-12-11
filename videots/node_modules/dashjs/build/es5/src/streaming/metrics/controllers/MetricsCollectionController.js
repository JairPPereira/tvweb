'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _MetricsController=require('./MetricsController');var _MetricsController2=_interopRequireDefault(_MetricsController);var _ManifestParsing=require('../utils/ManifestParsing');var _ManifestParsing2=_interopRequireDefault(_ManifestParsing);var _MetricsReportingEvents=require('../MetricsReportingEvents');var _MetricsReportingEvents2=_interopRequireDefault(_MetricsReportingEvents);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function MetricsCollectionController(config){config=config||{};var metricsControllers={};var context=this.context;var eventBus=config.eventBus;var events=config.events;function update(e){if(e.error){return;}// start by assuming all existing controllers need removing
var controllersToRemove=Object.keys(metricsControllers);var metrics=(0,_ManifestParsing2.default)(context).getInstance({adapter:config.adapter,constants:config.constants}).getMetrics(e.manifest);metrics.forEach(function(m){var key=JSON.stringify(m);if(!metricsControllers.hasOwnProperty(key)){try{var controller=(0,_MetricsController2.default)(context).create(config);controller.initialize(m);metricsControllers[key]=controller;}catch(e){// fail quietly
}}else{// we still need this controller - delete from removal list
controllersToRemove.splice(key,1);}});// now remove the unwanted controllers
controllersToRemove.forEach(function(c){metricsControllers[c].reset();delete metricsControllers[c];});eventBus.trigger(_MetricsReportingEvents2.default.METRICS_INITIALISATION_COMPLETE);}function resetMetricsControllers(){Object.keys(metricsControllers).forEach(function(key){metricsControllers[key].reset();});metricsControllers={};}function setup(){eventBus.on(events.MANIFEST_UPDATED,update);eventBus.on(events.STREAM_TEARDOWN_COMPLETE,resetMetricsControllers);}function reset(){eventBus.off(events.MANIFEST_UPDATED,update);eventBus.off(events.STREAM_TEARDOWN_COMPLETE,resetMetricsControllers);}setup();return{reset:reset};}/**
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
 */MetricsCollectionController.__dashjs_factory_name='MetricsCollectionController';exports.default=dashjs.FactoryMaker.getClassFactory(MetricsCollectionController);/* jshint ignore:line */
//# sourceMappingURL=MetricsCollectionController.js.map
