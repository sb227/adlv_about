/// 메인 페이지 JS - main.js ////

$(function (e) { ///////////////// JQB //////////////////////
    console.log('실행');

	var swiper = new Swiper('.swiper-container', {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});

	// 사이즈 클릭
	$('.sel_size span').click(function(){
		$('.sel_size span').removeClass('active');
		$(this).addClass('active');
	}); //////// click //////////


	// 하단 배송정보 탭메뉴
	$('.more_info li').click(function(){
		$('.more_info li').removeClass('active');
		$(this).addClass('active');

		var click_num = $(this).index();
		console.log(click_num);

		$('.more_info_sub li').removeClass('active');
		$('.more_info_sub li:nth-child('+(click_num+1)+')').addClass('active');

	}); //////// click //////////

	// 헤더 부분...
    $('.menu_btn').click(function () {
		console.log('dd')
		$('.mob_menu').addClass('active');
		$('.mob_bg').addClass('active');
		$('.close_btn').addClass('active');
		$('.lnb_mob').addClass('active');
		$('.gnb_mob').addClass('active');
	}); ///////// click /////////////

	$('.close_btn').click(function () {
		$('.mob_menu').removeClass('active');
		$('.lnb_mob').removeClass('active');
		$('.gnb_mob').removeClass('active');
	}); ///////// click ////////////
}); ///////////////// JQB //////////////////////

