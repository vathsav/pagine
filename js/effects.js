// Animated Header Effect

var animatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector('.header'),
		didScroll = false,
		changeHeaderOn = 150;

	function init() {
		window.addEventListener('scroll', function(event) {
			if(!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 250);
			}
		}, false);
	}

	function scrollPage() {
		var sy = scrollY();
		if (sy >= changeHeaderOn) {
			classie.add(header, 'header-shrink');
		}
		else {
			classie.remove(header, 'header-shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

// Scroll To Top Effect

jQuery(document).ready(function($){
	var offset = 300,
	scroll_top_duration = 500,
	$back_to_top = $('.scroll_to_top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('scroll_to_top_visible') : $back_to_top.removeClass('scroll_to_top_visible');
	});
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body, html').animate({
			scrollTop: 0,
		 	}, scroll_top_duration
		);
	});
});

/* Scroll To Contact Effect

$("html, body").animate({ scrollTop:  }, 1000);

jQuery(document).ready(function($){
	$trigger = $('.nav_contact');

	$trigger.on('click', function(event){
		event.preventDefault();
		$('body, html').animate({
			scrollTop: 0,
		 	}, scroll_top_duration
		);
	});
});

// Search Box Effect

(function(window){
	// get vars
	var searchEl = document.querySelector("#input");
	var labelEl = document.querySelector("#label");

	// register clicks and toggle classes
	labelEl.addEventListener("click", function(){
		if (classie.has(searchEl,"focus")) {
			classie.remove(searchEl,"focus");
			classie.remove(labelEl,"active");
		} else {
			classie.add(searchEl,"focus");
			classie.add(labelEl,"active");
		}
	});

	// register clicks outisde search box, and toggle correct classes
	document.addEventListener("click", function(e){
		var clickedID = e.target.id;
		if (clickedID != "search-terms" && clickedID != "search-label") {
			if (classie.has(searchEl,"focus")) {
				classie.remove(searchEl,"focus");
				classie.remove(labelEl,"active");
			}
		}
	});
}(window));

*/