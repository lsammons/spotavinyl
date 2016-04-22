(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#homepage, #results').hide();
    $('#about').fadeIn();
    $('#about-tab').addClass('active');
    $('#homepage-tab, #results-tab').removeClass('active');

  };

  module.aboutController = aboutController;
})(window);
