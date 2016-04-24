(function(module) {
  var resultsController = {};
  resultsController.index = function() {
    artist.getArtists();
    artistView.index();
  };
  module.resultsController = resultsController;
})(window);
