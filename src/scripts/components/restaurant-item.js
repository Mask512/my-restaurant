class RestaurantItem extends HTMLElement {
  set restaurant(data) {
    this._restaurant = data;
    this.render();
  }

  get restaurant() {
    return this._restaurant;
  }

  render() {
    const { id, name, description, city, pictureId, rating } = this.restaurant;
    let descriptionText = description;
    if(description.length > 200) {
      descriptionText = description.slice(0, 197) + "....";
    }
    this.innerHTML = `
    <article tabIndex="0" class="restaurant-info card" id="${id}">
            <div class="restaurant-image-wrapper">
              <img
                src="${pictureId}"
                alt="photos of ${name} restaurant"
                class="restaurant-image"
              />
            </div>
            <div class="restaurant-details">
              <p tabIndex="0" class="rating">Ratings : ${rating}</p>
              <p tabIndex="0" class="city">${city}</p>
            </div>
            <h3 tabIndex="0" class="restaurant-name">${name}</h3>
            <p tabIndex="0" class="restaurant-desc">
              ${descriptionText}
            </p>
    </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
