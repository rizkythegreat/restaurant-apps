import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantTemplate } from '../templates/template-creator'

const Like = {
  async render() {
    return `
         <section id="mainContent" class="restaurant-list">
            <h2>Favorite Lists</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </section>
        `
  },
  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants()
    const restaurantContainer = document.querySelector('#restaurants')
    
    if (restaurant.length === 0) {
      restaurantContainer.innerHTML = '<p>Tidak ada data</p>'
    } else {
      restaurant.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantTemplate(restaurant)
      })
    }
  }
}

export default Like
