const express = require('express')
const { postUser, postEmailConfirmation, signIn, forgetPassword, resetPassword } = require('../controller/authController')
const router = express.Router()

router.post('/register', postUser)
router.put('/confirmation/:token', postEmailConfirmation )
router.post('/signin', signIn )
router.post('/forget/password', forgetPassword)
router.put('/forget/password/:token', resetPassword)

module.exports = router