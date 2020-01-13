const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Dictonary = require('../../models/Dictonary');
const { ObjectID } = require('mongodb');

router.post('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    const vocabulary = new Dictonary({
      vocabulary: req.body.vocabulary,
      name: user.name,
      user: req.user.id
    });
    const post = await vocabulary.save();
    res.json(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server mistake');
  }
});

//Get all dictonary posts
router.get('/:id', auth, async (req, res) => {
  try {
    const userId = new ObjectID(req.params.id);
    const query = userId ? { user: userId } : {};
    const posts = await Dictonary.find(query);
    console.log(posts);
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server mistake');
  }
});

//Delete
router.delete('/:id', auth, async (req, res) => {
  try {
    const userId = new ObjectID(req.params.id);
    const query = userId ? { _id: userId } : {};
    await Dictonary.findOneAndRemove(query);
    console.log(query);
    res.json({ msg: 'Vocabulary removed' });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server mistake');
  }
});

module.exports = router;
