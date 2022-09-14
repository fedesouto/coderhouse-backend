const minimist = require('minimist')

const resultado = minimist(process.argv.slice(2), {alias: {p: 'port', m: 'mode', d: 'debug'}, default:{port: 0, debug: false, mode: 'prod'}})

console.log(resultado)