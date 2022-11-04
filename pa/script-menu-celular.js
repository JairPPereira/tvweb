
;( function( $, window, undefined ) {

	'use strict';

	// global
	var Modernizr = window.Modernizr, $body = $( 'body' );

	$.DLMenu = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	$.DLMenu.defaults = {
		animationClasses : { classin : 'dl-animate-in-1', classout : 'dl-animate-out-1' },

		onLevelClick : function( el, name ) { return false; },

		onLinkClick : function( el, ev ) { return false; }
	};

	$.DLMenu.prototype = {
		_init : function( options ) {


			this.options = $.extend( true, {}, $.DLMenu.defaults, options );
			this._config();
			
			var animEndEventNames = {
					'WebkitAnimation' : 'webkitAnimationEnd',
					'OAnimation' : 'oAnimationEnd',
					'msAnimation' : 'MSAnimationEnd',
					'animation' : 'animationend'
				},
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};

			this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ] + '.dlmenu';

			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.dlmenu',

			this.supportAnimations = Modernizr.cssanimations,
			this.supportTransitions = Modernizr.csstransitions;

			this._initEvents();

		},
		_config : function() {
			this.open = false;
			this.$trigger = this.$el.children( '.dl-trigger' );
			this.$menu = this.$el.children( 'ul.dl-menu' );
			this.$menuitems = this.$menu.find( 'li:not(.dl-back)' );
			this.$el.find( 'ul.dl-submenu' ).prepend( '<li class="dl-back"><a href="#"> VOLTAR</a></li>' );
			this.$back = this.$menu.find( 'li.dl-back' );
		},
		_initEvents : function() {

			var self = this;

			this.$trigger.on( 'click.dlmenu', function() {
				
				if( self.open ) {
					self._closeMenu();
				} 
				else {
					self._openMenu();
				}
				return false;

			} );

			this.$menuitems.on( 'click.dlmenu', function( event ) {
				
				event.stopPropagation();

				var $item = $(this),
					$submenu = $item.children( 'ul.dl-submenu' );

				if( $submenu.length > 0 ) {

					var $flyin = $submenu.clone().css( 'opacity', 0 ).insertAfter( self.$menu ),
						onAnimationEndFn = function() {
							self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classout ).addClass( 'dl-subview' );
							$item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );
							$flyin.remove();
						};

					setTimeout( function() {
						$flyin.addClass( self.options.animationClasses.classin );
						self.$menu.addClass( self.options.animationClasses.classout );
						if( self.supportAnimations ) {
							self.$menu.on( self.animEndEventName, onAnimationEndFn );
						}
						else {
							onAnimationEndFn.call();
						}

						self.options.onLevelClick( $item, $item.children( 'a:first' ).text() );
					} );

					return false;

				}
				else {
					self.options.onLinkClick( $item, event );
				}

			} );

			this.$back.on( 'click.dlmenu', function( event ) {
				
				var $this = $( this ),
					$submenu = $this.parents( 'ul.dl-submenu:first' ),
					$item = $submenu.parent(),

					$flyin = $submenu.clone().insertAfter( self.$menu );

				var onAnimationEndFn = function() {
					self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classin );
					$flyin.remove();
				};

				setTimeout( function() {
					$flyin.addClass( self.options.animationClasses.classout );
					self.$menu.addClass( self.options.animationClasses.classin );
					if( self.supportAnimations ) {
						self.$menu.on( self.animEndEventName, onAnimationEndFn );
					}
					else {
						onAnimationEndFn.call();
					}

					$item.removeClass( 'dl-subviewopen' );
					
					var $subview = $this.parents( '.dl-subview:first' );
					if( $subview.is( 'li' ) ) {
						$subview.addClass( 'dl-subviewopen' );
					}
					$subview.removeClass( 'dl-subview' );
				} );

				return false;

			} );

			$(window).resize(function(){
				if($(window).width() > 800){
					self._resetMenu();
				}
			});
			
		},
		closeMenu : function() {
			if( this.open ) {
				this._closeMenu();
			}
		},
		_closeMenu : function() {
			var self = this,
				onTransitionEndFn = function() {
					self.$menu.off( self.transEndEventName );
					self._resetMenu();
				};
			
			this.$menu.removeClass( 'dl-menuopen' );
			this.$menu.addClass( 'dl-menu-toggle' );
			this.$trigger.removeClass( 'dl-active' );
			
			if( this.supportTransitions ) {
				this.$menu.on( this.transEndEventName, onTransitionEndFn );
			}
			else {
				onTransitionEndFn.call();
			}

			this.open = false;
		},
		openMenu : function() {
			if( !this.open ) {
				this._openMenu();
			}
		},
		_openMenu : function() {
			var self = this;

			$body.off( 'click' ).on( 'click.dlmenu', function() {
				self._closeMenu() ;
			} );
			this.$menu.addClass( 'dl-menuopen dl-menu-toggle' ).on( this.transEndEventName, function() {
				$( this ).removeClass( 'dl-menu-toggle' );
			} );
			this.$trigger.addClass( 'dl-active' );
			this.open = true;
		},

		_resetMenu : function() {
			this.$menu.removeClass( 'dl-subview' );
			this.$menuitems.removeClass( 'dl-subview dl-subviewopen' );
		}
	};

	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.dlmenu = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'dlmenu' );
				if ( !instance ) {
					logError( "cannot call methods on dlmenu prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for dlmenu instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		} 
		else {
			this.each(function() {	
				var instance = $.data( this, 'dlmenu' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'dlmenu', new $.DLMenu( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );



$(function() {

			duplicateParentofSubs(createDLMenu);

			function createDLMenu(callback){
				$( '#dl-menu' ).dlmenu({
					animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
				});

				determineNav();
			}

			

			function determineNav(){
				var winWidth = $(window).width(),
					dlMenu = $('.nav-main'),
					dlSubList = $('.nav-sub-list'),
					dlSubSub = $('.nav-sub-sub');

				removeDLInfo();
				addDLInfo();

				$(window).resize(function(){
					winWidth = $(window).width();

					removeDLInfo();
					addDLInfo();
				});

				function removeDLInfo(){
					if(winWidth > 800){
						if(dlMenu.hasClass('dl-menuwrapper')){
							dlMenu.removeClass('dl-menuwrapper').attr('id', '');
							dlSubList.removeClass('dl-submenu');
							dlSubSub.removeClass('dl-submenu');
						}
					}
				}

				function addDLInfo(){
					if(winWidth <= 800) {
						if(!dlMenu.hasClass('dl-menuwrapper')){
							dlMenu.addClass('dl-menuwrapper').attr('id', 'dl-menu');
							dlSubList.addClass('dl-submenu');
							dlSubSub.addClass('dl-submenu');
						}
					}
				}
			}

			function duplicateParentofSubs(callback){
				var navSub = document.getElementsByClassName("dl-submenu"),
		            mainNavItem = null,
		            mainNavItemLink = null,
		            winWidth = viewport(),
		            addItems = true;

		        checkWidth();
		        window.onresize = checkWidth;

		        callback();

		        function viewport()
		        {
		            var e = window, a = 'inner';
		            if ( !( 'innerWidth' in window ) )
		            {
		                a = 'client';
		                e = document.documentElement || document.body;
		            }
		            return { width : e[ a+'Width' ] };
		        }

		        function checkWidth(){
		            winWidth = viewport().width;

		            
		                for(i=0; i < navSub.length; i++){
		                    mainNavItem = navSub[i].parentNode;
		                    mainNavItemLink = mainNavItem.getElementsByTagName("a")[0];
												
		                    if(addItems){
		                        clonedItems(mainNavItem, false);
		                    }
		                    if(winWidth <= 800) {
			                    mainNavItemLink.onclick = function(event) { 
									event.preventDefault();
			                    };
			                } else {
			                	mainNavItemLink.onclick = function() { return true; };
			                }
		                }
		                addItems = false;
		        }

		        function clonedItems(mainListItem){
		            var subNavItem = mainListItem.cloneNode(false),
		                subNavItemLink = mainListItem.children[0].cloneNode(true),
		                subNav = mainListItem.children[1];

		            subNavItem.appendChild(subNavItemLink);
		            subNav.insertBefore(subNavItem, subNav.children[0]);
		            subNavItem.setAttribute("class", "nav-sub-item mobile-main-item");
		        }
		    }
		});