const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Dictonary = require('../../models/Dictonary');

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
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Dictonary.find();
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server mistake');
  }
});

//Get users(id) posts
router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Dictonary.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Can not find vocabulars' });
    }

    res.json(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server mistake');
  }
});

//Delete
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Dictonary.findById(req.params.id);
    if (post.user.toString() !== req.user.id) {
      return res.json({ msg: 'User dont match' });
    }
    await post.remove();
    res.json({ msg: 'Vocabulary removed' });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server mistake');
  }
});

module.exports = router;
