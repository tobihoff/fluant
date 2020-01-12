const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DictonarySchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  vocabulary: []
});

module.exports = mongoose.model('Dictonary', DictonarySchema);
