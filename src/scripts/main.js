import data from '../public/data/DATA.json';
import "./components/restaurant-list"

const main = () => {
  const { restaurants } = data;
  const restaurantList = document.querySelector('restaurant-list');
  restaurantList.restaurants = restaurants;
  
};

export default main;
