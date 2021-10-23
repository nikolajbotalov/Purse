const { Schema, model } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  currentBalance: { type: Number, default: 0 },
});

module.exports = model('User', schema);
