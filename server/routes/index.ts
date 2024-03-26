const {Router} = require ('express')
const router = Router()
const getPerfil = require('../controllers/GET/getPerfil')
const getUserInfo = require('../controllers/GET/getUserInfo')
const getVerified = require('../controllers/GET/getVerified')
const postRegister = require('../controllers/POST/postRegister')
const postLogin = require('../controllers/POST/postLogin')
const postPost = require('../controllers/POST/postPost')
const postLogout = require('../controllers/POST/postLogout')
const postRecover = require('../controllers/POST/postRecover')
const postPerfil = require('../controllers/POST/postPerfil')

router.get('/getprofile', getPerfil)
router.get('/getuserinfo', getUserInfo)
router.get('/getverified', getVerified)

router.post('/registeruser', postRegister)
router.post('/login', postLogin)
router.post('/logout', postLogout)
router.post('/recover', postRecover)
router.post('/postprofile', postPerfil)
router.post('/postpost', postPost)



module.exports = router