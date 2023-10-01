import { createContainer, createLoading } from '../templates/template-creator';
import FavoriteRestoIDB from '../../data/favorite-resto';
import '../components/restaurant-list';
import '../components/restaurant-item';

const Favorite = {
  async render() {
    const title = 'My Favorites';
    return createContainer(title) + createLoading();
  },

  async afterRender() {
    const loading = document.querySelector('loading-wave');

    const favoriteResto = await FavoriteRestoIDB.getFavorites();
    if (favoriteResto.length) {
      const restaurantList = document.createElement('restaurant-list');
      const contentContainer = document.querySelector('.content-container');
      restaurantList.restaurants = favoriteResto;
      contentContainer.append(restaurantList);
    } else {
      const title = document.querySelector('.content-header-title');
      title.textContent = 'No Favorite Restaurant';
    }
    loading.remove();
  },
};

export default Favorite;
