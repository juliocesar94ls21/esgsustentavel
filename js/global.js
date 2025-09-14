$(document).ready(function(){
	$( ".paragraf-txt" ).effect( "slide", {queue: false, duration: 500, complete: function(){  $( ".btn-transparent-eg" ).effect( "slide","fast") }} ); 
	$(".col-img-wpeg").fadeIn({queue: false, duration: 1000}); 
	
	
	
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
	$('.tag-ancor').click(function() {
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
	$(".navs-mob ul li").on("click", function(){
		$(".navs-mob").hide();
	});

	$(".btn-praia-leste").on("click", function(){
		$(".page-active").hide().removeClass("page-active");
		$(".obra-praia").show().addClass("page-active");
		 window.scrollTo(0, 0);
	})

	$(".btn-cf").on("click", function(){
		$(".page-active").hide().removeClass("page-active");
		$(".content-obra").show().addClass("page-active");
	});
	
	$(".submit-msg").on("click", function(){
		$(this).val("...Aguarde");
	});
	$(".form-contact").on("submit", function(e){
		e.preventDefault();
		//a ser implementado
	});
});