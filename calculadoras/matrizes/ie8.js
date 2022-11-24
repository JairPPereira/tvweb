/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
    /*jshint evil:true */
      /** version */
      var version = '3.7.3';
    
      /** Preset options */
      var options = window.html5 || {};
    
      /** Used to skip problem elements */
      var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
    
      /** Not all elements can be cloned in IE **/
      var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
    
      /** Detect whether the browser supports default html5 styles */
      var supportsHtml5Styles;
    
      /** Name of the expando, to work with multiple documents or to re-shiv one document */
      var expando = '_html5shiv';
    
      /** The id for the the documents expando */
      var expanID = 0;
    
      /** Cached data for each document */
      var expandoData = {};
    
      /** Detect whether the browser supports unknown elements */
      var supportsUnknownElements;
    
      (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);
    
            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
        } catch(e) {
          // assign a false positive if detection fails => unable to shiv
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }
    
      }());
    
      /*--------------------------------------------------------------------------*/
    
      /**
       * Creates a style sheet with the given CSS text and adds it to the document.
       * @private
       * @param {Document} ownerDocument The document.
       * @param {String} cssText The CSS text.
       * @returns {StyleSheet} The style element.
       */
      function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
    
        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }
    
      /**
       * Returns the value of `html5.elements` as an array.
       * @private
       * @returns {Array} An array of shived element node names.
       */
      function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }
    
      /**
       * Extends the built-in list of html5 elements
       * @memberOf html5
       * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
       * @param {Document} ownerDocument The context document.
       */
      function addElements(newElements, ownerDocument) {
        var elements = html5.elements;
        if(typeof elements != 'string'){
          elements = elements.join(' ');
        }
        if(typeof newElements != 'string'){
          newElements = newElements.join(' ');
        }
        html5.elements = elements +' '+ newElements;
        shivDocument(ownerDocument);
      }
    
        /**
       * Returns the data associated to the given document
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Object} An object of data.
       */
      function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
      }
    
      /**
       * returns a shived element for the given nodeName and document
       * @memberOf html5
       * @param {String} nodeName name of the element
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived element.
       */
      function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;
    
        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }
    
        // Avoid adding some elements to fragments in IE < 9 because
        // * Attributes like `name` or `type` cannot be set/changed once an element
        //   is inserted into a document/fragment
        // * Link elements with `src` attributes that are inaccessible, as with
        //   a 403 response, will cause the tab/window to crash
        // * Script elements appended to fragments will execute when their `src`
        //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
      }
    
      /**
       * returns a shived DocumentFragment for the given document
       * @memberOf html5
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived DocumentFragment.
       */
      function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for(;i<l;i++){
            clone.createElement(elems[i]);
        }
        return clone;
      }
    
      /**
       * Shivs the `createElement` and `createDocumentFragment` methods of the document.
       * @private
       * @param {Document|DocumentFragment} ownerDocument The document.
       * @param {Object} data of the document.
       */
      function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }
    
    
        ownerDocument.createElement = function(nodeName) {
          //abort shiv
          if (!html5.shivMethods) {
              return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };
    
        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
            // unroll the `createElement` calls
            getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
              data.createElem(nodeName);
              data.frag.createElement(nodeName);
              return 'c("' + nodeName + '")';
            }) +
          ');return n}'
        )(html5, data.frag);
      }
    
      /*--------------------------------------------------------------------------*/
    
      /**
       * Shivs the given document.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);
    
        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
            // corrects block display not defined in IE6/7/8/9
            'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
            // adds styling not present in IE6/7/8/9
            'mark{background:#FF0;color:#000}' +
            // hides non-rendered elements
            'template{display:none}'
          );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }
    
      /*--------------------------------------------------------------------------*/
    
      /**
       * The `html5` object is exposed so that more elements can be shived and
       * existing shiving can be detected on iframes.
       * @type Object
       * @example
       *
       * // options can be changed before the script is included
       * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
       */
      var html5 = {
    
        /**
         * An array or space separated string of node names of the elements to shiv.
         * @memberOf html5
         * @type Array|String
         */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
    
        /**
         * current version of html5shiv
         */
        'version': version,
    
        /**
         * A flag to indicate that the HTML5 style sheet should be inserted.
         * @memberOf html5
         * @type Boolean
         */
        'shivCSS': (options.shivCSS !== false),
    
        /**
         * Is equal to true if a browser supports creating unknown/HTML5 elements
         * @memberOf html5
         * @type boolean
         */
        'supportsUnknownElements': supportsUnknownElements,
    
        /**
         * A flag to indicate that the document's `createElement` and `createDocumentFragment`
         * methods should be overwritten.
         * @memberOf html5
         * @type Boolean
         */
        'shivMethods': (options.shivMethods !== false),
    
        /**
         * A string to describe the type of `html5` object ("default" or "default print").
         * @memberOf html5
         * @type String
         */
        'type': 'default',
    
        // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,
    
        //creates a shived element
        createElement: createElement,
    
        //creates a shived documentFragment
        createDocumentFragment: createDocumentFragment,
    
        //extends list of elements
        addElements: addElements
      };
    
      /*--------------------------------------------------------------------------*/
    
      // expose html5
      window.html5 = html5;
    
      // shiv the document
      shivDocument(document);
    
      /*------------------------------- Print Shiv -------------------------------*/
    
      /** Used to filter media types */
      var reMedia = /^$|\b(?:all|print)\b/;
    
      /** Used to namespace printable elements */
      var shivNamespace = 'html5shiv';
    
      /** Detect whether the browser supports shivable style sheets */
      var supportsShivableSheets = !supportsUnknownElements && (function() {
        // assign a false negative if unable to shiv
        var docEl = document.documentElement;
        return !(
          typeof document.namespaces == 'undefined' ||
          typeof document.parentWindow == 'undefined' ||
          typeof docEl.applyElement == 'undefined' ||
          typeof docEl.removeNode == 'undefined' ||
          typeof window.attachEvent == 'undefined'
        );
      }());
    
      /*--------------------------------------------------------------------------*/
    
      /**
       * Wraps all HTML5 elements in the given document with printable elements.
       * (eg. the "header" element is wrapped with the "html5shiv:header" element)
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Array} An array wrappers added.
       */
      function addWrappers(ownerDocument) {
        var node,
            nodes = ownerDocument.getElementsByTagName('*'),
            index = nodes.length,
            reElements = RegExp('^(?:' + getElements().join('|') + ')$', 'i'),
            result = [];
    
        while (index--) {
          node = nodes[index];
          if (reElements.test(node.nodeName)) {
            result.push(node.applyElement(createWrapper(node)));
          }
        }
        return result;
      }
    
      /**
       * Creates a printable wrapper for the given element.
       * @private
       * @param {Element} element The element.
       * @returns {Element} The wrapper.
       */
      function createWrapper(element) {
        var node,
            nodes = element.attributes,
            index = nodes.length,
            wrapper = element.ownerDocument.createElement(shivNamespace + ':' + element.nodeName);
    
        // copy element attributes to the wrapper
        while (index--) {
          node = nodes[index];
          node.specified && wrapper.setAttribute(node.nodeName, node.nodeValue);
        }
        // copy element styles to the wrapper
        wrapper.style.cssText = element.style.cssText;
        return wrapper;
      }
    
      /**
       * Shivs the given CSS text.
       * (eg. header{} becomes html5shiv\:header{})
       * @private
       * @param {String} cssText The CSS text to shiv.
       * @returns {String} The shived CSS text.
       */
      function shivCssText(cssText) {
        var pair,
            parts = cssText.split('{'),
            index = parts.length,
            reElements = RegExp('(^|[\\s,>+~])(' + getElements().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'),
            replacement = '$1' + shivNamespace + '\\:$2';
    
        while (index--) {
          pair = parts[index] = parts[index].split('}');
          pair[pair.length - 1] = pair[pair.length - 1].replace(reElements, replacement);
          parts[index] = pair.join('}');
        }
        return parts.join('{');
      }
    
      /**
       * Removes the given wrappers, leaving the original elements.
       * @private
       * @params {Array} wrappers An array of printable wrappers.
       */
      function removeWrappers(wrappers) {
        var index = wrappers.length;
        while (index--) {
          wrappers[index].removeNode();
        }
      }
    
      /*--------------------------------------------------------------------------*/
    
      /**
       * Shivs the given document for print.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivPrint(ownerDocument) {
        var shivedSheet,
            wrappers,
            data = getExpandoData(ownerDocument),
            namespaces = ownerDocument.namespaces,
            ownerWindow = ownerDocument.parentWindow;
    
        if (!supportsShivableSheets || ownerDocument.printShived) {
          return ownerDocument;
        }
        if (typeof namespaces[shivNamespace] == 'undefined') {
          namespaces.add(shivNamespace);
        }
    
        function removeSheet() {
          clearTimeout(data._removeSheetTimer);
          if (shivedSheet) {
              shivedSheet.removeNode(true);
          }
          shivedSheet= null;
        }
    
        ownerWindow.attachEvent('onbeforeprint', function() {
    
          removeSheet();
    
          var imports,
              length,
              sheet,
              collection = ownerDocument.styleSheets,
              cssText = [],
              index = collection.length,
              sheets = Array(index);
    
          // convert styleSheets collection to an array
          while (index--) {
            sheets[index] = collection[index];
          }
          // concat all style sheet CSS text
          while ((sheet = sheets.pop())) {
            // IE does not enforce a same origin policy for external style sheets...
            // but has trouble with some dynamically created stylesheets
            if (!sheet.disabled && reMedia.test(sheet.media)) {
    
              try {
                imports = sheet.imports;
                length = imports.length;
              } catch(er){
                length = 0;
              }
    
              for (index = 0; index < length; index++) {
                sheets.push(imports[index]);
              }
    
              try {
                cssText.push(sheet.cssText);
              } catch(er){}
            }
          }
    
          // wrap all HTML5 elements with printable elements and add the shived style sheet
          cssText = shivCssText(cssText.reverse().join(''));
          wrappers = addWrappers(ownerDocument);
          shivedSheet = addStyleSheet(ownerDocument, cssText);
    
        });
    
        ownerWindow.attachEvent('onafterprint', function() {
          // remove wrappers, leaving the original elements, and remove the shived style sheet
          removeWrappers(wrappers);
          clearTimeout(data._removeSheetTimer);
          data._removeSheetTimer = setTimeout(removeSheet, 500);
        });
    
        ownerDocument.printShived = true;
        return ownerDocument;
      }
    
      /*--------------------------------------------------------------------------*/
    
      // expose API
      html5.type += ' print';
      html5.shivPrint = shivPrint;
    
      // shiv for print
      shivPrint(document);
    
      if(typeof module == 'object' && module.exports){
        module.exports = html5;
      }
    
    }(typeof window !== "undefined" ? window : this, document));
    /*global document, window, Element, Event, HTMLDocument, Window, TextRange, Text, Node, CSSStyleDeclaration */
    "use strict";
    
    // for IE 8
    if (/(\d)?/.exec("")[1] === "") {
      var originalExec = RegExp.prototype.exec;
      RegExp.prototype.exec = function (string) {
        // from https://github.com/slevithan/xregexp/blob/master/src/xregexp.js
        var s = String(string);
        var re = Object(this);
        var result = originalExec.call(re, s);
        if (result != undefined) {
          s.replace(new RegExp(re.source, (re.ignoreCase ? "i" : "") + (re.multiline ? "m" : "")), function () {
            var p = arguments[0];
            for (var i = 1; i < arguments.length - 2; i += 1) {
              if (arguments[i] === undefined) {
                result[i] = undefined;
              }
              if (arguments[i] === "" && re.source.indexOf("*") === -1) { // to fix IE 11 in emulation mode
                result[i] = undefined;
              }
            }
            return p;
          });
        }
        return result;
      };
    }
    
    (function () {
    
      if ("\v" !== "v") {
        return;
      }
    
      function EventTarget() {
        this.listeners = {};
      }
    
      var throwError = function (e) {
        window.setTimeout(function () {
          throw e;
        }, 0);
      };
    
      var runEvent = function (event, element, phase, type) {
        event.currentTarget = element;
        var listeners = element.listeners;
        if (listeners == undefined) {
          return;
        }
        var typeListeners = listeners[type];
        if (typeListeners == undefined) {
          return;
        }
        var length = typeListeners.length;
        var i = -1;
        while (++i < length) {
          if (typeListeners[i].capture === phase) {
            var listener = typeListeners[i].callback;
            try {
              if (typeof listener.handleEvent === "function") {
                listener.handleEvent(event);
              } else {
                listener.call(element, event);
              }
            } catch (e) {
              throwError(e);
            }
          }
        }
      };
    
      EventTarget.prototype.dispatchEvent = function (event) {
        var type = String(event.type);
    
        var path = [];
        var x = this;
        while (x != undefined) {
          path.push(x);
          x = x.parentNode;
        }
    
        for (var j = path.length - 1; j >= 0; j -= 1) {
          runEvent(event, path[j], true, type);
        }
    
        var bubbles = Boolean(event.bubbles);//! no way in IE8
    
        for (var i = 0; (i === 0 || bubbles) && i < path.length; i += 1) {
          if (!event.cancelBubble) {
            runEvent(event, path[i], false, type);
          }
        }
      };
      EventTarget.prototype.addEventListener = function (type, callback, capture) {
        type = type == undefined ? "" : String(type);
        capture = capture == undefined ? false : Boolean(capture);
        var listeners = this.listeners;
        var typeListeners = listeners[type];
        if (!typeListeners) {
          typeListeners = [];
          listeners[type] = typeListeners;
        }
        var i = typeListeners.length;
        while (--i >= 0) {
          if (typeListeners[i].callback === callback && typeListeners[i].capture === capture) {
            return;
          }
        }
        typeListeners.push({callback: callback, capture: capture});
      };
      EventTarget.prototype.removeEventListener = function (type, callback, capture) {
        type = type == undefined ? "" : String(type);
        capture = capture == undefined ? false : Boolean(capture);
        var listeners = this.listeners;
        var typeListeners = listeners[type];
        if (!typeListeners) {
          return;
        }
        var length = typeListeners.length;
        var filtered = [];
        var i = -1;
        while (++i < length) {
          if (typeListeners[i].callback !== callback || typeListeners[i].capture !== capture) {
            filtered.push(typeListeners[i]);
          }
        }
        if (filtered.length === 0) {
          delete listeners[type];
        } else {
          listeners[type] = filtered;
        }
      };
    
      document.createElement("menuitem"); // window.html5.elements contains menuitem, but this code is still needed for some reasons
    
      document.createElementNS = function (a, b) {
        return document.createElement(b);
      };
    
      // IE 8
      window.Node = Element;
      window.Node.ELEMENT_NODE = 1;
      window.Node.TEXT_NODE = 3;
      window.Document = HTMLDocument;
      window.DocumentFragment = HTMLDocument; //!
      window.HTMLElement = Element;
      window.HTMLInputElement = Element;
      window.HTMLTextAreaElement = Element;
    
      var run = function (event) {
        var x = event.srcElement;
        if (x == undefined) {
          x = window;//? "message" event at window
        }
        EventTarget.prototype.dispatchEvent.call(x, event);
        event.stopPropagation();
      };
    
      var addEventListener = function (type, callback, capture) {
        type = type == undefined ? "" : String(type);
        capture = capture == undefined ? false : Boolean(capture);
        if (!this.eventTargetInitialized) {
          EventTarget.call(this);
          this.eventTargetInitialized = true;
        }
        EventTarget.prototype.addEventListener.call(this, type, callback, capture);
        this.attachEvent("on" + type, run);
      };
    
      var removeEventListener = function (type, callback, capture) {
        type = type == undefined ? "" : String(type);
        capture = capture == undefined ? false : Boolean(capture);
        if (!this.eventTargetInitialized) {
          EventTarget.call(this);
          this.eventTargetInitialized = true;
        }
        EventTarget.prototype.removeEventListener.call(this, type, callback, capture);
      };
    
      var dispatchEvent = function (event) {
        event.srcElement = this;
        event.target = this;
        run(event);
        return event.returnValue === false || !event.defaultPrevented;
      };
    
      Text.prototype.addEventListener = addEventListener;
      HTMLDocument.prototype.addEventListener = addEventListener;
      Element.prototype.addEventListener = addEventListener;
      Window.prototype.addEventListener = addEventListener;
    
      Text.prototype.removeEventListener = removeEventListener;
      HTMLDocument.prototype.removeEventListener = removeEventListener;
      Element.prototype.removeEventListener = removeEventListener;
      Window.prototype.removeEventListener = removeEventListener;
    
      Text.prototype.dispatchEvent = dispatchEvent;
      HTMLDocument.prototype.dispatchEvent = dispatchEvent;
      Element.prototype.dispatchEvent = dispatchEvent;
      Window.prototype.dispatchEvent = dispatchEvent;
    
      Object.defineProperty(Event.prototype, "target", {
        get: function () {
          return this.srcElement;
        }
      });
    
      Object.defineProperty(Event.prototype, "bubbles", {
        get: function () {
          var type = this.type;
          return type !== "mouseenter" && type !== "mouseleave" && type !== "propertychange";
        }
      });
    
      Object.defineProperty(Event.prototype, "defaultPrevented", {
        get: function () {
          return this.returnValue === false;
        }
      });
    
      Object.defineProperty(Event.prototype, "charCode", {
        get: function () {
          return this.keyCode;
        }
      });
    
      Object.defineProperty(Event.prototype, "which", {
        get: function () {
          // http://unixpapa.com/js/mouse.html
          return Number(this.button) % 2 === 1 ? 1 : 0;
        }
      });
    
      Event.prototype.stopPropagation = function () {
        this.cancelBubble = true;
      };
    
      Event.prototype.preventDefault = function () {
        this.returnValue = false;
      };
    
      // ---
    
      function CustomEvent(eventType, opts) {
        this.srcElement = undefined;
        this.target = undefined;
        this.returnValue = undefined;
        this.defaultPrevented = undefined;
        this.type = eventType;
        this.bubbles = Boolean(opts && opts.bubbles);
        this.cancelable = Boolean(opts && opts.cancelable);
        this.detail = opts ? opts.detail : undefined;
      }
    
      CustomEvent.prototype.clipboardData = window.clipboardData;
      CustomEvent.prototype.stopPropagation = Event.prototype.stopPropagation;
      CustomEvent.prototype.preventDefault = Event.prototype.preventDefault;
      CustomEvent.prototype.initEvent = function (type, bubbles, cancelable) {
        this.type = String(type);
        this.bubbles = Boolean(bubbles);
        this.cancelable = Boolean(cancelable);
      };
      CustomEvent.prototype.initCustomEvent = function (type, bubbles, cancelable, detail) {
        this.initEvent(type, bubbles, cancelable);
        this.detail = detail;
      };
      
      CustomEvent.prototype.initMutationEvent = function (type, bubbles, cancelable, relatedNode, prevValue, newValue, attrName, attrChange) {
        return Event.prototype.initMutationEvent.apply(this, arguments);
      };
    
      document.createEvent = function () {
        return new CustomEvent();
      };
    
      var checkDOMContentLoaded = function () {
        var ok = true;
        try {
          document.documentElement.doScroll("left");
        } catch (e) {
          ok = false;
        }
        if (ok) {
          document.dispatchEvent(new CustomEvent("DOMContentLoaded"));
        } else {
          window.setTimeout(checkDOMContentLoaded, 50);
        }
      };
      window.setTimeout(checkDOMContentLoaded, 50);
    
      document.attachEvent("onfocusin", function (event) {
        var t = event.srcElement;
        // submit event bubbling workaround
        var form = t.form;
        if (form != undefined && form.attachEvent) {
          form.attachEvent("onsubmit", run);
        }
        // change event bubbling workaround
        t.attachEvent("onchange", run);
      });
    
      // IE 8
      document.attachEvent("onmouseover", function (event) {
        var t = event.srcElement;
        t.attachEvent("ondragover", run);
        t.attachEvent("ondragenter", run);
        t.attachEvent("ondragleave", run);
        t.attachEvent("ondrop", run);
      });
    
      // IE 8
      document.attachEvent("onkeydown", function (event) {
        var DOM_VK_INSERT = 45;
        if ((event.keyCode === DOM_VK_INSERT && event.ctrlKey) || (event.keyCode === "C".charCodeAt(0) && event.ctrlKey)) {
          event.srcElement.dispatchEvent(new CustomEvent("copy", {
            bubbles: true,
            cancelable: true
          }));
        }
        if ((event.keyCode === DOM_VK_INSERT && event.shiftKey) || (event.keyCode === "V".charCodeAt(0) && event.ctrlKey)) {
          event.srcElement.dispatchEvent(new CustomEvent("paste", {
            bubbles: true,
            cancelable: true
          }));
        }
      });
    
      // window.pageXOffset, window.pageYOffset, window.innerWidth, window.innerHeight
      // Element.prototype.textContent, selectionStart, selectionEnd, previousElementSibling, nextElementSibling, firstElementChild, lastElementChild
    
      Object.defineProperty(window, "pageXOffset", {
        get: function () {
          var html = document.documentElement;
          var body = document.body;
          return ((html && html.scrollLeft) || (body && body.scrollLeft) || 0) - (html.clientLeft || 0);
        }
      });
    
      Object.defineProperty(window, "pageYOffset", {
        get: function () {
          var html = document.documentElement;
          var body = document.body;
          return ((html && html.scrollTop) || (body && body.scrollTop) || 0) - (html.clientTop || 0);
        }
      });
    
      Object.defineProperty(window, "innerWidth", {
        get: function () {
          var rect = document.documentElement.getBoundingClientRect();
          return rect.right - rect.left;
        }
      });
    
      Object.defineProperty(window, "innerHeight", {
        get: function () {
          var rect = document.documentElement.getBoundingClientRect();
          return rect.bottom - rect.top;
        }
      });
    
      function XSelection() {
        this.isCollapsed = document.selection.createRange().collapsed;
        this.rangeCount = 1;
      }
    
      XSelection.prototype.selectAllChildren = function (element) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(element);
        textRange.select();
      };
    
      XSelection.prototype.getRangeAt = function (n) {
        // http://help.dottoro.com/ljmppjdc.php
        return n === 0 ? document.selection.createRange() : undefined;
      };
    
      XSelection.prototype.collapse = function (node, offset) {
         //TODO: ...
      };
    
      window.getSelection = function () {
        return new XSelection();
      };
    
      document.createRange = function () {
        return document.body.createTextRange();
      };
    
      // https://gist.github.com/visnup/3456262
      var getCaretPosition = function (pointRange) {
        var parent = pointRange.parentElement();
    
        // `point`'s `parentElement` is the first full-fledged element node above
        // us in the hierarchy. everything between its boundaries and `point` is an
        // inline element. insert an empty span inside the parent element and keep
        // moving it back until its gets to the left of `point`.
        var span = document.createElement("span");
        if (parent.lastChild != null) {
          parent.lastChild.parentNode.insertBefore(span, parent.lastChild);
        } else {
          parent.appendChild(span);
        }
    
        var cursor = document.body.createTextRange();
        cursor.moveToElementText(span);
        while (cursor.compareEndPoints("StartToStart", pointRange) > 0 && span.previousSibling != null) {
          span.previousSibling.parentNode.insertBefore(span, span.previousSibling);
          cursor.moveToElementText(span);
        }
    
        // that means `span`'s `nextSibling` is point's text node container.
        var container = span.nextSibling;
    
        // extend our cursor out from the beginning of `point`'s text node to
        // `point` and use the text length to find its offset.
        cursor.setEndPoint("EndToStart", pointRange);
        var offset = cursor.text.length;
    
        span.parentNode.removeChild(span);
    
        return {
          container: container,
          offset: container.nodeType !== Node.TEXT_NODE ? 0 : offset
        };
      };
    
      Object.defineProperty(TextRange.prototype, "collapsed", {
        get: function () {
          return this.compareEndPoints("StartToEnd", this) === 0;
        }
      });
    
      var nodeDepth = function (node) {
        var i = 0;
        while (node != null) {
          node = node.parentNode;
          i += 1;
        }
        return i;
      };
    
      Object.defineProperty(TextRange.prototype, "commonAncestorContainer", {
        get: function () {
          var startContainer = this.startContainer;
          var endContainer = this.endContainer;
          //return this.parentElement();
          var i = nodeDepth(startContainer);
          var j = nodeDepth(endContainer);
          while (i > j) {
            startContainer = startContainer.parentNode;
            i -= 1;
          }
          while (j > i) {
            endContainer = endContainer.parentNode;
            j -= 1;
          }
          while (startContainer !== endContainer) {
            startContainer = startContainer.parentNode;
            endContainer = endContainer.parentNode;
          }
          return startContainer;
        }
      });
    
      Object.defineProperty(TextRange.prototype, "startContainer", {
        get: function () {
          var pointRange = this.duplicate();
          pointRange.collapse(true); // start
          return getCaretPosition(pointRange).container;
        }
      });
    
      Object.defineProperty(TextRange.prototype, "startOffset", {
        get: function () {
          var pointRange = this.duplicate();
          pointRange.collapse(true); // start
          return getCaretPosition(pointRange).offset;
        }
      });
    
      Object.defineProperty(TextRange.prototype, "endContainer", {
        get: function () {
          var pointRange = this.duplicate();
          pointRange.collapse(false); // end
          return getCaretPosition(pointRange).container;
        }
      });
    
      Object.defineProperty(TextRange.prototype, "endOffset", {
        get: function () {
          var pointRange = this.duplicate();
          pointRange.collapse(false); // end
          return getCaretPosition(pointRange).offset;
        }
      });
    
      window.Range = TextRange;
    
      TextRange.END_TO_END = "EndToEnd";
      TextRange.END_TO_START = "StartToEnd";
      TextRange.START_TO_END = "EndToStart";
      TextRange.START_TO_START = "StartToStart";
    
      TextRange.prototype.compareBoundaryPoints = function (how, sourceRange) {
        return this.compareEndPoints(how, sourceRange);
      };
    
      TextRange.prototype.cloneContents = function() {
        var fragment = document.createDocumentFragment();
        var div = document.createElement("div");
        div.innerHTML = this.htmlText;
        while (div.firstChild != undefined) {
          fragment.appendChild(div.firstChild);
        }
        return fragment;
      };
    
      TextRange.prototype.cloneRange = function () {
        return this.duplicate();
      };
    
      TextRange.prototype.setStartBefore = function (node) {
        var span = document.createElement("span");
        node.parentNode.insertBefore(span, node);
        var range = document.body.createTextRange();
        range.moveToElementText(span);
        this.setEndPoint("StartToStart", range);
        span.parentNode.removeChild(span);
      };
    
      TextRange.prototype.setEndAfter = function (node) {
        var span = document.createElement("span");
        if (node.nextSibling != null) {
          node.nextSibling.parentNode.insertBefore(span, node.nextSibling);
        } else {
          node.parentNode.appendChild(span);
        }
        var range = document.body.createTextRange();
        range.moveToElementText(span);
        this.setEndPoint("EndToEnd", range);
        span.parentNode.removeChild(span);
      };
    
      TextRange.prototype.setStart = function (node, offset) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          this.setStartBefore(node.childNodes[offset]);
        } else if (node.nodeType === Node.TEXT_NODE) {
          this.setStartBefore(node);
          this.moveStart("character", offset);
        } else {
          throw new Error();
        }
      };
    
      TextRange.prototype.setEnd = function (node, offset) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          this.setEndAfter(node.childNodes[offset - 1]);
        } else if (node.nodeType === Node.TEXT_NODE) {
          this.setEndAfter(node);
          this.moveEnd("character", offset - node.data.length);
        } else {
          throw new Error();
        }
      };
    
      TextRange.prototype.selectNodeContents = function (node) {
        this.setStartBefore(node);
        this.setEndAfter(node);
      };
    
      TextRange.prototype.selectNode = function (node) {
        this.setStartBefore(node);
        this.setEndAfter(node);
      };
    
      TextRange.prototype.toString = function () {
        return this.text;
      };
    
      window.getComputedStyle = function (element) {
        return element.currentStyle;
      };
    
      Object.defineProperty(Element.prototype, "textContent", {
        get: function () {
          return this.innerText;
        },
        set: function (x) {
          this.innerText = x;
        }
      });
    
      Object.defineProperty(Text.prototype, "textContent", {
        get: function () {
          return this.data;
        },
        set: function (x) {
          this.data = x;
        }
      });
    
      function getInputSelection(element, w) {
        var range = document.selection.createRange();
        if (!range || range.parentElement() !== element) {
          return 0;
        }
    
        // Create a working TextRange that lives only in the input
        var textInputRange = element.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());
    
        // Check if the start and end of the selection are at the very end
        // of the input, since moveStart/moveEnd doesn't return what we want
        // in those cases
        var endRange = element.createTextRange();
        endRange.collapse(false);
    
        var value = element.value;
        var length = value.length;
    
        var result = length;
        if (textInputRange.compareEndPoints(w ? "StartToEnd" : "EndToEnd", endRange) < 0) {
          result = w ? -textInputRange.moveStart("character", -length) : -textInputRange.moveEnd("character", -length);
          result += value.replace(/\r\n/g, "\n").slice(0, result).split("\n").length - 1;
        }
        return result;
      }
    
      Object.defineProperty(Element.prototype, "selectionStart", {
        get: function () {
          return getInputSelection(this, true);
        }
      });
      Object.defineProperty(Element.prototype, "selectionEnd", {
        get: function () {
          return getInputSelection(this, false);
        }
      });
    
      Element.prototype.setSelectionRange = function (start, end) {
        if (start == undefined) {
          start = this.selectionStart;
        }
        if (end == undefined) {
          end = this.selectionEnd;
        }
        var textRange = this.createTextRange();
        textRange.collapse(true);
        textRange.moveStart("character", start);
        textRange.moveEnd("character", end);
        textRange.select();
      };
    
      // IE 8: ClientRect is undefined
      //Object.defineProperty(Object.prototype, "width", {
      //  get: function () {
      //    return this.right - this.left;
      //  }
      //});
      //Object.defineProperty(Object.prototype, "height", {
      //  get: function () {
      //    return this.bottom - this.top;
      //  }
      //});
    
      if (window.XMLSerializer == undefined) {
        window.XMLSerializer = function () {
        };
        window.XMLSerializer.prototype.serializeToString = function (node) {
          return node.outerHTML;
        };
      }
    
      // Can't move focus to the control because it is invisible, not enabled, or of a type that does not accept the focus
      var nativeFocus = Element.prototype.focus;
      Element.prototype.focus = function () {
        try {
          nativeFocus.call(this);
        } catch (error) {
          throwError(error);
        }
      };
    
      window.DOMParser = function () {
      };
      window.DOMParser.prototype.parseFromString = function (markup, type) {
        var tmp = document.createElement("div");
        tmp.innerHTML = markup;
        return {
          documentElement: tmp,
          head: tmp.querySelector("head"),
          body: tmp.querySelector("body")
        };
      };
    
    }());
    
    if ("\v" === "v") {
      document.addEventListener("DOMContentLoaded", function (event) {
        if (window.html5 != undefined) {
          window.html5.elements = ["address", "aside", "custom-math", "details", "dialog", "footer", "header", "main", "math", "menclose", "menuitem", "mfenced", "mfrac", "mi", "mn", "mo", "mpadded", "mroot", "mrow", "mspace", "msqrt", "mstyle", "msub", "msup", "mtable", "mtd", "mtext", "mtr", "munder", "nav", "section", "summary", "template"];
          window.html5.shivCss = false;
          window.html5.shivDocument(document);
        }
      }, {once: true});
    }
    
    /*
    IE 8 has an issues with:
    
    this.T = function () {
      throw new RangeError("message 01234");
    };
    try {
      T();
    } catch (error) {
      if (!(error instanceof RangeError)) {
        alert("IE 8 bug (instanceof)");
      }
      if (error.message !== "message 01234") {
        alert("IE 8 bug (message)");
      }
    }
    
    A workaround:
    
    var T = undefined;
    
    */
    
    // IE 8
    if (Object.getOwnPropertyDescriptor != undefined) {
      if (Object.getOwnPropertyDescriptor(Element.prototype, "non-existing-property") != null) {
        var nativeObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        Object.getOwnPropertyDescriptor = function (object, property) {
          var x = nativeObjectGetOwnPropertyDescriptor.call(null, object, property);
          return x.value === undefined && x.get === undefined && x.set === undefined ? null : x;
        };
      }
    }
    
    if (CSSStyleDeclaration.prototype.setProperty == undefined) {
      CSSStyleDeclaration.prototype.setProperty = function (name, value, priority) {
        this[name] = value;
      };
    }
    if (CSSStyleDeclaration.prototype.getPropertyValue == undefined) {
      CSSStyleDeclaration.prototype.getPropertyValue = function (name) {
        return this[name];
      };
    }