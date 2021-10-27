const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  balanceName: { type: String, required: true },
  balance: { type: Number, required: true, default: 0 },
  user: { type: Types.ObjectId, ref: 'Users' },
});

module.exports = model('SourceBalance', schema);
