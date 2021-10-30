const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  paidItemName: { type: String, required: true },
  price: { type: String, required: true },
  paidType: { type: String, required: true },
  sourceBalance: { type: Types.ObjectId, ref: 'SourceBalance' },
  user: { type: Types.ObjectId, ref: 'Users' },
});

module.exports = model('BalanceItem', schema);
