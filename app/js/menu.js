// document.addEventListener('DOMContentLoaded', function () {

// 	var icon = document.querySelector('.page-nav__icon');
// 	var menu = document.querySelector('.page-nav__list');
// 	resize();

// 	icon.addEventListener('click', function () {
// 		menu.classList.toggle('hidden');
// 	});

// 	// document.addEventListener('click', function (event){
// 	// 	if (event.target.closest('.page-nav__icon') == null){
// 	// 		menu.classList.add('hidden');
// 	// 	}
// 	// });

// 	function resize() { 
//     var ww = window.innerWidth;
//     if (ww>991){
//     	menu.classList.remove('hidden');
//     	icon.classList.add('hidden');
//     }
//     else{
//     	menu.classList.add('hidden');
//     	icon.classList.remove('hidden');
//     }
//   }

//   window.onresize = resize;

// });

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
			$('.page-nav__list').hide();
		}
	})
})