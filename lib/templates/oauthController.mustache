'use strict'
const config = require('config')
const Teambition = require('teambition')
const Utils = require('../utils')
const OauthConfig = config.oauth
const teambition = new Teambition(null, {protocol: OauthConfig.protocol, authHost: OauthConfig.authHost})

class OauthController {
    static * check () {
        let authUrl = teambition.getAuthorizeUrl(OauthConfig.key, OauthConfig.callback, 'all')
        this.body = authUrl
    }

    static * token (){
        const code = this.query.code
        const token = Utils.getAccessToken(code)
        this.body = token
    }
}

module.exports = OauthController
