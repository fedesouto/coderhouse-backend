const moment = require('moment');

const today = moment();

const birthday = moment('1994-07-05')

console.log("Cantidad de dias",today.diff(birthday, 'days'))
console.log("Cantidad de anios",today.diff(birthday, 'years'))