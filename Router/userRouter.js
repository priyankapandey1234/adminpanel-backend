const express = require('express')
const { register, login } = require('../Controller/userController')

const userRoute = express.Router()


userRoute.post('/signup',register)
userRoute.post('/login',login)


module.exports = userRoute