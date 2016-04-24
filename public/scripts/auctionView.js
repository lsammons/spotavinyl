(function(module){
  var auctionView = {};
  auctionView.buttonClick = function(){
    $('button').click(function(e) {
      // remove the previous ebay auction results before displaying new
      $('button').removeClass('clicked');
      $(this).addClass('clicked');
      $('#buy h1').show();
      $('#buy .byline').show();
      //$('#backButton').show();
      $('#ebayTable').remove();
      // append ebay results to bottom of page
      document.body.appendChild(auction.all[$(this).data("id")]);

    });

  }
  module.auctionView = auctionView
})(window);
