const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const decks = require("./routes/api/decks");

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = require("./config/keys").MONGO_URI;

// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/decks", decks);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('longboard-base-web/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'longboard-base-web', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
