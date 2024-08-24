import Detail from '../views/pages/detail'
import Like from '../views/pages/like'

const { default: HomePage } = require('../views/pages/home')

const routes = {
  '/': HomePage,
  '/home-page': HomePage,
  '/detail/:id': Detail,
  '/like': Like
}

export default routes
