const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Avoiding the same email address
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now //Automatically the current date and time
  }
});

module.exports = User = mongoose.model('user', UserSchema);
