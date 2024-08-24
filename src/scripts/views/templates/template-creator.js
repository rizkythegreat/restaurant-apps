import CONFIG from '../../globals/config'
import { truncateText } from '../../utils/truncate-text'

const createRestaurantTemplate = (restaurant) => `
    <div class="restaurant-card">
        <div class="restaurant-hero">
            <img src="${CONFIG.BASE_IMAGE_URL + CONFIG.SIZE_IMAGE[0] + restaurant.pictureId}" alt="${restaurant.name}">
            <div class="restaurant-city">
                <img src="./images/icons/location.png" alt="location-icon" />
                <p>${restaurant.city}</p>
            </div>
        </div>
        <div class="restaurant-info">
            <div class="restaurant-rating">
                <img src="./images/icons/star.png" alt="star-icon" />
                <p>${restaurant.rating}</p>
            </div>
            <p class="restaurant-title">${restaurant.name}</p>
            <p class="restaurant-description">${truncateText(restaurant.description, 200)}</p>
            <a href="/#/detail/${restaurant.id}">Lihat Selengkapnya ...</a>
        </div>
    </div>
`
const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-detail">
        <div class="restaurant-header">
        <div class="restaurant-hero">
            <img src="${CONFIG.BASE_IMAGE_URL + CONFIG.SIZE_IMAGE[1] + restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="restaurant-info">
            <p class="restaurant-title">${restaurant.name}</p>
            <p class="restaurant-description">${restaurant.description}</p>
            <div class="restaurant-rating">
                <p>Rating :</p>
                <p>${restaurant.rating}</p>
            </div>
            <div class="restaurant-address">
                <p>Address :</p>
                <p>${restaurant.address}</p>
            </div>
            <div class="restaurant-address__city">
                <p>City :</p>
                <p>${restaurant.city}</p>
            </div>
        </div>
        </div>
        <div class="restaurant-menu">
            <h3 class="restaurant-menu__title">Menus</h3>
            <div class="restaurant-menu__items">
                <h4>Foods</h4>
                <div class="restaurant-menu__food">
                    ${restaurant.menus.foods.map((food) => `<p>${food.name}</p>`).join('')}
                </div>
                <h4>Drinks</h4>
                <div class="restaurant-menu__drink">
                    ${restaurant.menus.drinks.map((drink) => `<p>${drink.name}</p>`).join('')}
                </div>
            </div>
        </div>
        <div class="restaurant-review">
            <h3 class="restaurant-review__title">Customer Reviews</h3>
                <div class="restaurant-review__card-wrapper">
                ${restaurant.customerReviews.map((item) => {
                    return (
                        `<div class="restaurant-review__card">
                            <div class="restaurant-review__card-header">
                            <p>
                                ${item.name}
                            </p>
                            <p>
                                ${item.date}
                            </p>
                            </div>
                            <q>
                                ${item.review}
                            </q>
                        </div>`
                    )
                }).join('')}
                </div>
        </div>
    </div>
`
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export { createRestaurantTemplate, createRestaurantDetailTemplate, createLikedButtonTemplate, createLikeButtonTemplate }
