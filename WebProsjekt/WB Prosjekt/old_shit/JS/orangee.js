/*
	by: © Agne Ødegaard
*/

$(function() {
	//fullScreen for div!
	var width = $(window).width();
	var height = $(window).height();
	function jqUpdateSize() {
	   $("[class*=fullScreen]").css("height", (height - 10) + "px");
	   width = $(window).width();
	   height = $(window).height();
	};
	
	jqUpdateSize()
	var resizeTimer;
	$(window).resize(function() {
	    clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(jqUpdateSize, 0);
	});
	
	//ScrollingParralex
		$(window).scroll(function () {
			if (width >= 1080) {
				$(".parallex").css("background-position", "center " + $(window).scrollTop() * 1.7 * .4 + "px");
			} else {
				$(".parallex").css("background-position", "center center");
			}
		});
		
	
	//#autoScroll
	var scrollFrom = 0; 
	$('a[href*=#]').click(function(e){
	    scrollFrom = $(window).scrollTop();
	    $(window).scrollTop(scrollFrom);
	    var target = '#' + $(this).attr("href").replace(/#/,'');
	    if ($(this).attr("href") != "#myCarousel") {
		    $('html,body').animate({
		        scrollTop: $(target).offset().top // modification
		    },{
		     duration: 1000,
		     easing: 'swing'
		    });
		     return false; 	
	    }
	});
});
