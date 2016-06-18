
$(document).ready(function(){

	var menu = function(){
			$('.page-nav__icon').click(function(){
				$('.page-nav__list').slideToggle();
			})
	}

	menu();

	$(window).resize(function(){
		if ($(window).width()>991){
			$('.page-nav__list').show();
		} else {
			//$('.page-nav__list').hide();
		}
	})
})