(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#homepage, #results').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
