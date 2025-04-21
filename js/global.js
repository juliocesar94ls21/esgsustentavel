$(document).ready(function(){
	$( ".paragraf-txt" ).effect( "slide", {queue: false, duration: 500, complete: function(){  $( ".btn-transparent-eg" ).effect( "slide","fast") }} ); 
	$(".col-img-wpeg").fadeIn({queue: false, duration: 1000}); 
	
	var elem1 = $(".whapper-title-icons"),
		elem2 = $(".content-section-mt"),
		elem3 = $(".content-section-cc"),
		elem4 = $(".row-border-cf"),
		elem5 = $(".content-ai"),
		elem6 = $(".content-aa"),
		elem7 = $(".content-mc");
		elem8 = $(".col-form-esg"),
		classElem = $(".ccactive2");
	
	animateElem(elem1, elem1.children(".icon-text").eq(0), "animated fadeInLeftBig");
	animateElem(elem1, elem1.children(".icon-text").eq(1), "animated fadeInUpBig");
	animateElem(elem1, elem1.children(".icon-text").eq(2), "animated fadeInRightBig");
	animateElem(elem2, elem2.find(".title-section-mt"), "animated fadeInLeftBig");
	animateElem(elem2, elem2.find(".text-section-mt"), "animated fadeInRightBig");
	animateElem(elem2, elem2.find(".btn-primari-mt"), "animated bounceIn");
	animateElem(elem3, elem3.find(".title-section-cc"), "animated rubberBand");
	animateElem(elem3, elem3.find(".text-section-cc"), "animated fadeInLeftBig");
	animateElem(elem3, elem3.find(".content-itens-cc"), "animated fadeInDown");
	animateElem(elem4, elem4.find(".title-section-cf"), "animated fadeInLeftBig");
	animateElem(elem4, elem4.find(".text-sec-cf"), "animated fadeInRightBig");
	animateElem(elem4, elem4.find(".btn-cf"), "animated rubberBand");
	animateElem(elem4, elem4.find(".col-img-cf"), "animated fadeInUpBig");
	animateElem(elem5, elem5.find(".title-section-ai"), "animated fadeInLeftBig");
	animateElem(elem5, elem5.find(".row-itens-ai"), "animated fadeInUpBig");
	animateElem(elem6, elem6.find(".title-section-aa"), "animated fadeInRightBig");
	animateElem(elem6, elem6.find(".row-itens-ai"), "animated fadeInUpBig");
	animateElem(elem7, elem7.find(".title-section-mc"), "animated fadeInLeftBig");
	animateElem(elem7, elem7.find(".row-itens-ai"), "animated fadeInUpBig");
	animateElem(elem8, elem8.find(".row"), "animated fadeInLeftBig");
	
	function animateElem(elemAtachment, elemAnimate, animation){
		$(window).on("scroll", function(){
			if($(this).scrollTop() >= elemAtachment.offset().top - elemAtachment.outerHeight() - 200){
				elemAnimate.addClass(animation);
			}
		});
	}
	
	$(".icon-right-cc, .icon-left-cc").on("click", function(){
		if($(this).hasClass("active1")){
			$(".content-itens-cc").fadeOut("fast", function(){
				$(".content-itens-cc2").fadeIn().css("display", "flex");
			});
			$(this).removeClass("active1").addClass("active2");
		}
		else{
			$(".content-itens-cc2").fadeOut("fast", function(){
				$(".content-itens-cc").fadeIn().css("display", "flex");
			});
			$(this).removeClass("active2").addClass("active1");
		}
	});
	
	var $doc = $('html, body');
	$('a').click(function() {
		$doc.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
	
	$(".icon-toggle-menu").on("click", function(){
		$(".navs-mob").toggle();
		if($(this).children("i").hasClass("fa-bars")){
			$(this).html('<i class="fa-solid fa-circle-xmark"></i>');
		}
		else{
			$(this).html('<i class="fa-solid fa-bars"></i>');
		}
	});
	
	$(".navs ul li").eq(0).on("click", function(){
		$(".page-active").hide()
		$(".content-index").show().addClass("page-active");
	});
	$(".navs ul li").eq(1).on("click", function(){
		$(".page-active").hide()
		$(".content-cursos").show().addClass("page-active");
	});
	$(".navs ul li").eq(2).on("click", function(){
		$(".page-active").hide()
		$(".content-obra").show().addClass("page-active");
	});
	$(".btn-cf").on("click", function(){
		$(".page-active").hide()
		$(".content-obra").show().addClass("page-active");
	});
	$(".navs ul li").eq(3).on("click", function(){
		$(".page-active").hide()
		$(".content-produto").show().addClass("page-active");
	});
	$(".navs-mob ul li").eq(0).on("click", function(){
		$(".page-active").hide()
		$(".content-index").show().addClass("page-active");
	});
	$(".navs-mob ul li").eq(1).on("click", function(){
		$(".page-active").hide()
		$(".content-cursos").show().addClass("page-active");
	});
	$(".navs-mob ul li").eq(2).on("click", function(){
		$(".page-active").hide()
		$(".content-obra").show().addClass("page-active");
	});
	$(".navs-mob ul li").eq(3).on("click", function(){
		$(".page-active").hide()
		$(".content-produto").show().addClass("page-active");
	});
	
	$(".submit-msg").on("click", function(){
		$(this).val("...Aguarde");
	});
	$(".form-contact").on("submit", function(e){
		e.preventDefault();
		//a ser implementado
	});
});