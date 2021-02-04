/// 메인 페이지 JS - main.js ////
var mob = 0; //0-데스크탑, 1-모바일
$(function (e) { ///////////////// JQB //////////////////////
  console.log('실행');

  if ($(window).width() <= 768) mob = 1
  console.log("현재 상태" + mob);

  // 모바일일때 스와이퍼 넣기
  if (mob) {
    $(".scroll_wrap").addClass("swiper-container").append("<div class='swiper-button-next'></div><div class='swiper-button-prev'></div>");
    $(".scroll_area").addClass("swiper-wrapper");
    $(".scroll_area img, .scroll_area .video_wrap").addClass("swiper-slide")

    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });



  } /////////// 모바일 ㅠㅠ ////////////

  // 위치갭(이전,이후)
  var gap = 500;

  ////// scroll 셋팅 ///////////
  $(window).scroll(function () {
      var scTop = $(this).scrollTop();
      //console.log("스위:" + scTop);

      // 왼쪽 높이 구하기
      var lpos = $(".left_cont").height();
      //console.log(lpos);

      // 왼쪽 기준선 액션 ///
      if (scTop > lpos - gap ) {
          $(".right_cont").css({
              position: "absolute",
              top: $(".right_cont").offset().top + "px"
          }); //////// css ////////////
      } /////// if ///////////
      else {
          $(".right_cont").attr("style", ""); //////// css ////////////
      }
  }); /////////// 스크롤 ////////////

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // 사이즈 클릭
  $('.sel_size span').click(function () {
    $('.sel_size span').removeClass('active');
    $(this).addClass('active');
  }); //////// click //////////


  // 하단 배송정보 탭메뉴
  $('.more_info li').click(function () {
    $('.more_info li').removeClass('active');
    $(this).addClass('active');

    var click_num = $(this).index();
    console.log(click_num);

    $('.more_info_sub li').removeClass('active');
    $('.more_info_sub li:nth-child(' + (click_num + 1) + ')').addClass('active');

  }); //////// click //////////

}); ///////////////// JQB //////////////////////