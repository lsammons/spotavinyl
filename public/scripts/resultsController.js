(function(module) {
  var resultsController = {};

  resultsController.index = function() {
    $('#homepage, #about').hide();
    $('#results').fadeIn();
    $('#results-tab').addClass('active');
    $('#homepage-tab, #about-tab').removeClass('active');
  };

  module.resultsController = resultsController;
})(window);
