const { Router } = require('express');
const auth = require('../middleware/auth.middleware');
const controller = require('../controllers/user.controller');

const router = Router();

router.get('/getuserbalance', auth, controller.getUserBalance);
router.patch('/updateusertotalbalance', auth, controller.updateUserTotalBalance);

module.exports = router;
