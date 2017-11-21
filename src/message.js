const moment = require('moment');

const recastBot = require('./bot');
const movieApi = require('./movieApi.js');
const constants = require('./constants');

function onNewMessage(message) {
  const text = message.content;
  const senderId = message.senderId;
  console.log('The bot received: ', text);

  return recastBot.request
    .converseText(text, { conversationToken: senderId })
    .then(function(conversation) {

    return startMovieFlow(message, conversation);

    })
    .catch(function(err) {
      console.error('Recast::request::converseText error: ', err);
    });
}

function startMovieFlow(message, conversation) {
  const genre = conversation.entities.genre;

	console.log(genre);
	const genreId = constants.getGenreId(genre[0].value);


  return movieApi
    .discoverMovie(genreId)
    .then(function(carouselle) {
      return message.reply(carouselle);
    })
    .catch(function(err) {
      console.error('movieApi::discoverMovie error: ', err);
    });
}

module.exports = onNewMessage;
