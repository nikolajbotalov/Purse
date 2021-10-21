const { validationResult } = require('express-validator');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации',
      });
    }

    const { email, password } = req.body;
    const existMail = await User.findOne({ email });

    if (existMail) {
      return res.status(400).json({ message: 'Такой пользователь уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });

    await user.save();
    res.status(200).json({ message: 'Пользователь создан' });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошшло не так, попробуйте снова' });
  }
};

module.exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при входе в систему',
      });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), { expiresIn: '1h' });

    res.json({ token, userId: user.is });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
};
