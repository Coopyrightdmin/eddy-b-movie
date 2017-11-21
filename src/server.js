const express = require('express');
const bodyParser = require('body-parser');

// -- Recast.ai
const config = require('./config')
const recastai = require('recastai').default
const client = new recastai(config.REQUEST_TOKEN)

// -- API
const constants = require('./constants')
const movieApi = require('./movieApi.js');

// -- Express
const app = express();
const port = config.PORT || 5000;

app.set('port', port);
app.use(bodyParser.json());

app.post('/discover-movies', function(req, res) {
    console.log('[GET] /discover-movies');

    const genre = req.body.conversation.memory['genre'];
    const genreId = constants.getGenreId(genre.value);

    return movieApi.discoverMovie(genreId)
      .then(function(carousel) {
        res.json({
          replies: carousel,
        });
      })
      .catch(function(err) {
        console.error('movieApi::discoverMovie error: ', err);
      });
  });

app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
});