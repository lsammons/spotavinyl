(function(module) {
    spotify = {};
    spotify.getAccessToken = function() {
        console.log('Being Called');

        function getHashParams() {
            console.log('Hash');
            var hashParams = {};
            var e, r = /([^&;=]+)=?([^&;]*)/g,
                q = window.location.hash.substring(1);
            while (e = r.exec(q)) {
                hashParams[e[1]] = decodeURIComponent(e[2]);
            }
            return hashParams;
        }
        var params = getHashParams();
        localStorage.setItem('access_token', params.access_token);
        return params.access_token

    }
    module.spotify = spotify;
})(window);
