const mongoose = require('mongoose');

const TranslationSchema = mongoose.Schema({
  voca: [
    {
      german: {
        type: String,
        required: true
      }
    },
    {
      english: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('Translation', TranslationSchema);
