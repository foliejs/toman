'use strict'

const config = require('config')
const Router = require('koa-router')
const UserController = require('./api/UserController')
const OauthController = require('./api/OauthController')
const responseRendererMiddleware = require('./middlewares/response-renderer')

// 路由前缀
const router = new Router({
    prefix: '/api/v1'
})

// 自定义返回参数
router.all('*', responseRendererMiddleware())


// API文档接口
router.get('/doc', function * (){
    this.body = 'doc api'
})

// 获取用户接口
router.get('/user', UserController.handle)

// 获取用户 authorization uri
router.get('/oauth/check', OauthController.check)
// 获取用户 access token
router.get('/oauth/token', OauthController.token)

module.exports = router
