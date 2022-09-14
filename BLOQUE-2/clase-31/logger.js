const log4js = require('log4js')

log4js.configure({
    appenders: {
        loggerDev: {type: 'console'},
        loggerDebug : {type: 'file', filename: 'debug.log'},
        loggerError : {type: 'file', filename: 'error.log'},
        soloDebug: {type: 'logLevelFilter', appender: 'loggerDebug', level: 'debug'},
        soloError: {type: 'logLevelFilter', appender: 'loggerError', level: 'error'},
    },
    categories: {
        default: {appenders: ['loggerDev'], level: 'info'},
        production: {appenders: ['soloDebug', 'soloError'], level: 'debug'}
    }
})


const logger = process.env.NODE_ENV === 'PROD' ? log4js.getLogger('production') : log4js.getLogger('default')

module.exports = logger


