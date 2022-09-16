var express = require('express');
const swaggerUi = require('swagger-ui-express');
var router = express.Router();
const specs = require('../docs/swagger')




/* GET docs page. */
router.use('/', swaggerUi.serve, swaggerUi.setup(specs))

module.exports = router;
