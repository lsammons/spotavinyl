//For responsive background image
$.backstretch('/images/header-bg.jpg');

//For navigation menu buttons
$('#homepage').click(function(e) {
  e.preventDefault();
  $(this).addClass('active');
  $('#about').removeClass('active');
});

$('#about').click(function(e) {
  e.preventDefault();
  $(this).addClass('active');
  $('#homepage').removeClass('active');
});


//Carousel JS stuff
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
