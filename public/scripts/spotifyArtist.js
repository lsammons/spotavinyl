(function(module){
  var artist = {};
  artist.all=[];
  var artistTemplate = Handlebars.compile($('#artist-template').html());
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

        $('.artistButtons').append(artistTemplate(artist));
      });

      $('#login').hide();
      $('#loggedin').show();
    }
  }).done(function() {
  auction.getAuction();
  $('button').click(function(e) {
    //e.preventDefault();
    //console.log(data-id);
    console.log("this is working for all the buttons");
    console.log(auction.all[$(this).data("id")]);
      document.body.appendChild(auction.all[$(this).data("id")]);
  });
});
  console.log("at end of spotifyArtist module.");
  module.artist = artist;
})(window);
