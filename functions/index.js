const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')({origin: true})

const app = express();

app.get('/admin', (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>Mergenholding admin page will be here!</p>
      <p>today is: ${date} </p>
    </body>
  </html>`);
});

app.get('/api', (req, res) => {
  const date = new Date();
  
  res.json({data: `json data goes like this ${date}`});
});

exports.app = functions.https.onRequest(app);


// (request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("ochiroo + Firebase!");
// }
