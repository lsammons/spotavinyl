(function(module) {
  var resultsController = {};

  resultsController.index = function() {
    $('#homepage, #about').hide();
    $('#results').fadeIn();
    $('.results').addClass('active');
    $('.homepage, .about').removeClass('active');
  };

  module.resultsController = resultsController;
})(window);
