const { Router } = require('express');
const controller = require('../controllers/sourceBalance.controller');
const auth = require('../middleware/auth.middleware');
const validation = require('../middleware/validator');
const router = Router();

router.get('/getsourceofbalance', auth, controller.getAll);
router.post('/create', auth, validation.newSourceOfBalance, controller.createSourceBalance);
router.patch('/renamesourceofbalance', validation.updateSourceOfBalance, controller.rename);
router.patch('/updateitembalance', controller.updateItemBalance);
router.delete('/removesourceofbalance', controller.delete);

module.exports = router;
