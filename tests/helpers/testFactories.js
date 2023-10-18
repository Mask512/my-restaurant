import '../../src/scripts/views/components/favorite-button';

const addButtonComponent = () => {
  document.body.innerHTML = '<favorite-button></favorite-button>';
};

const addButtonComponentWithRestoData = async (resto) => {
  document.body.innerHTML = '<favorite-button></favorite-button>';
  const favoriteButton = document.querySelector('favorite-button');
  favoriteButton.data = resto;
  await favoriteButton._renderButton();
};

export { addButtonComponent, addButtonComponentWithRestoData };
