const config = require('config')
const rp = require('request-promise')

/**
 * 根据code和appName获取token
 * @param {String} code
 * @param {String} 应用名称
 */
function * getAccessToken (code){
  try {
    const options = {
      method: 'POST',
      uri: `http://${config.authHost}/oauth2/access_token`,
      body: {
        client_id: config.oauth.key,
        client_secret: config.oauth.secret,
        code,
        grant_type: 'code'
      },
      json: true,
    };

    const result = yield rp(options);
    return result;
  } catch (err) {
    throw err;
  }
}

 module.exports = getAccessToken
