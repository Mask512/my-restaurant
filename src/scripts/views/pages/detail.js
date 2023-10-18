import { createContainer, createLoading } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import '../components/restaurant-detail';
import { showAlertError } from '../../utils/swal';

const Detail = {
  async render() {
    return createContainer('Please Wait') + createLoading();
  },

  async afterRender() {
    const title = document.querySelector('.content-header-title');
    const loading = document.querySelector('loading-wave');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const { error, message, restaurant } = await RestoSource.getRestoDetail(
        url.id,
      );

      if (error) {
        throw new Error(message);
      } else {
        title.textContent = restaurant.name;
        const restaurantDetail = document.createElement('restaurant-detail');
        const contentContainer = document.querySelector('.content-container');
        restaurantDetail.data = restaurant;
        contentContainer.append(restaurantDetail);
      }
    } catch (error) {
      title.textContent = 'Something Error';
      showAlertError(error);
    }
    loading.remove();
  },
};

export default Detail;
