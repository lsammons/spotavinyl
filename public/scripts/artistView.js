(function(module){
  var artistView = {};
  artistView.index = function(artists) {
    $('#results').show().siblings().hide();
    $('#results-tab').addClass('active').siblings().removeClass('active');
    $('#buy h1').hide();
    $('#buy .byline').hide();
    $('#backButton').hide();
    //page('/results' + '/refresh');
  };



  module.artistView = artistView;
})(window);
