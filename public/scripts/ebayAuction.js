(function(module){
  var auction = {};
  auction.all=[];

  auction.getAuction = function() {
    for (var i = 0; i < artist.all.length; i++) {
      // this regex replaces white space with '%20' which is needed for url to work
      artist.all[i].name = artist.all[i].name.replace(/\s+/g, '%20');
      var url = "http://svcs.ebay.com/services/search/FindingService/v1";
          url += "?OPERATION-NAME=findItemsAdvanced";
          url += "&categoryId=176985";
          url += "&SERVICE-VERSION=1.0.0";
          url += "&SECURITY-APPNAME=LauraSam-Code301-PRD-1e805b329-262cd85d";
          url += "&GLOBAL-ID=EBAY-US";
          url += "&RESPONSE-DATA-FORMAT=JSON";
          url += "&callback=_cb_findItemsAdvanced";
          url += "&REST-PAYLOAD";
          url += "&keywords=" + artist.all[i].name + "";
          url += "&paginationInput.entriesPerPage=5";
          url += "&categoryId=176985";
          url += urlfilter;
          //s.src= url;
          s=document.createElement('script'); // create script element
          s.src= url;
          auction.all.push(s);
    }
  }

  //console.log("at end of ebayAuctions module.");
  module.auction = auction;
})(window);
