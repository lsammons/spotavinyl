(function(module) {
  spotify = {};
  spotify.getAccessToken = function() {
    function getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }
    //
    // if(localStorage.hasOwnProperty('access_token') === false) {
    //   console.log('false');
    var params = getHashParams();
    localStorage.setItem('access_token', params.access_token);
    localStorage.setItem('refresh_token', params.refresh_token);
    if((localStorage.getItem('access_token')) === params.access_token) {
    
      return params.access_token;
    }
    // }else if(localStorage.getItem('access_token') === params.access_token) {
    //   console.log('true');
    //   return params.access_token;
    // } else {
    //   localStorage.setItem('refresh_token', params.refresh_token);
    //   return params.refresh_token;
  };


  module.spotify = spotify;
})(window);
