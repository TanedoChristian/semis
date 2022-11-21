const express = require('express')

const UserController = require('../controllers/UserController')



const router = express.Router()

router.get('/', UserController.homePage)
router.post('/test', UserController.test)
router.post('/login', UserController.verifyLogin)


module.exports = router