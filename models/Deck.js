const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DeckSchema = new Schema({
  deckName: {
    type: String,
    required: true
  },
  fileName: String,
  brand: String,
  youtubeLink: String,
  specs: {
    construction: String,
    shape: String,
    length: Number,
    width: Number,
    wheelbase: {
      min: Number,
      max: Number
    }
  }
});

module.exports = Deck = mongoose.model('deck', DeckSchema);