const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/like')
})

Scenario('showing empty liked restaurants', async ({ I }) => {
  I.seeElement('#mainContent')
  I.see('Tidak ada data', '.restaurants')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.restaurant-info a')
  const detailButton = locate('.restaurant-info a').first()
  const firstRestaurant = locate('.restaurant-title').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(detailButton)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.seeElement('.restaurants')
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})
Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.restaurant-info a')
  const detailButton = locate('.restaurant-info a').first()
  I.click(detailButton)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.seeElement('.restaurant-info a')

  I.click(detailButton)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.dontSeeElement('.restaurant-title')
})
