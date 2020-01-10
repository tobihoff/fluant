const mongoose = require('mongoose');

const TranslationSchema = mongoose.Schema({
  vocabulary: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Translation', TranslationSchema);
