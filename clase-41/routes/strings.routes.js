const {Router} = require('express')
const stringsCtrl = require('../controllers/strings.controller')

const stringsRouter = Router()

stringsRouter.get('/', stringsCtrl.getAll)

stringsRouter.post('/', stringsCtrl.addNew)

module.exports = stringsRouter