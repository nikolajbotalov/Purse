const { Router } = require('express');
const controller = require('../controllers/auth.controller');
const validation = require('../middleware/validator');
const router = Router();

router.post('/register', validation.registrationValidate, controller.register);
router.post('/login', validation.loginValidate, controller.login);

module.exports = router;
