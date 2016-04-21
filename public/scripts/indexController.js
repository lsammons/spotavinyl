(function(module) {
  var indexController = {};

    // Also be sure to hide all the main section elements, and reveal the #articles section:
  indexController.index = function() {
    $('#results, #about').hide();
    $('#homepage').fadeIn();
    $('.homepage').addClass('active');
    $('.about, .results').removeClass('active');
    
  };

  module.indexController = indexController;
})(window);
