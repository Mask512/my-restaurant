import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(data) {
    this._restaurants = data;
    this.render();
  }

  get restaurants() {
    return this._restaurants;
  }

  render() {
    this.innerHTML = '';
    this.restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      this.appendChild(restaurantItem);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
