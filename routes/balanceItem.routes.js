const { Router } = require('express');
const auth = require('../middleware/auth.middleware');
const validation = require('../middleware/validator');
const controller = require('../controllers/balanceItem.controller');
const router = Router();

router.post('/create', auth, validation.newBalanceItem, controller.create);
router.post('/getbalanceitems', controller.getPaidItems);
router.post('/edititem', validation.newBalanceItem, controller.editItem)
router.delete('/removeallitems', controller.removeAll);

module.exports = router;
