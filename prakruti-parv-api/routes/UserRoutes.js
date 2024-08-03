const router = require('express').Router()
const {signup,login,verifyEmail} = require('../controllers/UserController')

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify-email',verifyEmail);
module.exports = router;