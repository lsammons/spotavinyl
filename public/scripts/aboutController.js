(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    console.log('it\'s working');
    $('#homepage').hide();
    $('.about').show();
  };

  module.aboutController = aboutController;
})(window);
