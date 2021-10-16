const { Router } = require('express');
const controller = require('../controllers/sourceBalance.controller');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.post('/create', auth, controller.createSourceBalance);
router.get('/getsourceofbalance', auth, controller.getAll);
router.post('/getbalance', controller.getBalance);
router.delete('/removesourceofbalance', controller.delete);
router.patch('/renamesourceofbalance', controller.rename);

module.exports = router;
