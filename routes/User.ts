const expressUser = require('express');
const routerUser = expressUser.Router();

routerUser.get('/', (req: any, res: any) => {
    res.json({ user: "Nguyen Ho Quoc Huy" })
})

module.exports = routerUser