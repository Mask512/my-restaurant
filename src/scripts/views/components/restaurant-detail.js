import CONFIG from '../../global/config';
import { createReviewCard } from '../templates/template-creator';
import './form-review';

class RestaurantDetail extends HTMLElement {
  set data(restaurant) {
    this._restaurant = restaurant;
    this.render();
    this.formListen();
  }

  get data() {
    return this._restaurant;
  }

  render() {
    const {
      address,
      categories,
      city,
      customerReviews,
      description,
      id,
      menus,
      name,
      pictureId,
      rating,
    } = this.data;

    const categoryList = this._getCategory(categories);
    const menuElement = this._getMenus(menus);
    const reviewsElement = this._getReviews(customerReviews);
    this.innerHTML = `
    <article tabIndex="0" class="restaurant-detail" id="${id}">
        <div class="detail-image-wrapper">
            <picture>
                <source srcset="${CONFIG.BASE_IMAGE_URL}small/${pictureId}" media="(max-width: 801px)"/>
                <img src="${CONFIG.BASE_IMAGE_URL}medium/${pictureId}" loading="lazy"
                alt="Photo of ${name}">
            </picture>
            <p class="text-bold detail-rating">Ratings : ${rating}</p>
        </div>
        <div class="detail-info">
            <div class="info-item">
                <p><span class="text-bold">City: </span><span class="text-italic">${city}</span></p>
            </div>
            <div class="info-item">
                <p><span class="text-bold">Address: </span><span class="text-italic">${address}</span></p>
            </div>
            <div class="info-item">
                <p><span class="text-bold">Categories: </span><span class="text-italic">${categoryList}</span></p>            </div>
            <div class="info-item">
                <p class="text-bold">Descriptions: </p>
                <p class="text-italic">${description}</p>
            </div>
            <div class="info-item">
                ${menuElement}
            </div>            
        </div>
        <div class="detail-reviews">
            <p class="text-bold">Customer Reviews: </p>
            <div class="review-card-wrapper">${reviewsElement}</div>
        </div>
    </article>
    <form-review data-id="${id}"></form-review>
    `;
  }

  _getCategory(categories) {
    let result = '';
    for (let i = 0; i < categories.length; i++) {
      result += categories[i].name;
      if (i < categories.length - 1) {
        result += ', ';
      }
    }
    return result;
  }

  _getMenus(menus) {
    let html = '';

    if (menus.foods && menus.foods.length > 0) {
      html += '<p class="text-bold">Foods: </p>';
      html += `<p class="text-italic">${menus.foods
        .map((food) => food.name)
        .join(', ')}</p>`;
    }

    if (menus.drinks && menus.drinks.length > 0) {
      html += '<p class="text-bold">Drinks: </p>';
      html += `<p class="text-italic">${menus.drinks
        .map((drink) => drink.name)
        .join(', ')}</p>`;
    }

    return html;
  }

  _getReviews(customerReviews) {
    let html = '';
    customerReviews.forEach((customerReview) => {
      html += createReviewCard(customerReview);
    });
    return html;
  }

  formListen() {
    const formReviewElement = this.querySelector('form-review');
    formReviewElement.addEventListener('formSubmitted', (event) => {
      const customerReviews = event.detail;
      this._updateReview(customerReviews);
    });
  }

  _updateReview(customerReviews) {
    const reviewContainer = document.querySelector('.review-card-wrapper');
    reviewContainer.innerHTML = '';
    reviewContainer.innerHTML = `
    ${this._getReviews(customerReviews)}
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
