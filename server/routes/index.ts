const {Router} = require ('express')
const router = Router()
const getPerfil = require('../controllers/GET/getPerfil')
const getUserInfo = require('../controllers/GET/getUserInfo')
const postRegister = require('../controllers/POST/postRegister')
const postLogin = require('../controllers/POST/postLogin')
const postRecover = require('../controllers/POST/postRecover')
const postPerfil = require('../controllers/POST/postPerfil')

router.get('/getprofile', getPerfil)
router.get('/getuserinfo', getUserInfo)

router.post('/registeruser', postRegister)
router.post('/login', postLogin)
router.post('/recover', postRecover)
router.post('/postprofile', postPerfil)


module.exports = router