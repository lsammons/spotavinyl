(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#homepage, #results').hide();
    $('#about').fadeIn();
    $('.about').addClass('active');
    $('.homepage, .results').removeClass('active');
  
  };

  module.aboutController = aboutController;
})(window);
