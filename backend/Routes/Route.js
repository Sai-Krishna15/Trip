const {Signup,Login} = require('../Controllers/Controllers')
const {userVerification} = require('../verifyToken/verifyToken')
const router = require('express').Router()

router.post('/signup',Signup)
router.post('/login',Login)
router.post('/',userVerification)
module.exports = router