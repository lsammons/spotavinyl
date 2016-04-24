(function(module){
  var indexView = {};
  indexView.index = function() {
    $('#homepage').show().siblings().hide();
    $('#homepage-tab').addClass('active');
    $('#about-tab, #results-tab').removeClass('active');
  };
  module.indexView = indexView;
})(window);
