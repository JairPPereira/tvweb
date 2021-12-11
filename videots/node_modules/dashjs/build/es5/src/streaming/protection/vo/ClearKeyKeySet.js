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
 * @classdesc A collection of ClearKey encryption keys with an (optional) associated
 *  type
 * @ignore
 */var ClearKeyKeySet=function(){/**
     * @param {Array.<KeyPair>} keyPairs
     * @param {string} type the type of keys in this set.  One of either 'persistent'
     * or 'temporary'.  Can also be null or undefined.
     * @class
     * @ignore
     */function ClearKeyKeySet(keyPairs,type){_classCallCheck(this,ClearKeyKeySet);if(type&&type!=='persistent'&&type!=='temporary')throw new Error('Invalid ClearKey key set type!  Must be one of \'persistent\' or \'temporary\'');this.keyPairs=keyPairs;this.type=type;}/**
     * Convert this key set to its JSON Web Key (JWK) representation
     *
     * @return {ArrayBuffer} JWK object UTF-8 encoded as ArrayBuffer
     */_createClass(ClearKeyKeySet,[{key:'toJWK',value:function toJWK(){var i=void 0;var numKeys=this.keyPairs.length;var jwk={keys:[]};for(i=0;i<numKeys;i++){var key={kty:'oct',alg:'A128KW',kid:this.keyPairs[i].keyID,k:this.keyPairs[i].key};jwk.keys.push(key);}if(this.type){jwk.type=this.type;}var jwkString=JSON.stringify(jwk);var len=jwkString.length;// Convert JSON string to ArrayBuffer
var buf=new ArrayBuffer(len);var bView=new Uint8Array(buf);for(i=0;i<len;i++){bView[i]=jwkString.charCodeAt(i);}return buf;}}]);return ClearKeyKeySet;}();exports.default=ClearKeyKeySet;
//# sourceMappingURL=ClearKeyKeySet.js.map
