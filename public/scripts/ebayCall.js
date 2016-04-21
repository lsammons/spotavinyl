// Parse the response and build an HTML table to display search results
function _cb_findItemsByKeywords(root) {
  var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
  var html = [];
  html.push('<table width="75%" border="0" cellspacing="0" cellpadding="3" style="background-color: white; margin-top: 100px;" id="ebayTable"><tbody>');
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
  //document.getElementById("results").innerHTML = html.join("");
  $('#ebay').append(html.join(""));
}  // End _cb_findItemsByKeywords() function

// Create a JavaScript array of the item filters you want to use in your request
var filterarray = [
  {"name":"MaxPrice",
   "value":"25",
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



// Construct the request has been moved into ebayAuction.js
// creates unique url for each artist as they pass through a for loop
// Replaced with our Production AppID in string
var url; //


// Submit the request
// s=document.createElement('script'); // create script element
// s.src= url;


// get data from clicked element, from data-dash attribute
// $('button').click(function(e) {
//   //e.preventDefault();
//   //console.log(data-id);
//
//   console.log("this is working for all the button");
//     //document.body.appendChild(s);
// });

// $('button').attr('data-id')click(function(){

// val = $(this).attr('data-category');
//         optionTag = '<option value="' + val + '">' + val + '</option>';
//         if ($('#category-filter option[value="' + val + '"]').length === 0) {
//           $('#category-filter').append(optionTag);
//         }
//
// $('#0').click(function(){
//   console.log();
//   console.log("Click happened on test 0");
//     document.body.appendChild(s);
// });

// Display the request as a clickable link for testing
//document.write("<a href=\"" + url + "\">" + url + "</a>");
console.log("At end of ebayCall");
