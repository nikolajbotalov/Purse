const { check } = require('express-validator');

exports.registrationValidate = [
  check('email', 'Некорректный email').isEmail(),
  check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
];

exports.loginValidate = [
  check('email', 'Введите корректный email').normalizeEmail({ gmail_remove_dots: false }).isEmail(),
  check('password', 'Введите пароль').exists(),
];
