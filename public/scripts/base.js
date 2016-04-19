//*************************************************
// JS for background image and making it responsive
//*************************************************

$.backstretch('/images/header-bg.jpg');

//************************************
//jQuery for the nav button highlights
//************************************

$('.homepage').click(function(e) {
  e.preventDefault();
  $(this).addClass('active');
  $('.about').removeClass('active');
});

$('.about').click(function(e) {
  e.preventDefault();
  $(this).addClass('active');
  $('.homepage').removeClass('active');
});

//***************************
// JS for the artist carousel
//***************************

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
