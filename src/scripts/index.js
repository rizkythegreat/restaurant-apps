import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  hero: document.querySelector('.hero')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
  swRegister()
  window.scrollTo(0, 0)
})

window.addEventListener('load', () => {
  app.renderPage()
})
