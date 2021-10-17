const { Router } = require('express');
const auth = require('../middleware/auth.middleware');
const validation = require('../middleware/validator');
const controller = require('../controllers/balanceItem.controller');
const router = Router();

router.post('/create', auth, validation.newBalanceItem, controller.create);
router.post('/getpaiditems', controller.getPaidItems);

module.exports = router;
