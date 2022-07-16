jQuery(function($) {
	// add list_partners
	if( $('.list_partners').length > 0 ){
		$('.list_partners').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    navText:['<i class="icons-left-open"></i>','<i class="icons-right-open"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:6
		        }
		    }
		});
	}

	// add event click popup register
	if( $('.button-form').length > 0 ){
		$('.button-form').click(function () {
			$('.form-fixed').toggleClass("active");
		});
	}

	// add event click close popup register
	if( $('.form-fixed .closed').length > 0 ){
		$('.form-fixed .closed').click(function () {
			$('.form-fixed').removeClass("active");
		});
	}
});