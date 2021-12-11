'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
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
 * @class
 * @ignore
 */var IsoBox=function(){function IsoBox(boxData){_classCallCheck(this,IsoBox);this.offset=boxData._offset;this.type=boxData.type;this.size=boxData.size;this.boxes=[];if(boxData.boxes){for(var i=0;i<boxData.boxes.length;i++){this.boxes.push(new IsoBox(boxData.boxes[i]));}}this.isComplete=true;switch(boxData.type){case'sidx':this.timescale=boxData.timescale;this.earliest_presentation_time=boxData.earliest_presentation_time;this.first_offset=boxData.first_offset;this.references=boxData.references;if(boxData.references){this.references=[];for(var _i=0;_i<boxData.references.length;_i++){var reference={reference_type:boxData.references[_i].reference_type,referenced_size:boxData.references[_i].referenced_size,subsegment_duration:boxData.references[_i].subsegment_duration};this.references.push(reference);}}break;case'emsg':this.id=boxData.id;this.value=boxData.value;this.timescale=boxData.timescale;this.scheme_id_uri=boxData.scheme_id_uri;this.presentation_time_delta=boxData.version===1?boxData.presentation_time:boxData.presentation_time_delta;this.event_duration=boxData.event_duration;this.message_data=boxData.message_data;break;case'mdhd':this.timescale=boxData.timescale;break;case'mfhd':this.sequence_number=boxData.sequence_number;break;case'subs':this.entry_count=boxData.entry_count;this.entries=boxData.entries;break;case'tfhd':this.base_data_offset=boxData.base_data_offset;this.sample_description_index=boxData.sample_description_index;this.default_sample_duration=boxData.default_sample_duration;this.default_sample_size=boxData.default_sample_size;this.default_sample_flags=boxData.default_sample_flags;this.flags=boxData.flags;break;case'tfdt':this.version=boxData.version;this.baseMediaDecodeTime=boxData.baseMediaDecodeTime;this.flags=boxData.flags;break;case'trun':this.sample_count=boxData.sample_count;this.first_sample_flags=boxData.first_sample_flags;this.data_offset=boxData.data_offset;this.flags=boxData.flags;this.samples=boxData.samples;if(boxData.samples){this.samples=[];for(var _i2=0,ln=boxData.samples.length;_i2<ln;_i2++){var sample={sample_size:boxData.samples[_i2].sample_size,sample_duration:boxData.samples[_i2].sample_duration,sample_composition_time_offset:boxData.samples[_i2].sample_composition_time_offset};this.samples.push(sample);}}break;}}_createClass(IsoBox,[{key:'getChildBox',value:function getChildBox(type){for(var i=0;i<this.boxes.length;i++){if(this.boxes[i].type===type){return this.boxes[i];}}}},{key:'getChildBoxes',value:function getChildBoxes(type){var boxes=[];for(var i=0;i<this.boxes.length;i++){if(this.boxes[i].type===type){boxes.push(this.boxes[i]);}}return boxes;}}]);return IsoBox;}();exports.default=IsoBox;
//# sourceMappingURL=IsoBox.js.map
