import { createContainer, createLoading } from '../templates/template-creator';
import RestoSource from '../../data/resto-source';
import '../components/restaurant-list';
import '../components/restaurant-item';
import { showAlertError } from '../../utils/swal';

const Home = {
  async render() {
    const title = 'Explore Our Restaurants';
    return createContainer(title) + createLoading();
  },

  async afterRender() {
    const loading = document.querySelector('loading-wave');

    try {
      const { error, message, restaurants } = await RestoSource.getRestoList();

      if (error) {
        throw new Error(message);
      } else {
        const restaurantList = document.createElement('restaurant-list');
        const contentContainer = document.querySelector('.content-container');
        restaurantList.restaurants = restaurants;
        contentContainer.append(restaurantList);
        loading.remove();
      }
    } catch (error) {
      loading.remove();
      showAlertError(error);
    }
  },
};

export default Home;
