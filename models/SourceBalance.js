import { Schema, model } from 'mongoose';

const changingBalance = new Schema({
  balanceItem: { type: String, requried: true, trim: true },
  price: { type: Number, required: true, trim: true },
});

const sourceBalance = new Schema({
  balanceName: { type: String, required: true, trim: true },
  balance: { type: Number, reuired: true },
  changingBalance: [changingBalance],
});

const schema = new Schema({
  sourceBalance: [sourceBalance],
  totalBalance: { type: Number, required: true },
});

export default model('SourceBalance', schema);
