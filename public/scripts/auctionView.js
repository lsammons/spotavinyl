// findItemsByCategory

// Parse the response and build an HTML table to display search results
// function _cb_findItemsByKeywords(root) {
//   var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
function _cb_findItemsAdvanced(root) {
  var items = root.findItemsAdvancedResponse[0].searchResult[0].item || [];
  var html = [];
  html.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody>');
  for (var i = 0; i < items.length; ++i) {
    var item     = items[i];
    var title    = item.title;
    var pic      = item.galleryURL;
    var viewitem = item.viewItemURL;
    if (null != title && null != viewitem) {
      html.push('<tr><td>' + '<img src="' + pic + '" border="0">' + '</td>' +
      '<td><a href="' + viewitem + '" target="_blank">' + title + '</a></td></tr>');
    }
  }
  html.push('</tbody></table>');
  document.getElementById("ebayResults").innerHTML = html.join("");
}  // End _cb_findItemsByKeywords() function

// Create a JavaScript array of the item filters you want to use in your request
var filterarray = [
  {"name":"MaxPrice",
   "value":"225",
   "paramName":"Currency",
   "paramValue":"USD"},
  {"name":"FreeShippingOnly",
   "value":"true",
   "paramName":"",
   "paramValue":""},
  {"name":"ListingType",
   "value":["AuctionWithBIN", "FixedPrice", "StoreInventory"],
   "paramName":"",
   "paramValue":""},
  ];


// Define global variable for the URL filter
var urlfilter = "";

// Generates an indexed URL snippet from the array of item filters
function  buildURLArray() {
  // Iterate through each filter in the array
  for(var i=0; i<filterarray.length; i++) {
    //Index each item filter in filterarray
    var itemfilter = filterarray[i];
    // Iterate through each parameter in each item filter
    for(var index in itemfilter) {
      // Check to see if the paramter has a value (some don't)
      if (itemfilter[index] !== "") {
        if (itemfilter[index] instanceof Array) {
          for(var r=0; r<itemfilter[index].length; r++) {
          var value = itemfilter[index][r];
          urlfilter += "&itemFilter\(" + i + "\)." + index + "\(" + r + "\)=" + value ;
          }
        }
        else {
          urlfilter += "&itemFilter\(" + i + "\)." + index + "=" + itemfilter[index];
        }
      }
    }
  }
}  // End buildURLArray() function

// Execute the function to build the URL filter
buildURLArray(filterarray);

// Construct the request
// Replace MyAppID with your Production AppID
// var url = "http://svcs.ebay.com/services/search/FindingService/v1";
//     url += "?OPERATION-NAME=findItemsByKeywords";
//     url += "&SERVICE-VERSION=1.0.0";
//     url += "&SECURITY-APPNAME=LauraSam-Code301-PRD-1e805b329-262cd85d";
//     url += "&GLOBAL-ID=EBAY-US";
//     url += "&RESPONSE-DATA-FORMAT=JSON";
//     url += "&callback=_cb_findItemsByKeywords";
//     url += "&REST-PAYLOAD";
//     url += "&keywords=justin%20timberlake";
//     url += "&paginationInput.entriesPerPage=10";
//     url += urlfilter;

// var url = "http://svcs.ebay.com/services/search/FindingService/v1";
//     url += "?OPERATION-NAME=findItemsByCategory";
//     url += "&SERVICE-VERSION=1.0.0";
//     url += "&SECURITY-APPNAME=LauraSam-Code301-PRD-1e805b329-262cd85d";
//     url += "&GLOBAL-ID=EBAY-US";
//     url += "&RESPONSE-DATA-FORMAT=JSON";
//     url += "&callback=_cb_findItemsByCategory";
//     url += "&REST-PAYLOAD";
//     url += "&categoryId=176985";
//     url += "&paginationInput.entriesPerPage=20";
//     url += urlfilter;

var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsAdvanced";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=LauraSam-Code301-PRD-1e805b329-262cd85d";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=_cb_findItemsAdvanced";
    url += "&itemFilter.name=ListingType&itemFilter.value=Auction";
    url += "&REST-PAYLOAD";
    url += "&paginationInput.entriesPerPage=15";
    url += "&keywords=metallica";
    url += "&categoryId=176985";
    url += "&descriptionSearch=true";
    // url += urlfilter;
    //

// Submit the request
s=document.createElement('script'); // create script element
s.src= url;

// $( "#theClick" ).click(function() {
//   alert( "Handler for .click() called." );
// });

$( "#theClick" ).click(function() {
  document.body.appendChild(s);
});


// Display the request as a clickable link for testing
//document.write("<a href=\"" + url + "\">" + url + "</a>");
