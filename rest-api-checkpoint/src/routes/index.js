const UserController = require('../controllers/user.controller')

module.exports= router => {
    router.get('/users', UserController.getAll)
    router.post('/users', UserController.create)

    return router
}