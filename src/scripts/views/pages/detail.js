import UrlParser from '../../routes/url-parser'
import RestaurantDBSource from '../../data/restaurantdb-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const Detail = {
  async render () {
    return `
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantDBSource.detailRestaurant(url.id)
    const restaurantContainer = document.querySelector('#restaurant')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)
    console.log(restaurant)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating
      }
    })
  }
}

export default Detail
