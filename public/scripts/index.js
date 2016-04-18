(function(module) {
  var indexController = {};

  // Also be sure to hide all the main section elements, and reveal the #articles section:
  indexController.index = function() {
    $('.title').hide();
    $('#homepage').fadeIn();
  };


  module.indexController = indexController;
})(window);
