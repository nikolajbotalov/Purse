const { Router } = require('express');
const auth = require('../middleware/auth.middleware');
const controller = require('../controllers/balanceItem.controller');
const router = Router();

router.post('/create', auth, controller.create);

module.exports = router;
