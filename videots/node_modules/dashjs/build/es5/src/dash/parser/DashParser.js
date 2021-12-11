'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _FactoryMaker=require('../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);var _Debug=require('../../core/Debug');var _Debug2=_interopRequireDefault(_Debug);var _objectiron=require('./objectiron');var _objectiron2=_interopRequireDefault(_objectiron);var _xml2json=require('../../../externals/xml2json');var _xml2json2=_interopRequireDefault(_xml2json);var _StringMatcher=require('./matchers/StringMatcher');var _StringMatcher2=_interopRequireDefault(_StringMatcher);var _DurationMatcher=require('./matchers/DurationMatcher');var _DurationMatcher2=_interopRequireDefault(_DurationMatcher);var _DateTimeMatcher=require('./matchers/DateTimeMatcher');var _DateTimeMatcher2=_interopRequireDefault(_DateTimeMatcher);var _NumericMatcher=require('./matchers/NumericMatcher');var _NumericMatcher2=_interopRequireDefault(_NumericMatcher);var _RepresentationBaseValuesMap=require('./maps/RepresentationBaseValuesMap');var _RepresentationBaseValuesMap2=_interopRequireDefault(_RepresentationBaseValuesMap);var _SegmentValuesMap=require('./maps/SegmentValuesMap');var _SegmentValuesMap2=_interopRequireDefault(_SegmentValuesMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
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
 */function DashParser(){var context=this.context;var instance=void 0,logger=void 0,matchers=void 0,converter=void 0,objectIron=void 0;function setup(){logger=(0,_Debug2.default)(context).getInstance().getLogger(instance);matchers=[new _DurationMatcher2.default(),new _DateTimeMatcher2.default(),new _NumericMatcher2.default(),new _StringMatcher2.default()// last in list to take precedence over NumericMatcher
];converter=new _xml2json2.default({escapeMode:false,attributePrefix:'',arrayAccessForm:'property',emptyNodeForm:'object',stripWhitespaces:false,enableToStringFunc:true,ignoreRoot:true,matchers:matchers});objectIron=(0,_objectiron2.default)(context).create({adaptationset:new _RepresentationBaseValuesMap2.default(),period:new _SegmentValuesMap2.default()});}function getMatchers(){return matchers;}function getIron(){return objectIron;}function parse(data){var manifest=void 0;var startTime=window.performance.now();manifest=converter.xml_str2json(data);if(!manifest){throw new Error('parsing the manifest failed');}var jsonTime=window.performance.now();objectIron.run(manifest);var ironedTime=window.performance.now();logger.info('Parsing complete: ( xml2json: '+(jsonTime-startTime).toPrecision(3)+'ms, objectiron: '+(ironedTime-jsonTime).toPrecision(3)+'ms, total: '+((ironedTime-startTime)/1000).toPrecision(3)+'s)');return manifest;}instance={parse:parse,getMatchers:getMatchers,getIron:getIron};setup();return instance;}DashParser.__dashjs_factory_name='DashParser';exports.default=_FactoryMaker2.default.getClassFactory(DashParser);
//# sourceMappingURL=DashParser.js.map
