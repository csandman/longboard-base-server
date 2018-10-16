const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DeckSchema = new Schema({
  deckName: {
    type: String,
    required: true
  },
  fileName: {
    type: String
  },
  brand: {
    type: String
  },
  construction: {
    type: String
  },
  deckShape: {
    type: String
  },
  youtubeLink: {
    type: String
  },
  length: {
    type: Number
  },
  width: {
    type: Number
  },
  wheelbaseMin: {
    type: Number
  },
  wheelbaseMax: {
    type: Number
  }
});

module.exports = Deck = mongoose.model('deck', DeckSchema);