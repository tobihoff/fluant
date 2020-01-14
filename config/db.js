const mongoose = require('mongoose');
const config = require('config');
const db = process.env.DB_URL || config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  } catch (err) {
    console.error('MongoDB error', err);
    throw err;
  }
};

module.exports = connectDB;
