/*! @name videojs-mobile-ui @version 0.7.0 @license MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js'), require('global/window')) :
  typeof define === 'function' && define.amd ? define(['video.js', 'global/window'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.videojsMobileUi = factory(global.videojs, global.window));
}(this, (function (videojs, window) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);
  var window__default = /*#__PURE__*/_interopDefaultLegacy(window);

  var version = "0.7.0";

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var setPrototypeOf = createCommonjsModule(function (module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
      return _setPrototypeOf(o, p);
    }

    module.exports = _setPrototypeOf;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  var inheritsLoose = createCommonjsModule(function (module) {
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      setPrototypeOf(subClass, superClass);
    }

    module.exports = _inheritsLoose;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  var Component = videojs__default['default'].getComponent('Component');
  var dom = videojs__default['default'].dom || videojs__default['default'];
  /**
   * The `TouchOverlay` is an overlay to capture tap events.
   *
   * @extends Component
   */

  var TouchOverlay = /*#__PURE__*/function (_Component) {
    inheritsLoose(TouchOverlay, _Component);

    /**
    * Creates an instance of the this class.
    *
    * @param  {Player} player
    *         The `Player` that this class should be attached to.
    *
    * @param  {Object} [options]
    *         The key/value store of player options.
    */
    function TouchOverlay(player, options) {
      var _this;

      _this = _Component.call(this, player, options) || this;
      _this.seekSeconds = options.seekSeconds;
      _this.tapTimeout = options.tapTimeout; // Add play toggle overlay

      _this.addChild('playToggle', {}); // Clear overlay when playback starts or with control fade


      player.on(['playing', 'userinactive'], function (e) {
        _this.removeClass('show-play-toggle');
      }); // A 0 inactivity timeout won't work here

      if (_this.player_.options_.inactivityTimeout === 0) {
        _this.player_.options_.inactivityTimeout = 5000;
      }

      _this.enable();

      return _this;
    }
    /**
     * Builds the DOM element.
     *
     * @return {Element}
     *         The DOM element.
     */


    var _proto = TouchOverlay.prototype;

    _proto.createEl = function createEl() {
      var el = dom.createEl('div', {
        className: 'vjs-touch-overlay',
        // Touch overlay is not tabbable.
        tabIndex: -1
      });
      return el;
    }
    /**
    * Debounces to either handle a delayed single tap, or a double tap
     *
     * @param {Event} event
     *        The touch event
     *
     */
    ;

    _proto.handleTap = function handleTap(event) {
      var _this2 = this;

      // Don't handle taps on the play button
      if (event.target !== this.el_) {
        return;
      }

      event.preventDefault();

      if (this.firstTapCaptured) {
        this.firstTapCaptured = false;

        if (this.timeout) {
          window__default['default'].clearTimeout(this.timeout);
        }

        this.handleDoubleTap(event);
      } else {
        this.firstTapCaptured = true;
        this.timeout = window__default['default'].setTimeout(function () {
          _this2.firstTapCaptured = false;

          _this2.handleSingleTap(event);
        }, this.tapTimeout);
      }
    }
    /**
     * Toggles display of play toggle
     *
     * @param {Event} event
     *        The touch event
     *
     */
    ;

    _proto.handleSingleTap = function handleSingleTap(event) {
      this.removeClass('skip');
      this.toggleClass('show-play-toggle');
    }
    /**
     * Seeks by configured number of seconds if left or right part of video double tapped
     *
     * @param {Event} event
     *        The touch event
     *
     */
    ;

    _proto.handleDoubleTap = function handleDoubleTap(event) {
      var _this3 = this;

      var rect = this.el_.getBoundingClientRect();
      var x = event.changedTouches[0].clientX - rect.left; // Check if double tap is in left or right area

      if (x < rect.width * 0.4) {
        this.player_.currentTime(Math.max(0, this.player_.currentTime() - this.seekSeconds));
        this.addClass('reverse');
      } else if (x > rect.width - rect.width * 0.4) {
        this.player_.currentTime(Math.min(this.player_.duration(), this.player_.currentTime() + this.seekSeconds));
        this.removeClass('reverse');
      } else {
        return;
      } // Remove play toggle if showing


      this.removeClass('show-play-toggle'); // Remove and readd class to trigger animation

      this.removeClass('skip');
      window__default['default'].requestAnimationFrame(function () {
        _this3.addClass('skip');
      });
    }
    /**
     * Enables touch handler
     */
    ;

    _proto.enable = function enable() {
      this.firstTapCaptured = false;
      this.on('touchend', this.handleTap);
    }
    /**
     * Disables touch handler
     */
    ;

    _proto.disable = function disable() {
      this.off('touchend', this.handleTap);
    };

    return TouchOverlay;
  }(Component);

  Component.registerComponent('TouchOverlay', TouchOverlay);

  var defaults = {
    fullscreen: {
      enterOnRotate: true,
      exitOnRotate: true,
      lockOnRotate: true,
      iOS: false,
      disabled: false
    },
    touchControls: {
      seekSeconds: 10,
      tapTimeout: 300,
      disableOnEnd: false,
      disabled: false
    }
  };
  var screen = window__default['default'].screen;
  /**
   * Gets 'portrait' or 'lanscape' from the two orientation APIs
   *
   * @return {string} orientation
   */

  var getOrientation = function getOrientation() {
    if (screen) {
      // Prefer the string over angle, as 0° can be landscape on some tablets
      var orientationString = ((screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation || '').split('-')[0];

      if (orientationString === 'landscape' || orientationString === 'portrait') {
        return orientationString;
      }
    } // iOS only supports window.orientation


    if (typeof window__default['default'].orientation === 'number') {
      if (window__default['default'].orientation === 0 || window__default['default'].orientation === 180) {
        return 'portrait';
      }

      return 'landscape';
    }

    return 'portrait';
  }; // Cross-compatibility for Video.js 5 and 6.


  var registerPlugin = videojs__default['default'].registerPlugin || videojs__default['default'].plugin;
  /**
   * Add UI and event listeners
   *
   * @function onPlayerReady
   * @param    {Player} player
   *           A Video.js player object.
   *
   * @param    {Object} [options={}]
   *           A plain object containing options for the plugin.
   */

  var onPlayerReady = function onPlayerReady(player, options) {
    player.addClass('vjs-mobile-ui');

    if (options.fullscreen.iOS) {
      videojs__default['default'].log.warn('videojs-mobile-ui: `fullscreen.iOS` is deprecated. Use Video.js option `preferFullWindow` instead.');

      if (videojs__default['default'].browser.IS_IOS && videojs__default['default'].browser.IOS_VERSION > 9 && !player.el_.ownerDocument.querySelector('.bc-iframe')) {
        player.tech_.el_.setAttribute('playsinline', 'playsinline');

        player.tech_.supportsFullScreen = function () {
          return false;
        };
      }
    }

    if (!options.touchControls.disabled) {
      if (options.touchControls.disableOnEnd || typeof player.endscreen === 'function') {
        player.addClass('vjs-mobile-ui-disable-end');
      } // Insert before the control bar


      var controlBarIdx;
      var versionParts = videojs__default['default'].VERSION.split('.');
      var major = parseInt(versionParts[0], 10);
      var minor = parseInt(versionParts[1], 10); // Video.js < 7.7.0 doesn't account for precedding components that don't have elements

      if (major < 7 || major === 7 && minor < 7) {
        controlBarIdx = Array.prototype.indexOf.call(player.el_.children, player.getChild('ControlBar').el_);
      } else {
        controlBarIdx = player.children_.indexOf(player.getChild('ControlBar'));
      }

      player.touchOverlay = player.addChild('TouchOverlay', options.touchControls, controlBarIdx);
    }

    if (options.fullscreen.disabled) {
      return;
    }

    var locked = false;

    var rotationHandler = function rotationHandler() {
      var currentOrientation = getOrientation();

      if (currentOrientation === 'landscape' && options.fullscreen.enterOnRotate) {
        if (player.paused() === false) {
          player.requestFullscreen();

          if (options.fullscreen.lockOnRotate && screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape').then(function () {
              locked = true;
            }).catch(function (e) {
              videojs__default['default'].log('Browser refused orientation lock:', e);
            });
          }
        }
      } else if (currentOrientation === 'portrait' && options.fullscreen.exitOnRotate && !locked) {
        if (player.isFullscreen()) {
          player.exitFullscreen();
        }
      }
    };

    if (options.fullscreen.enterOnRotate || options.fullscreen.exitOnRotate) {
      if (videojs__default['default'].browser.IS_IOS) {
        window__default['default'].addEventListener('orientationchange', rotationHandler);
        player.on('dispose', function () {
          window__default['default'].removeEventListener('orientationchange', rotationHandler);
        });
      } else if (screen.orientation) {
        // addEventListener('orientationchange') is not a user interaction on Android
        screen.orientation.onchange = rotationHandler;
        player.on('dispose', function () {
          screen.orientation.onchange = null;
        });
      }

      player.on('fullscreenchange', function (_) {
        if (!player.isFullscreen() && locked) {
          screen.orientation.unlock();
          locked = false;
        }
      });
    }

    player.on('ended', function (_) {
      if (locked === true) {
        screen.orientation.unlock();
        locked = false;
      }
    });
  };
  /**
   * A video.js plugin.
   *
   * Adds a monile UI for player control, and fullscreen orientation control
   *
   * @function mobileUi
   * @param    {Object} [options={}]
   *           Plugin options.
   * @param    {boolean} [options.forceForTesting=false]
   *           Enables the display regardless of user agent, for testing purposes
   * @param    {Object} [options.fullscreen={}]
   *           Fullscreen options.
   * @param    {boolean} [options.fullscreen.disabled=false]
   *           If true no fullscreen handling except the *deprecated* iOS fullwindow hack
   * @param    {boolean} [options.fullscreen.enterOnRotate=true]
   *           Whether to go fullscreen when rotating to landscape
   * @param    {boolean} [options.fullscreen.exitOnRotate=true]
   *           Whether to leave fullscreen when rotating to portrait (if not locked)
   * @param    {boolean} [options.fullscreen.lockOnRotate=true]
   *           Whether to lock orientation when rotating to landscape
   *           Unlocked when exiting fullscreen or on 'ended'
   * @param    {boolean} [options.fullscreen.iOS=false]
   *           Deprecated: Whether to disable iOS's native fullscreen so controls can work
   * @param    {Object} [options.touchControls={}]
   *           Touch UI options.
   * @param    {boolean} [options.touchControls.disabled=false]
   *           If true no touch controls are added.
   * @param    {int} [options.touchControls.seekSeconds=10]
   *           Number of seconds to seek on double-tap
   * @param    {int} [options.touchControls.tapTimeout=300]
   *           Interval in ms to be considered a doubletap
   * @param    {boolean} [options.touchControls.disableOnEnd=false]
   *           Whether to disable when the video ends (e.g., if there is an endscreen)
   *           Never shows if the endscreen plugin is present
   */


  var mobileUi = function mobileUi(options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    if (options.forceForTesting || videojs__default['default'].browser.IS_ANDROID || videojs__default['default'].browser.IS_IOS) {
      this.ready(function () {
        onPlayerReady(_this, videojs__default['default'].mergeOptions(defaults, options));
      });
    }
  }; // Register the plugin with video.js.


  registerPlugin('mobileUi', mobileUi); // Include the version number.

  mobileUi.VERSION = version;

  return mobileUi;

})));
