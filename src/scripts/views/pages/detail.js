import UrlParser from '../../routes/url-parser'
import RestaurantDBSource from '../../data/restaurantdb-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'

const Detail = {
  async render () {
    return `
            <div id="mainContent" class="restaurant">
              <div id="restaurant" class="restaurant"></div>
              <div id="likeButtonContainer"></div>
            </div>
        `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantDBSource.detailRestaurant(url.id)
    const restaurantContainer = document.querySelector('#restaurant')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
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
