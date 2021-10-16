const SourceBalance = require('../models/SourceBalance');

module.exports.getAll = async (req, res) => {
  try {
    const sourceBalance = await SourceBalance.find({ user: req.user.userId });
    res.json(sourceBalance);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.getBalance = async (req, res) => {
  try {
    const sourceBalance = await SourceBalance.find({ _id: req._id });
    res.json(sourceBalance);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.createSourceBalance = async (req, res) => {
  try {
    const { balanceName, balance } = req.body;

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
    console.log({ message: e });
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.rename = async (req, res) => {
  try {
    const renameSourceBalance = await SourceBalance.find({ _id: req.body._id }).updateOne({
      balanceName: req.body.balanceName,
    });
  } catch (e) {
    console.log({ message: e });
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.delete = async (req, res) => {
  try {
    await SourceBalance.deleteOne({ _id: req.body._id });

    res.json({ message: 'Источник удален' });
  } catch (e) {
    console.log({ message: e });
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};
