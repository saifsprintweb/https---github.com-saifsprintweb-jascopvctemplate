(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });
    
    // Initial header state check for home page
    $(document).ready(function() {
        if ($('body').hasClass('home-page')) {
            var scroll = $(window).scrollTop();
            var header = $('header').height();
            var videoBanner = $('.main-banner').height();
            
                         if (scroll >= videoBanner - header) {
                 $("header").addClass("background-header");
                 $(".header-area .main-nav .nav li a").css("color", "#000000");
                 $(".header-area .main-nav .logo h1").css("color", "#000000");
             } else {
                 $("header").removeClass("background-header");
                 $(".header-area .main-nav .nav li a").css("color", "#fff");
                 $(".header-area .main-nav .logo h1").css("color", "#fff");
             }
        }
    });


	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var header = $('header').height();
	  
	  // Check if we're on the home page
	  if ($('body').hasClass('home-page')) {
	    // For home page, check if we've scrolled past the video banner
	    var videoBanner = $('.main-banner').height();
	    
	    if (scroll >= videoBanner - header) {
	      $("header").addClass("background-header");
	            // Change text colors back to dark for better visibility on white background
      $(".header-area .main-nav .nav li a").css("color", "#000000");
      $(".header-area .main-nav .logo h1").css("color", "#000000");
	    } else {
	      $("header").removeClass("background-header");
	      // Change text colors back to white for visibility on video background
	      $(".header-area .main-nav .nav li a").css("color", "#fff");
	      $(".header-area .main-nav .logo h1").css("color", "#fff");
	    }
	  } else {
	    // For other pages, use the original logic
	    var box = $('.header-text').height();
	    if (scroll >= box - header) {
	      $("header").addClass("background-header");
	    } else {
	      $("header").removeClass("background-header");
	    }
	  }
	})

	$('.owl-banner').owlCarousel({
	  center: true,
      items:1,
      loop:true,
      nav: true,
	  dots:true,
	  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      margin:30,
      responsive:{
        992:{
            items:1
        },
		1200:{
			items:1
		}
      }
	});

	var width = $(window).width();
		$(window).resize(function() {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})

	const elem = document.querySelector('.properties-box');
	const filtersElem = document.querySelector('.properties-filter');
	if (elem) {
		const rdn_events_list = new Isotope(elem, {
			itemSelector: '.properties-items',
			layoutMode: 'masonry'
		});
		if (filtersElem) {
			filtersElem.addEventListener('click', function(event) {
				if (!matchesSelector(event.target, 'a')) {
					return;
				}
				const filterValue = event.target.getAttribute('data-filter');
				rdn_events_list.arrange({
					filter: filterValue
				});
				filtersElem.querySelector('.is_active').classList.remove('is_active');
				event.target.classList.add('is_active');
				event.preventDefault();
			});
		}
	}


	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});
    


})(window.jQuery);