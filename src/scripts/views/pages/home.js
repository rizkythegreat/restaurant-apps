import RestaurantDBSource from '../../data/restaurantdb-source'
import { createRestaurantTemplate } from '../templates/template-creator'

const HomePage = {
  async render () {
    return `
        <section class="restaurant-list">
            <h2>Restaurant Lists</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </section>
        `
  },
  async afterRender () {
    const restaurant = await RestaurantDBSource.restaurantList()
    const restaurantContainer = document.querySelector('#restaurants')
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(restaurant)
    })
  }
}

export default HomePage
