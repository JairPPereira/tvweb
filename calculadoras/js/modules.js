// JavaScript Document
/* меню аккордеон */
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu-acord').not($next).slideUp().parent().removeClass('open');
		};
	}	
	var accordion = new Accordion($('#accordion'), false);
});	
/* меню аккордеон КОНЕЦ*/	

//вызов модального окна с мобильным меню Акордеон
$(document).ready(function() {   
	$('.modal-menu-mobile').click(function(e) {
		e.preventDefault();
		$(".menu-mobile").show();
		$(".top-close-2").show();		 
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('.mask-2').css({'width':maskWidth,'height':maskHeight});
		$('.mask-2').fadeIn(600); 
		$('.mask-2').fadeTo("slow",0.8); 
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		$(id).fadeIn(0); 
	});
	
	$('.menu-mobile .close-2').click(function (e) { 
	e.preventDefault(); 
	$('.mask-2, .menu-mobile').hide();
	$(".menu-mobile").hide();
	$(".top-close-2").hide();			 
	}); 
	$('.mask-2').click(function () {
	$(this).hide();
	$('.menu-mobile').hide();
	$(".top-close-2").hide();			 
	}); 
	});
//Конец -вызов модального окна с мобильным меню Акордеон

/*показать-скрыть матрицу В*/
$(document).ready(function(){
	$("#for-matrix-b").click(function(){
		$(".matrix-b").toggle();
	});		
});
/*Конец - показать-скрыть матрицу В*/

/*показать-скрыть блок с помощью движка*/
/* cnb - checkbox, b - block */
$(document).ready(function(){
	$("#chb-title").click(function(){
		$(".form-control").slideToggle("slow");
		$(".answer").toggle();
		$(".cnb-b").slideToggle();
		$(".cnb-t").toggle();
		$(".cnb-t2").toggle();
	});		
});
/*Конец*/
$(document).ready(function(){
	$("#chb-title-2").click(function(){
		$(".input-group-addon").slideToggle("slow");
		$(".cnb-b-2").slideToggle();
		$(".cnb-t-2").toggle();
		$(".cnb-t2-2").toggle();
	});		
});
/*Конец*/

// прокрутка страницы вверх 
$(document).ready(function(){
  // прячем кнопку #back-top
  $("#back-top").hide();

// появление/затухание кнопки #back-top
  $(function (){
		$(window).scroll(function (){
			 if ($(this).scrollTop() > 400){ // величина смещения экрана в пикселях, когда появляется кнопка 
				  $('#back-top').fadeIn();
			 } else{
				  $('#back-top').fadeOut();
			 }
		});

		// при клике на ссылку плавно поднимаемся вверх
		$('#back-top a').click(function (){
			 $('body,html').animate({
				  scrollTop:0
			 }, 660);		//скорость скролинга вверх
			 return false;
		});
  });
});	
// КОНЕЦ блока - прокрутка страницы вверх 

/***** плавная прокрутка якорных ссылок *******/
 $(document).ready(function(){
    $(".art ul.anchor, .art ol.anchor, .art span.anchor, .art .anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
/*****Конец - плавная прокрутка якорных ссылок *******/

//Организация Вкладок jQuery - запоминает открытую вкладку
$(function() {

	$('ul.feature-title li:nth-child(1), div.feature-content:nth-child(2)').addClass('active'); //если не запомнил активную вкладку, то назначается первая
	$('ul.feature-title').each(function(i) {
		var storage = localStorage.getItem('tab' + i);
		if (storage) {
			$(this)
				.find('li').removeClass('active').eq(storage).addClass('active')
				.closest('div.feature-box').find('div.feature-content').removeClass('active').eq(storage).addClass('active');
		}
	});

	$('ul.feature-title').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.feature-box').find('div.feature-content').removeClass('active').eq($(this).index()).addClass('active');
		var ulIndex = $('ul.feature-title').index($(this).parents('ul.feature-title'));
		localStorage.removeItem('tab' + ulIndex);
		localStorage.setItem('tab' + ulIndex, $(this).index());
	});	
});
if((self.parent&&!(self.parent===self))&&(self.parent.frames.length!=0) ){self.parent.location=document.location}	//запоминает открытую вкладку
//КОНЕЦ_Организация Вкладок