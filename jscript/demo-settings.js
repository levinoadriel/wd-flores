

jQuery(document).ready(function() {
	jQuery("body").append("<div class='demo-settings'></div>");
	jQuery(".demo-settings").append("<a href='#show-settings' class='demo-button'><i class='fa fa-gear'></i>Settings</a>");
	jQuery(".demo-settings").append("<div class='demo-options'>"+
										"<div class='title'>Demo Settings</div>"+
										"<a href='#demo' rel='font-options' class='option'><img src='images/demo/image-1.png' class='demo-icon' alt='' /><span>Font Settings</span><font>Change Fonts</font></a>"+
										"<div class='option-box' rel='font-options'>"+
											"<div alt='font-menu'>"+
												"<b class='sub-title'>Main Menu</b>"+
												"<a href='#' class='font-bulb active' style='font-family:\"Titillium Web\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Exo\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Signika Negative\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Fenix\", serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Text Me One\", sans-serif;'>Aa</a>"+
											"</div>"+
										"</div>"+
										"<div class='option-box sequal' rel='font-options'>"+
											"<div alt='font-options'>"+
												"<b class='sub-title'>Titles & Text</b>"+
												"<a href='#' class='font-bulb active' style='font-family:\"Droid Serif\", serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Exo\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Titillium Web\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Iceberg\", cursive;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Text Me One\", sans-serif;'>Aa</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='color-options' class='option'><img src='images/demo/image-2.png' class='demo-icon' alt='' /><span>Color Options</span><font>Color schemes</font></a>"+
										"<div class='option-box' rel='color-options'>"+
											"<div alt='color-options'>"+
												"<b class='sub-title'>Main Color Scheme</b>"+
												"<a href='#' class='color-bulb active' style='background: #5a394e;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #37576e;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #4a7534;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #843323;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #a95c1e;'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										// "<div class='option-box sequal' rel='color-options'>"+
										// 	"<div alt='content-background'>"+
										// 		"<b class='sub-title'>Content Background</b>"+
										// 		"<a href='#' class='color-bulb active' style='background: #f1f1f1;'>&nbsp;</a>"+
										// 		"<a href='#' class='color-bulb' style='background: #b2ebdd;'>&nbsp;</a>"+
										// 		"<a href='#' class='color-bulb' style='background: #ebbeb2;'>&nbsp;</a>"+
										// 		"<a href='#' class='color-bulb' style='background: #caebb2;'>&nbsp;</a>"+
										// 		"<a href='#' class='color-bulb' style='background: #b2beeb;'>&nbsp;</a>"+
										// 	"</div>"+
										// "</div>"+
										"<a href='#demo' rel='background' class='option'><img src='images/demo/image-3.png' class='demo-icon' alt='' /><span>Background</span><font>Backgorund textures</font></a>"+
										"<div class='option-box' rel='background'>"+
											"<div alt='background'>"+
												"<b class='sub-title'>Background Texture</b>"+
												"<a href='#' class='color-bulb active' style='background: #d0dedb url(images/background-texture.png);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #e1c7bf url(images/background-texture.png);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-1.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-2.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-4.jpg);'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='page-width' class='option'><img src='images/demo/image-4.png' class='demo-icon' alt='' /><span>Change Width</span><font>Boxed or Full-Width</font></a>"+
										"<div class='option-box' rel='page-width'>"+
											"<div alt='option-box'>"+
												"<b class='sub-title'>Switch Page Width</b>"+
												"<a href='#' class='option-bulb' rel='full'>Full-Width</a>"+
												"<a href='#' class='option-bulb active' rel='boxed'>Boxed-Width</a>"+
											"</div>"+
										"</div>"+
									"</div>");
	
	jQuery(".demo-settings a[href=#demo]").click(function(){
		var thiselem = jQuery(this);
		thiselem.parent().find("div[rel="+thiselem.attr("rel")+"]").toggle();
		return false;
	});
	
	jQuery(".option-box div .color-bulb").click(function(){
		var thiselem = jQuery(this);
		var newcolor = thiselem.css("background-color");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "color-options"){
			jQuery(".not-found-content a, .comment-block .user-nick, .comment-block .user-nick a, .pagination .page-numbers:not(.current), .article-date, h1, h2, h3, h4, h5, h6, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, .countdown > span, .countdown .countdown-content .numbers, #calendar_wrap caption, #calendar_wrap tfoot td a, .footer a").css("color", newcolor);
			jQuery("hr.style-4, .pagination .page-numbers.next:hover, .pagination .page-numbers.prev:hover, .pagination .page-numbers.current:hover, .pagination .page-numbers.current, .button, .ribbon-block, .main-menu, #calendar_wrap thead, #calendar_wrap table td#today, .md-overlay").css("background-color", newcolor);
			jQuery(".pagination .page-numbers.next, .pagination .page-numbers.prev").css("border", "1px solid "+newcolor);
		}else
		if(thiselem.parent().attr("alt") == "content-background"){
			jQuery(".break-corners, .border-boxes, .active.boxed, .boxed").css("background-color", newcolor);
		}

		return false;
	});
	
	jQuery(".option-box div .color-bulb").click(function(){
		var thiselem = jQuery(this);
		var newcolor = thiselem.css("background");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "background"){
			jQuery(".border-boxes > div, body").css("background", newcolor);
		}

		return false;
	});
	
	jQuery(".option-box div .font-bulb").click(function(){
		var thiselem = jQuery(this);
		var newfont = thiselem.css("font-family");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "font-options"){
			jQuery("h1, h2, h3, h4, h5, h6, p, .big-post .article-date, .title-block > span, .countdown, .footer ul").css("font-family", newfont);
		}else
		if(thiselem.parent().attr("alt") == "font-menu"){
			jQuery(".main-menu ul li a").css("font-family", newfont);
		}

		return false;
	});
	
	jQuery(".option-box div .option-bulb").click(function(){
		var thiselem = jQuery(this);
		var newsize = thiselem.attr("rel");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "option-box"){
			if(newsize == "boxed"){
				jQuery(".boxed").addClass("active");
			}else
			if(newsize == "full"){
				jQuery(".boxed").removeClass("active");
			}
		}

		return false;
	});
	
	jQuery(".demo-settings").mouseleave(function(){
		var thiselem = jQuery(this);
		thiselem.removeClass("active");
		return false;
	});
	
	jQuery(".demo-settings .demo-button").click(function(){
		jQuery(".demo-settings").addClass("active");
		return false;
	});
});

