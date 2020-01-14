const express = require('express');
const router = express.Router();
const Translation = require('../../models/Translation');

//Get all translations
router.get('/', async (req, res) => {
  try {
    const translation = await Translation.find();
    res.json(translation);
  } catch (err) {
    console.error(err);
    res.json({ message: err });
  }
});

//Submit a translation
router.post('/', async (req, res) => {
  const translation = new Translation({
    english: req.body.english,
    german: req.body.german
  });
  try {
    const savedTranslation = await translation.save();
    res.json(savedTranslation);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get specific translation
router.get('/:translationId', async (req, res) => {
  try {
    const translation = await Translation.findById(req.params.translationId);
    res.json(translation);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
