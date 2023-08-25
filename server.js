require('dotenv').config();
const axios = require('axios');
const querystring = require('querystring');
const express = require('express');

const app = express();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.listen(8888, () => {
  console.log('Listening on port 8888')
});

function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; ++i) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const stateKey = 'spotify_auth_state';

// route that redirects the user to the Spotify authorization page
app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = 'user-read-private user-read-email user-follow-read';

  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

// route that handles the callback from the Spotify authorization page
app.get('/callback', (req, res) => {
  const code = req.query.code || null;

  axios({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    .then(response => {
      if (response.status === 200) {

        const { access_token, token_type } = response.data;

        res.redirect('http://localhost:3000');

        /*
        axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `${token_type} ${access_token}`
          }
        })
          .then(response => {
            res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
          })
          .catch(error => {
            res.send(error);
          });
        */

      } else {
        res.send(response);
      }
    })
    .catch(error => {
      res.send(error);
    });
});

// route that handles requesting a new access token using our refresh token
app.get('/refresh_token', (req, res) => {
  const { refresh_token } = req.query;

  axios({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
});

app.get('/user_profile', (req, res) => {
  console.log("You got here!");
  axios.get('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `${token_type} ${access_token}`
    }
  })
    .then(response => {
      //res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    });
})