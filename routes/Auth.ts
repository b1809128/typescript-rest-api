const expressAuth = require('express')
const routerAuth = expressAuth.Router()
const AuthController = require("../controllers/Auth")

routerAuth.get('/', AuthController.GetAllInformation)

routerAuth.post('/create', AuthController.CreateAuthentication)

module.exports = routerAuth


