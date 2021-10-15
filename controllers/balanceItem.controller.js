const BalanceItem = require('../models/BalanceItem');

module.exports.create = async (req, res) => {
  try {
    const { paidItemName, price } = req.body;

    const paidItem = await BalanceItem({
      paidData: [
        {
          paidItemName,
          price,
          user: req.user.userId,
        },
      ],
    });

    await paidItem.save((err) => {
      if (err) {
        console.log({ message: err });
      }
    });

    res.status(201).json({ message: 'Удачно' });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};
