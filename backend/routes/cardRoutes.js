const router = require("express").Router();
const Card = require("../models/cardModel");

router.post("/", async (req, res) => {
  const {
    title,
    year,
    img,
    description,
    githubURL,
    netlifyURL,
    featured,
  } = req.body;

  const newCard = new Card({
    title,
    year,
    img,
    description,
    githubURL,
    netlifyURL,
    featured,
  });

  try {
    const savedCard = await newCard.save();
    res.json(savedCard);
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

router.get("/featured", async (req, res) => {
  const cards = await Card.find({ featured: true });
  res.json(cards);
});

router.get("/other", async (req, res) => {
  const cards = await Card.find({ featured: false });
  res.json(cards);
});

module.exports = router;
