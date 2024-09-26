const express = require('express')
const { postUser, postEmailConfirmation, signIn, forgetPassword, resetPassword, userList, userDetails, requireAdmin } = require('../controller/authController')
const { userValidation, validation } = require('../validation/validator')
const router = express.Router()

router.post('/register', userValidation, validation, postUser)
router.put('/confirmation/:token', postEmailConfirmation )
router.post('/signin', signIn )
router.post('/forget/password', forgetPassword)
router.put('/forget/password/:token', userValidation, validation, resetPassword)
router.get('/user/list',requireAdmin, userList)
router.get('/user/details/:id', userDetails)

module.exports = router