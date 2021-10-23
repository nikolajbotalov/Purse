const User = require('../models/User.js');

module.exports.getUserBalance = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.user.userId });
    res.json(user.currentBalance);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.updateCurrentUserBalance = async (req, res) => {
  try {
    const { balance } = req.body;
    const user = await User.findById({ _id: req.user.userId });
    const userBalance = +balance + user.currentBalance;

    await user.updateOne({ currentBalance: userBalance });

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.changeUserBalance = async (req, res) => {
  try {
    const { balance, link } = req.body;
    const user = await User.findById({ _id: req.user.userId });

    link === 'cost'
      ? (user.currentBalance = +balance + user.currentBalance)
      : (user.currentBalance = user.currentBalance - balance);

    await user.updateOne({ currentBalance: user.currentBalance });

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: `Что-то пошло не так, попробуйте снова ${e}` });
  }
};
