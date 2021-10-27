const User = require('../models/User.js');

module.exports.getUserBalance = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.user.userId });
    res.json(user.currentBalance);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};

module.exports.updateUserTotalBalance = async (req, res) => {
  try {
    const { balance, changeSign, link } = req.body;
    const user = await User.findById({ _id: req.user.userId });

    if (changeSign === 'reduce' || link === 'cost') {
      user.currentBalance = user.currentBalance - balance;
    } else {
      user.currentBalance = +balance + user.currentBalance;
    }

    await user.updateOne({ currentBalance: user.currentBalance });
    res.json(user);
  } catch (e) {
    json.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};
