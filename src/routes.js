const Router = require('./utils/Router')

const streamVideoController = require('./controllers/api/streamVideoController')

const homeController = require('./controllers/client/homeController')

const routes = new Router();

routes.get('/', homeController)

routes.get('/api/video', streamVideoController)

module.exports = routes.getRoutes()
