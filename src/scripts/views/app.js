import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'

const { default: DrawerInitiator } = require('../utils/drawer-initiator')

class App {
  constructor ({ button, drawer, content, hero }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._hero = hero

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    if (url === '/' || url === '/home-page') {
      this._hero.style.display = 'flex'
    } else {
      this._hero.style.display = 'none'
    }
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
