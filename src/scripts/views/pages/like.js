import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
         <section id="mainContent" class="restaurant-list">
            <h2>Favorite Lists</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </section>
        `
  },
  async afterRender () {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants()
    const restaurantContainer = document.querySelector('#restaurants')
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(restaurant)
    })
  }
}

export default Like
