import RestaurantDBSource from '../../data/restaurantdb-source'
import { createRestaurantTemplate } from '../templates/template-creator'

const HomePage = {
  async render () {
    return `
        <section class="hero">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
            <source media="(min-width: 601px)" srcset="./images/heros/hero-image_2-large.jpg">
            <img src="./images/heros/hero-image_2.jpg" alt="Hero Image">
          </picture>
          <div class="hero__inner">
            <div class="hero-text">
                <h1>Welcome to Restaurant Catalogue</h1>
                <p>Find your favourite restaurant here !</p>
            </div>
          </div>
        </section>
        <section id="mainContent" class="restaurant-list">
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
