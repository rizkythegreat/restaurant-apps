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

    this._handleSkipContentLink()
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()

    this._handleSkipContentLink()
  }

  _handleSkipContentLink () {
    const skipLink = document.querySelector('.skip-link')
    const mainContent = document.querySelector('#mainContent')

    if (skipLink && mainContent) {
      skipLink.addEventListener('click', (event) => {
        event.preventDefault()
        mainContent.setAttribute('tabindex', '-1')
        mainContent.focus()
        mainContent.removeAttribute('tabindex')
      })
    }
  }
}

export default App
