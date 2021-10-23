const { Router } = require('express');
const auth = require('../middleware/auth.middleware');
const controller = require('../controllers/user.controller');

const router = Router();

router.post('/getuserbalance', auth, controller.getUserBalance);
router.patch('/changeuserbalance', auth, controller.changeUserBalance);
router.patch('/updatecurrentuserbalance', auth, controller.updateCurrentUserBalance);

module.exports = router;
