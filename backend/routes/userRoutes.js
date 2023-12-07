const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')

router.post('/login' , userControllers.userLogin)

router.post('/signup' , userControllers.userSignup)


module.exports = router;


