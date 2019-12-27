const router = require('koa-router')();
const userController = require('../controllers/UserController');

router
  .post('api/user/login', userController.login)
  .get('/api/user/userinfo', userController.userInfo)


  module.exports = router