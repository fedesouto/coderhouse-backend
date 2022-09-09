const StringService = require("../services/Strings.service")

const stringsCtrl = {}

const stringService = new StringService()

stringsCtrl.getAll = (req, res, next) => {
    const strings = stringService.getAll()
    res.json(strings)
}

stringsCtrl.addNew = (req, res, next) => {
    const {string} = req.body
    const result = stringService.addNew(string)
    res.json(result)
}   

module.exports = stringsCtrl