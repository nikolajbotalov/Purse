const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  balanceName: { type: String, required: true },
  balance: { type: String, required: true },
  user: { type: Types.ObjectId, ref: 'Users' },
});

module.exports = model('SourceBalance', schema);
