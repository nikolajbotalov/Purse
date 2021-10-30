const SourceBalance = require('../models/SourceBalance');
const { validationResult } = require('express-validator');

module.exports.getAll = async (req, res) => {
  try {
    const sourceBalance = await SourceBalance.find({ user: req.user.userId });

    res.json(sourceBalance);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.createSourceBalance = async (req, res) => {
  try {
    const { balanceName, balance } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Название и баланс не могут быть пустым',
      });
    }

    const sourceBalance = await new SourceBalance({
      balanceName,
      balance,
      user: req.user.userId,
    });

    await sourceBalance.save((err) => {
      if (err) {
        console.log({ message: err });
      }
    });

    res.status(201).json({ message: `Удачно` });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.rename = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Введите название источника баланса',
      });
    }

    await SourceBalance.find({ _id: req.body._id }).updateOne({
      balanceName: req.body.balanceName,
    });

    res.status(201).json({ message: 'Удачно' });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const { id } = req.body;
    await SourceBalance.deleteOne({ _id: id.id });

    res.json({ message: `Источник удален` });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.updateItemBalance = async (req, res) => {
  try {
    const { id, link, price } = req.body;
    const sourceBalance = await SourceBalance.findById({ _id: id });

    link === 'cost'
      ? (sourceBalance.balance = sourceBalance.balance - price)
      : (sourceBalance.balance = +price + sourceBalance.balance);

    await sourceBalance.updateOne({ balance: sourceBalance.balance });
    res.json({ message: 'Удачно' });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};
