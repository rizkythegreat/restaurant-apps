import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute, Route } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import CONFIG from './globals/config'

// Do precaching
precacheAndRoute(self.__WB_MANIFEST)

const restaurantdbApi = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: 'restaurantdb-api'
  })
)

const restaurantdbImageApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurantdb-image-api'
  })
)

registerRoute(restaurantdbApi)
registerRoute(restaurantdbImageApi)

self.addEventListener('install', () => {
  console.log('Service Worker: Installed')
  self.skipWaiting()
})

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed')

  const dataJson = event.data.json()
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image
    }
  }
  event.waitUntil(self.registration.showNotification(notification.title, notification.options))
})
