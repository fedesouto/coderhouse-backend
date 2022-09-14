const yargs = require('yargs')(process.argv.slice(2))

const args = yargs.default({
    port: 0,
    debug: false,
    mode: 'prod'
})
    .alias({ p: 'port', d: 'debug', m: 'mode' })
    .boolean('debug')
    .argv

console.log(args)

