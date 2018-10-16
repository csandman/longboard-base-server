const express = require("express");
const router = express.Router();

// Item Model
const Deck = require("../../models/Deck");

// @route  GET api/decks
// @desc   Get all decks
// @access Public
router.get("/", (req, res) => {
  Deck.find()
    .sort({ deckName: 1 })
    .then(decks => res.json(decks));
});

// @route  POST api/decks
// @desc   Add a deck
// @access Public
router.post("/", (req, res) => {
  const newDeck = new Deck({
    deckName: req.body.deckName
  });

  newDeck.save().then(deck => res.json(deck));
});

// @route  DELETE api/decks
// @desc   Delete a deck
// @access Public
router.delete("/:id", (req, res) => {
  Deck.findById(req.params.id)
    .then(deck => deck.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
