import { createContainer, createLoading } from '../templates/template-creator';

const Favorite = {
  async render() {
    const title = 'My Favorites';
    return createContainer(title) + createLoading();
  },

  async afterRender() {
    const loading = document.querySelector('loading-wave');
    setTimeout(() => {
      loading.remove();
    }, 3000);
  },
};

export default Favorite;
