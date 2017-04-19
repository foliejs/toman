'use strict'

const Err = require('err1st')

module.exports = () => {
    return function * (next) {
        let err
        try {
            yield next
        } catch (e) {
            if (e instanceof Err) {
            err = e
            } else {
                err = new Err(e)
            }
            let locale = this.request.query.lang || this.cookies.lang || 'zh'
            this.status = err.status || 500
            this.body = {
                message: err.locale(locale).message
            }
            this.app.emit('error', err, this)
        }

        if (this.status !== 404) return
        this.status = 404
        this.body || (this.body = {
            message: 'Not Found'
        })
    }
}
