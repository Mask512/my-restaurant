import data from '../../../public/data/DATA.json';
import '../components/restaurant-list';
import '../components/restaurant-item';
import createContainer from '../templates/content-container';

const Home = {
  async render() {
    const title = 'Explore Our Restaurants';
    return createContainer(title);
  },

  async afterRender() {
    const loading = document.querySelector('loading-wave');
    const { restaurants } = data;
    const restaurantList = document.createElement('restaurant-list');
    const contentContainer = document.querySelector('.content-container');
    restaurantList.restaurants = restaurants;
    contentContainer.append(restaurantList);
    loading.remove();
  },
};

export default Home;
