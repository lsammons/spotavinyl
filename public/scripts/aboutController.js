(function(module) {
  var aboutController = {};

  aboutController.index = function() {
<<<<<<< HEAD
    $('#homepage, #results').hide();
    $('#about').fadeIn();
=======
    console.log('it\'s working');
    $('#homepage').hide();
    $('.about').show();
>>>>>>> 87d4a7ab7e6305d60fc9193a76f3c272c43e1a33
  };

  module.aboutController = aboutController;
})(window);
