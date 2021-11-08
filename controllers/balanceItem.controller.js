const BalanceItem = require("../models/BalanceItem");
const { validationResult } = require("express-validator");

module.exports.getPaidItems = async (req, res) => {
  try {
    const paidItems = await BalanceItem.find({ sourceBalance: req.body.id });
    res.json(paidItems);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
};

module.exports.create = async (req, res) => {
  try {
    const { id, link, itemName, price } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Название и сумма не могут быть пустыми",
      });
    }

    const paidItem = await BalanceItem({
      itemName,
      price,
      paidType: link,
      sourceBalance: id,
      user: req.user.userId,
    });

    await paidItem.save((err) => {
      if (err) {
        console.log({ message: err });
      }
    });

    res.status(201).json(paidItem);
  } catch ({ message }) {
    res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};

module.exports.editItem = async (req, res) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Введите название и сумму предмета источника счета",
      });
    }

    await BalanceItem.find({ _id: req.body._id }).updateOne({
      itemName: req.body.itemName,
      price: req.body.price,
    });

    res.status(201).json({message: `Удачно`})
  } catch ({ message }) {
    res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};

// module.exports.updateCurrentItem = async (req, res) => {
//   try {
//     const itemBalance = await BalanceItem.findById({ _id: id}).updateOne({ price: req.body.price }) 

//     res.status(201).json({ message: `success`});
//   } catch (e) {
//     res.status(500).json({ message: `Что-то пошло не так, попробуйте снова `})
//   }
// }

module.exports.removeAll = async (req, res) => {
  try {
    const itemBalance = await BalanceItem.deleteMany({
      sourceBalance: req.body.id,
    });
    res.status(200).json({ message: `Предметы баланса удалены` });
  } catch (e) {
    res.status(500).json({ message: `Что-то пошло не так, попробуйте снова` });
  }
};

// Добавить удаление предмета баланса на фронте
module.exports.removeItem = async (req, res) => {
  try {
    const { id } = req.body; 
    console.log(id);
    await BalanceItem.deleteOne({ _id: id });

    res.status(201).json({ message: `success`});
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
};
