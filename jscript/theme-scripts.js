(function( $ ) {
	"use strict";

	var supports = (function() {
	  var div = document.createElement('div'),
	    vendors = 'Khtml Ms O Moz Webkit'.split(' '),
	    len = vendors.length;

	  return function(prop) {
	    if ( prop in div.style ) return true;

	    prop = prop.replace(/^[a-z]/, function(val) {
	       return val.toUpperCase();
	    });

	    while(len--) {
	       if ( vendors[len] + prop in div.style ) {
	          return true;
	       } 
	    }
	    return false;
	  };
	})();


	jQuery(window).ready(function() {

		if ( !supports('perspective') ) {
			jQuery(".main-menu ul").removeClass("transition-active");
		}
		
		// For inset borders
		jQuery(".inset-corners").each(function() {
			var thisel = jQuery(this);
			thisel.append('<div class="border-boxes left top"><div></div></div><div class="border-boxes left bottom"><div></div></div><div class="border-boxes right top"><div></div></div><div class="border-boxes right bottom"><div></div></div>');
			thisel.css('border-radius', (parseInt(thisel.attr('rel'))+2)+'px').css('-moz-border-radius', (parseInt(thisel.attr('rel'))+2)+'px');
			thisel.find('.border-boxes').css('width', thisel.attr('rel')+'px').css('height', thisel.attr('rel')+'px');
		});

		// Don't let for page to reload
		jQuery(".md-trigger").click(function() {
			return false;
		});

		// Alert box close
		jQuery('a[href="#close-alert"]').click(function() {
			jQuery(this).parent().animate({
				opacity: 0,
				padding: "0px 13px",
				margin: "0px",
				height: "0px"
			}, 300, function() {
				// Animation complete.
			});
			return false;
		});

		// Accordion blocks
		jQuery(".accordion > div > a").click(function() {
			var thisel = jQuery(this).parent();
			if(thisel.hasClass("active")){
				thisel.removeClass("active").children("div").animate({
					"height": "toggle",
					"opacity": "toggle",
					"padding-top": "toggle"
				}, 300);
				return false;
			}
			// thisel.siblings("div").removeClass("active");
			thisel.siblings("div").each(function() {
				var tz = jQuery(this);
				if(tz.hasClass("active")){
					tz.removeClass("active").children("div").animate({
						"height": "toggle",
						"opacity": "toggle",
						"padding-top": "toggle"
					}, 300);
				}
			});
			// thisel.addClass("active");
			thisel.addClass("active").children("div").animate({
				"height": "toggle",
				"opacity": "toggle",
				"padding-top": "toggle"
			}, 300);
			return false;
		});
	  

		// Tabbed blocks
		jQuery(".tabs").each(function() {
			var thisel = jQuery(this);
			thisel.children("div").css("min-height", (parseInt(thisel.css("height"))-30)+"px");
			thisel.children("div").eq(0).addClass("active");
			thisel.children("ul").children("li").eq(0).addClass("active");
		});

		jQuery(".tabs > ul > li a").click(function() {
			var thisel = jQuery(this).parent();
			thisel.siblings(".active").removeClass("active");
			thisel.addClass("active");
			thisel.parent().siblings("div.active").removeClass("active");
			thisel.parent().siblings("div").eq(thisel.index()).addClass("active");
			return false;
		});


		jQuery(".lightbox").click(function () {
			jQuery(".lightbox").css('overflow', 'hidden');
			jQuery("body").css('overflow', 'auto');
			jQuery(".lightbox .lightcontent").fadeOut('fast');
			jQuery(".lightbox").fadeOut('slow');
		}).children().click(function(e) {
			return false;
		});

		// Responsive menu
		jQuery(".main-menu").append("<a href='#' class='phone-menu'>Show Menu</a>");
		jQuery(".main-menu").append("<div class='menu-overflow'></div>");

		jQuery(".menu-overflow").click(function () {
			jQuery(this).fadeOut("slow");
			jQuery(".main-menu").removeClass("pactive");
			jQuery("body").css("overflow-y", "auto");
		});

		jQuery(".phone-menu").click(function () {
			jQuery(".menu-overflow").fadeIn("slow");
			jQuery(".main-menu").addClass("pactive");
			jQuery("body").css("overflow-y", "hidden");
			return false;
		});

		startTimer();

	});


	function lightboxclose(){
		jQuery(".lightbox").css('overflow', 'hidden');
		jQuery(".lightbox .lightcontent").fadeOut('fast');
		jQuery(".lightbox").fadeOut('slow');
		jQuery("body").css('overflow', 'auto');
	}


	function startTimer(){
		setInterval(function(){
		jQuery(".countdown-content .numbers").each(function (){
			var currentTime = jQuery(this).attr("rel");
			var seconds = new Date().getTime() / 1000;
			var seconds = Math.floor(seconds);
			if(currentTime > seconds){
				jQuery(this).html(secondsToString(currentTime-seconds));
			}else{
				jQuery(this).css("color", "#e62d24");
				jQuery(this).html("<span>00</span><span>00</span><span>00</span><span>00</span>");
			}
		})}, 1000);
	}

	function addZero(number){
		if(number.toString().length == 1){
			return "0"+number;
		}else{
			return number;
		}
	}

	function secondsToString(seconds)
	{
		// var numyears = Math.floor(seconds);
		var nummonths = Math.floor((seconds) / 2629800);
		var numweeks = Math.floor(((seconds) % 2629800) / 604800);
		var numdays = Math.floor((((seconds) % 2629800) % 604800) / 86400);
		var numhours = Math.floor(((((seconds) % 2629800) % 604800) % 86400) / 3600);
		var numminutes = Math.floor((((((seconds) % 2629800) % 604800) % 86400) % 3600) / 60);
		var numseconds = (((((seconds) % 2629800) % 604800) % 86400) % 3600) % 60;
		return "<span>" + addZero(nummonths) + "</span><span>" + addZero(numweeks) + "</span><span>" +  addZero(numdays) + "</span><span>" + addZero(numhours) + "</span>";
	}




	// Modal overlay block
	var ModalEffects = (function() {

		function init() {

			var overlay = document.querySelector( '.md-overlay' );

			[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

				var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
					close = modal.querySelector( '.md-close' );

				function removeModal( hasPerspective ) {
					classie.remove( modal, 'md-show' );

					if( hasPerspective ) {
						classie.remove( document.documentElement, 'md-perspective' );
					}
				}

				function removeModalHandler() {
					removeModal( classie.has( el, 'md-setperspective' ) ); 
				}

				el.addEventListener( 'click', function( ev ) {
					classie.add( modal, 'md-show' );
					overlay.removeEventListener( 'click', removeModalHandler );
					overlay.addEventListener( 'click', removeModalHandler );


					jQuery('.md-modal').children(".md-content").children("div").html(jQuery('.' + el.getAttribute( 'data-content' )).parent().html());
					// console.log(jQuery('.md-modal').children(".md-content").children("div").html(jQuery('.' + el.getAttribute( 'data-content' )).parent().html()));

					if( classie.has( el, 'md-setperspective' ) ) {
						setTimeout( function() {
							classie.add( document.documentElement, 'md-perspective' );
						}, 25 );
					}
				});

				close.addEventListener( 'click', function( ev ) {
					ev.stopPropagation();
					removeModalHandler();
				});

			} );

		}

		init();

	})();
})(jQuery);