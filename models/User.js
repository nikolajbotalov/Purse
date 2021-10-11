const { Schema, model } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
});

module.exports = model('User', schema);
