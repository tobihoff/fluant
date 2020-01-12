const express = require('express');
const router = express.Router();
const Translation = require('../../models/Translation');

//Get all translations
router.get('/', async (req, res) => {
  try {
    const translation = await Translation.find();
    res.json(translation);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a post
router.post('/', async (req, res) => {
  const translation = new Translation({
    voca: [
      {
        english: req.body.english,
        german: req.body.german
      }
    ]
  });
  try {
    const savedTranslation = await translation.save();
    res.json(savedTranslation);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get specific Post
router.get('/:postId', async (req, res) => {
  try {
    const translation = await Translation.findById(req.params.postId);
    res.json(translation);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
