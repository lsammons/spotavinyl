<<<<<<< HEAD
//For responsive background image
$.backstretch('/images/header-bg.jpg');

//For navigation menu buttons
$('.homepage').click(function(e) {
=======
//*************************************************
// JS for background image and making it responsive
//*************************************************

$.backstretch('/images/header-bg.jpg');

//************************************
//jQuery for the nav button highlights
//************************************

$('.homepage').click(function(e) {
  e.preventDefault();
>>>>>>> 87d4a7ab7e6305d60fc9193a76f3c272c43e1a33
  $(this).addClass('active');
  $('.about').removeClass('active');
});

$('.about').click(function(e) {
<<<<<<< HEAD
=======
  e.preventDefault();
>>>>>>> 87d4a7ab7e6305d60fc9193a76f3c272c43e1a33
  $(this).addClass('active');
  $('.homepage').removeClass('active');
});

<<<<<<< HEAD

//Carousel JS stuff
=======
//***************************
// JS for the artist carousel
//***************************

>>>>>>> 87d4a7ab7e6305d60fc9193a76f3c272c43e1a33
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
