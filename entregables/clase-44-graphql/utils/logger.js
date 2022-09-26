const winston = require('winston')

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({level: 'info'}),
        new winston.transports.File({filename: './logs/warn.log', level: 'warn', levelOnly: true}),
        new winston.transports.File({filename: './logs/error.log', level: 'error', levelOnly: true})
    ]
})

module.exports = logger;