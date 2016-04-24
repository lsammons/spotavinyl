(function(module){
  var artist = {};
  artist.all=[];
  var artistTemplate = Handlebars.compile($('#artist-template').html());
  artist.getArtists = function(callback) {

  $.ajax({
    url: 'https://api.spotify.com/v1/me/top/artists?limit=10',
    headers: {
      'Authorization': 'Bearer ' + spotify.getAccessToken()
    },
    success: function(response) {
      var arr = response.items;

      artist.all = arr.map(function(item, index){

        if (item.images.length === 0) {
          return {id: index,
                name:item.name,
                image_url:'http://lorempixel.com/100/100'};
        }else {
          return {id:index,
                  name:item.name,
                  image_url:item.images[0].url};
        }

      });
      artist.all.forEach(function(artist) {
      $('.artistButtons').append(artistTemplate(artist))//.wrapInner('<a href="#ebay"></a>');
      });


  }
})
.done(function() {
  // kick off getAuction function in ebayAuction.js
  auction.getAuction();
  auctionView.buttonClick();
  // click on spotify artist button will show auction data at bottom of page

})

};
  //console.log("at end of spotifyArtist module.");
  module.artist = artist;
})(window);
