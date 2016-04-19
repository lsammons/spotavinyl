(function(module) {
  var resultsController = {};

  resultsController.index = function() {
    $('#homepage, #about').hide();
    $('#results').fadeIn();
  };

  module.resultsController = resultsController;
})(window);
