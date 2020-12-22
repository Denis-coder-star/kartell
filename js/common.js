document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    body.classList.add('lock');
    }
    }, 1000);
 }

$(document).ready(function(){
  $('.menu__link:first-child').click(function(){
    $('.case-arrow').toggleClass('case-arrow-active');
    $('.case-down').toggleClass('case-down-active');
  });
});

$(document).ready(function(){
  $('.burger-menu').click(function(){
    $('.menu-back').toggleClass('menu-back-active');
    $('.menu').toggleClass('menu-active');
  });
});

$(document).ready(function(){
  $('.offer-btn').hover(function(){
    $('.offer-btn img:first-child').toggleClass('img-pass');
    $('.offer-btn img:last-child').toggleClass('img-active');
  });
});

$(document).ready(function(){
  $('.welcome-btn').hover(function(){
    $('.welcome-btn img:first-child').toggleClass('img-pass');
    $('.welcome-btn img:last-child').toggleClass('img-active');
  });
});

$('.new-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  arrows: true,
  dots: true,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
   ],
});

$('.reviews-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
   ],
});

$('.articles-body').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
   ],
});


