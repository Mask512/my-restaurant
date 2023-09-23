import createContainer from '../templates/content-container';

const Favorite = {
  async render() {
    const title = 'My Favorites';
    return createContainer(title);
  },

  async afterRender() {
    const loading = document.querySelector('loading-wave');
    setTimeout(() => {
      loading.remove();
    }, 3000);
  },
};

export default Favorite;
