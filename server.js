var express = require('express');
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 8888;

var client_id = clientId; // Your client id
var client_secret = clientSecret; // Your client secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
    .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  var scope = 'user-top-read user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }));
});

app.get('/callback', function(req, res) {

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
          querystring.stringify({
            error: 'state_mismatch'
          }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
          refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me/top/artists?limit=10',
          headers: {
            'Authorization': 'Bearer ' + access_token
          },
          json: true
        };

              // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

              // we can also pass the token to the browser to make requests from there
        res.redirect('/results#' +
                  querystring.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token
                  }));
      } else {
        res.redirect('/#' +
                  querystring.stringify({
                    error: 'invalid_token'
                  }));
      }
    });
  }
});

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('public/index.html', { root: '.'});
});

app.listen(port, function() {
  console.log('Server running on port: ' + port);
});
