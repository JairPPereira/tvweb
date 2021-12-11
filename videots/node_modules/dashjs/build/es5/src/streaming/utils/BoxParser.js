'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Debug=require('../../core/Debug');var _Debug2=_interopRequireDefault(_Debug);var _IsoFile=require('./IsoFile');var _IsoFile2=_interopRequireDefault(_IsoFile);var _FactoryMaker=require('../../core/FactoryMaker');var _FactoryMaker2=_interopRequireDefault(_FactoryMaker);var _codemIsoboxer=require('codem-isoboxer');var _codemIsoboxer2=_interopRequireDefault(_codemIsoboxer);var _IsoBoxSearchInfo=require('../vo/IsoBoxSearchInfo');var _IsoBoxSearchInfo2=_interopRequireDefault(_IsoBoxSearchInfo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function BoxParser()/*config*/{var logger=void 0,instance=void 0;var context=this.context;function setup(){logger=(0,_Debug2.default)(context).getInstance().getLogger(instance);}/**
     * @param {ArrayBuffer} data
     * @returns {IsoFile|null}
     * @memberof BoxParser#
     */function parse(data){if(!data)return null;if(data.fileStart===undefined){data.fileStart=0;}var parsedFile=_codemIsoboxer2.default.parseBuffer(data);var dashIsoFile=(0,_IsoFile2.default)(context).create();dashIsoFile.setData(parsedFile);return dashIsoFile;}/**
     * From the list of type boxes to look for, returns the latest one that is fully completed (header + payload). This
     * method only looks into the list of top boxes and doesn't analyze nested boxes.
     * @param {string[]} types
     * @param {ArrayBuffer|uint8Array} buffer
     * @param {number} offset
     * @returns {IsoBoxSearchInfo}
     * @memberof BoxParser#
     */function findLastTopIsoBoxCompleted(types,buffer,offset){if(offset===undefined){offset=0;}// 8 = size (uint32) + type (4 characters)
if(!buffer||offset+8>=buffer.byteLength){return new _IsoBoxSearchInfo2.default(0,false);}var data=buffer instanceof ArrayBuffer?new Uint8Array(buffer):buffer;var boxInfo=void 0;var lastCompletedOffset=0;while(offset<data.byteLength){var boxSize=parseUint32(data,offset);var boxType=parseIsoBoxType(data,offset+4);if(boxSize===0){break;}if(offset+boxSize<=data.byteLength){if(types.indexOf(boxType)>=0){boxInfo=new _IsoBoxSearchInfo2.default(offset,true,boxSize);}else{lastCompletedOffset=offset+boxSize;}}offset+=boxSize;}if(!boxInfo){return new _IsoBoxSearchInfo2.default(lastCompletedOffset,false);}return boxInfo;}function getSamplesInfo(ab){if(!ab||ab.byteLength===0){return{sampleList:[],lastSequenceNumber:NaN,totalDuration:NaN,numSequences:NaN};}var isoFile=parse(ab);// zero or more moofs
var moofBoxes=isoFile.getBoxes('moof');// exactly one mfhd per moof
var mfhdBoxes=isoFile.getBoxes('mfhd');var sampleDuration=void 0,sampleCompositionTimeOffset=void 0,sampleCount=void 0,sampleSize=void 0,sampleDts=void 0,sampleList=void 0,sample=void 0,i=void 0,j=void 0,k=void 0,l=void 0,m=void 0,n=void 0,dataOffset=void 0,lastSequenceNumber=void 0,numSequences=void 0,totalDuration=void 0;numSequences=isoFile.getBoxes('moof').length;lastSequenceNumber=mfhdBoxes[mfhdBoxes.length-1].sequence_number;sampleCount=0;sampleList=[];var subsIndex=-1;var nextSubsSample=-1;for(l=0;l<moofBoxes.length;l++){var moofBox=moofBoxes[l];// zero or more trafs per moof
var trafBoxes=moofBox.getChildBoxes('traf');for(j=0;j<trafBoxes.length;j++){var trafBox=trafBoxes[j];// exactly one tfhd per traf
var tfhdBox=trafBox.getChildBox('tfhd');// zero or one tfdt per traf
var tfdtBox=trafBox.getChildBox('tfdt');sampleDts=tfdtBox.baseMediaDecodeTime;// zero or more truns per traf
var trunBoxes=trafBox.getChildBoxes('trun');// zero or more subs per traf
var subsBoxes=trafBox.getChildBoxes('subs');for(k=0;k<trunBoxes.length;k++){var trunBox=trunBoxes[k];sampleCount=trunBox.sample_count;dataOffset=(tfhdBox.base_data_offset||0)+(trunBox.data_offset||0);for(i=0;i<sampleCount;i++){sample=trunBox.samples[i];sampleDuration=sample.sample_duration!==undefined?sample.sample_duration:tfhdBox.default_sample_duration;sampleSize=sample.sample_size!==undefined?sample.sample_size:tfhdBox.default_sample_size;sampleCompositionTimeOffset=sample.sample_composition_time_offset!==undefined?sample.sample_composition_time_offset:0;var sampleData={'dts':sampleDts,'cts':sampleDts+sampleCompositionTimeOffset,'duration':sampleDuration,'offset':moofBox.offset+dataOffset,'size':sampleSize,'subSizes':[sampleSize]};if(subsBoxes){for(m=0;m<subsBoxes.length;m++){var subsBox=subsBoxes[m];if(subsIndex<subsBox.entry_count-1&&i>nextSubsSample){subsIndex++;nextSubsSample+=subsBox.entries[subsIndex].sample_delta;}if(i==nextSubsSample){sampleData.subSizes=[];var entry=subsBox.entries[subsIndex];for(n=0;n<entry.subsample_count;n++){sampleData.subSizes.push(entry.subsamples[n].subsample_size);}}}}sampleList.push(sampleData);dataOffset+=sampleSize;sampleDts+=sampleDuration;}}totalDuration=sampleDts-tfdtBox.baseMediaDecodeTime;}}return{sampleList:sampleList,lastSequenceNumber:lastSequenceNumber,totalDuration:totalDuration,numSequences:numSequences};}function getMediaTimescaleFromMoov(ab){var isoFile=parse(ab);var mdhdBox=isoFile?isoFile.getBox('mdhd'):undefined;return mdhdBox?mdhdBox.timescale:NaN;}function parseUint32(data,offset){return data[offset+3]>>>0|data[offset+2]<<8>>>0|data[offset+1]<<16>>>0|data[offset]<<24>>>0;}function parseIsoBoxType(data,offset){return String.fromCharCode(data[offset++])+String.fromCharCode(data[offset++])+String.fromCharCode(data[offset++])+String.fromCharCode(data[offset]);}function findInitRange(data){var initRange=null;var start=void 0,end=void 0;var isoFile=parse(data);if(!isoFile){return initRange;}var ftyp=isoFile.getBox('ftyp');var moov=isoFile.getBox('moov');logger.debug('Searching for initialization.');if(moov&&moov.isComplete){start=ftyp?ftyp.offset:moov.offset;end=moov.offset+moov.size-1;initRange=start+'-'+end;logger.debug('Found the initialization.  Range: '+initRange);}return initRange;}instance={parse:parse,findLastTopIsoBoxCompleted:findLastTopIsoBoxCompleted,getMediaTimescaleFromMoov:getMediaTimescaleFromMoov,getSamplesInfo:getSamplesInfo,findInitRange:findInitRange};setup();return instance;}/**
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
 */BoxParser.__dashjs_factory_name='BoxParser';exports.default=_FactoryMaker2.default.getSingletonFactory(BoxParser);
//# sourceMappingURL=BoxParser.js.map
