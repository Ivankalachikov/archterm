$(document).ready(function(){
	var items=$('.stechn__item');
	var isShow=false;

	var showMore = function(){
		if ($(window).width()<991 && isShow==false){
			if ($('.stechn__all-items').hasClass('slick-initialized')){
				$('.stechn__all-items').slick('unslick');
			}
			$(items).each(function(i,item){
				if (i>3){
					$(this).hide();
				}
			});
			$('.showmore').remove();
			$('.stechn__all-items').append('<div class="showmore">смотреть еще</div>');
			$('.showmore').on('click', function(){
				$(items).each(function(i,item){
				console.log(this);
				if (i>3){
					$(this).slideDown(200);
				}
				$('.showmore').remove();
				isShow=true;
			});
			})
		}
	}

	$(window).resize(function(){
		if ($(window).width()>991){
			$('.showmore').remove();
			$('.stechn__all-items').slick({
				prevArrow: $('.stechn__prev'),
				nextArrow: $('.stechn__next'),
				slidesToShow: 3.2,
				slidesToScroll: 1,
				centerMode: true,
				responsive: [
				{
					breakpoint: 991,settings: "unslick"
				}
				]
			});
		} else {
			showMore();
		}
	})

showMore();

});


