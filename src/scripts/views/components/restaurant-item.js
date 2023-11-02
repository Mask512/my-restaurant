import CONFIG from '../../global/config';
import placeholderImage from '../../../assets/images/restaurant-placeholder.svg';

class RestaurantItem extends HTMLElement {
  set restaurant(data) {
    this._restaurant = data;
    this.render();
  }

  get restaurant() {
    return this._restaurant;
  }

  render() {
    const {
      id, name, description, city, pictureId, rating,
    } = this.restaurant;
    let descriptionText = description;
    if (description.length > 160) {
      descriptionText = `${description.slice(0, 157)}`;
    }
    this.innerHTML = `
    <article tabIndex="0" class="restaurant-info card" id="${id}">
      <div class="restaurant-image-wrapper">
      <picture class="restaurant-image">
      <source
        data-srcset="${CONFIG.BASE_IMAGE_URL}medium/${pictureId}"
        media="(max-width: 575px)"
        class="lazyload"
      />
      <img
        src="${placeholderImage}"
        data-src="${CONFIG.BASE_IMAGE_URL}small/${pictureId}"
        alt="Photo of ${name}"
        class="lazyload"
      />
    </picture>
      </div>
      <div class="restaurant-details">
        <p class="text-bold">Ratings : ${rating}</p>
        <p class="text-bold">${city}</p>
      </div>
      <h3 class="restaurant-name">${name}</h3>
        <p class="restaurant-desc">${descriptionText}</p>
        <a href="/#/detail/${id}" class="btn-detail">View Details</a>
    </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
