'use strict'

const Koa = require('koa')
const koaBody = require('koa-body')
const logger = require('ilog')
const session = require('koa-session')
const config = require('config')
const locale = require('koa-locale')
const i18n = require('koa-i18n')
const pkg = require('../package.json')
const cors = require('koa-cors')

require('./services/error')

const router = require('./router')
const app = new Koa()
// 在 router 中, 通过 this.config 来调用配置
app.context.config = config
app.context.SDK = require('./services/sdk')

// 判断客户端语言
locale(app, 'lang')
app.keys = config.session_keys
config.session.decode = (string) => {
    // Node LTS 版本 new Buffer 替换成 Buffer.from
    // let body = new Buffer(string, 'base64').toString('utf8')
    let body = Buffer.from(string, 'base64').toString('utf8')
    let json = JSON.parse(body)
    return json
}

// 请求日志记录
if (config.env !== 'test') app.use(require('koa-logger')())
// app.use(bodyParser())
app.use(koaBody({
    multipart: true,
    formidable: {
    multiples: false
}
}))

// 允许跨域请求
app.use(cors({credentials: true}))
app.use(session(config.session, app))
app.use(i18n(app, {
    directory: './locales',
    extension: '.json',
    locales: ['zh', 'en'],   //  `zh` defualtLocale, must match the locales to the filenames
    modes: [
    'query',               //  optional detect querystring - `/?locale=en-US`
    'cookie',              //  optional detect cookie      - `Cookie: locale=zh-TW`
    'header'               //  optional detect header      - `Accept-Language: zh-CN,zh;q=0.5`
]
}))

// 加载路由到 /apps 路径
app.use(router.routes())
app.use(function * () {
if (this.url === '/api') { this.body = `${pkg.name} v${pkg.version}` }

// 处理 options
if (this.method.toLowerCase() === 'options') {
    this.set('Access-Control-Allow-Method', 'OPTIONS, GET,POST,PUT,PATCH')
    this.set('Access-Control-Allow-Origin', '*')
    this.body = 204
}
})

app.on('error', (err) => {
    // Ignore user raised errors
    if (err.status && err.status < 500) return
    logger.error(err)
})

module.exports = app
