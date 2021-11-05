const { check } = require('express-validator');

exports.registrationValidate = [
  check('email', 'Некорректный email').isEmail(),
  check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
];

exports.loginValidate = [
  check('email', 'Введите корректный email').normalizeEmail({ gmail_remove_dots: false }).isEmail(),
  check('password', 'Введите пароль').exists(),
];

exports.newSourceOfBalance = [
  check('balanceName', 'Название источника счета не может быть пустым').exists({
    checkFalsy: true,
    checkNull: true,
  }),
  check('balance', 'Баланс не может быть пустым').exists({ checkFalsy: true, checkNull: true }),
];

exports.updateSourceOfBalance = [
  check('balanceName', 'Название источника счета не может быть пустым').exists({
    checkFalsy: true,
    checkNull: true,
  }),
];

exports.newBalanceItem = [
  check('itemName', 'Описание изменения баланса не может быть пустым').exists({
    checkFalse: true,
    checkNull: true,
  }),
  check('price', 'Сумма не может быть пустым').exists({ checkFalsy: true, checkNull: true }),
];
