//- - - - - - - - - - - - - - - - - - - - - -             inputmask             - - - - - - - - - - - - - - - - - - - - - -
$(document).ready(function(){
	$(function() {
	    $.mask.definitions['~'] = "[+-]";
	    $("input[type='tel'").mask("+38 (999) 999-9999");
	});

		//- - - - - - - - - - - - - - - - - - - - - -             menu scroll             - - - - - - - - - - - - - - - - - - - - - -
		$('.smooth-scroll').on('click',function(){
			$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-0},800);
			return false;
		});

		//- - - - - - - - - - - - - - - - - - - - - -             menu scroll             - - - - - - - - - - - - - - - - - - - - - -
		// function setNavCurrentSection(){
		// 	var s_top = $(document).scrollTop();
		// 	var w_hgh = $(window).innerHeight();
		// 	var b_hgh = $('.wrapper').outerHeight();
		// 	var cur_sect = $('.section-menu li a.curNavBtn').eq(0);
		// 	$('.section-menu li a.curNavBtn').each(function(){
		// 		if((w_hgh / 10 + s_top) > $($(this).attr('href')).offset().top){
		// 			cur_sect = $(this);
		// 		}
		// 	});
		// 	if((s_top + w_hgh + 200) > b_hgh){
		// 		cur_sect = $('.section-menu li a.curNavBtn').last();
		// 	}
		// 	if(!cur_sect.hasClass('active')){
		// 		$('.section-menu li a.curNavBtn.active').removeClass('active');
		// 		cur_sect.addClass('active');
		// 	}
		// }
		// setNavCurrentSection();
		// $(window).on('load',function(){
		// 	setNavCurrentSection();
		// });
		// $(window).resize(function(){
		// 	setNavCurrentSection();
		// });
		// $(document).on('scroll',function(){
		// 	setNavCurrentSection();
		// });




	$(".resultsSlider").slick({
        dots: false,
        rows:2,
        arrows:false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4
      });
	$(".companySlider").slick({
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4
      });
	$(".videoSlider").slick({
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });


	
// $("[data-fancybox]").fancybox({
// 	iframe : {
// 		css : {
// 			width : '600px'
// 		}
// 	}
// });

  $('.read_more').on('click',function(){
    if($('html,body').find('.work_content').css("height") =="96px")
        $('.work_content').animate({height: "100%"});
    else
         $('.work_content').animate({height: "96px"});
    });

	$('.work_content').on('click',function(){
         $('.work_content').animate({height: "96px"});
    });


	//                                                     /*MOBILE-NAV*/

		$('.mobile').on('click', function(){ 
		  if($(this).find('.mobile-header-nav').is(':visible')) 
		    	$(this).find('.mobile-header-nav').css('display','none'); 
		  else 
		    $(this).find('.mobile-header-nav').css('display','block');  
	  });
	     $('.mobile').mouseleave(function() {
	      $('.mobile-header-nav').css('display','none');
	    })


	 $('#video_0').magnificPopup({
	    items: {
	        src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556367432847'
	    },
	    type: 'iframe'
	});


	$('#video_1').magnificPopup({
	    items: {
	        src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556367432847'
	    },
	    type: 'iframe'
	});

	$('#video_2').magnificPopup({
	    items: {
	        src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556282892847'
	    },
	    type: 'iframe'
	});


	$('#video_3').magnificPopup({
	    items: {
	    src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154603410842847'  },
	    type: 'iframe'
	});

	$('#video_4').magnificPopup({
	    items: {
	    src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154582395637847'  },
	    type: 'iframe'
	});

	$('#video_5').magnificPopup({
	    items: {
	    src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556282892847'  },
	    type: 'iframe'
	});
	$('#video_6').magnificPopup({
	    items: {
	    src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556367432847'  },
	    type: 'iframe'
	});
	$('#video_7').magnificPopup({
	    items: {
	    src: 'https://www.facebook.com/v2.5/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D10154556367432847'  },
	    type: 'iframe'
	});

});


