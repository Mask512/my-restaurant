import { addButtonComponent, addButtonComponentWithRestoData } from './helpers/testFactories';
import FavoriteRestoIDB from '../src/scripts/data/favorite-resto';

describe('Liking A Resto', () => {
  it('should show the loading before render button', () => {
    addButtonComponent();
    expect(document.querySelector('.loading')).toBeTruthy();
  });

  it('should remove the loading after render button', async () => {
    await addButtonComponentWithRestoData({ id: 1 });
    expect(document.querySelector('.loading')).toBeFalsy();
  });

  it('should show the Add Resto to Favorites button when the resto has not been liked before', async () => {
    await addButtonComponentWithRestoData({ id: 1 });
    expect(
      document.querySelector('[aria-label="Add Resto to Favorites"]'),
    ).toBeTruthy();
  });

  it('should show the Remove from Favorites when the resto has not been liked before', async () => {
    await addButtonComponentWithRestoData({ id: 1 });
    expect(
      document.querySelector('[aria-label="Remove from Favorites"]'),
    ).toBeFalsy();
  });

  it('should be able to like resto', async () => {
    await addButtonComponentWithRestoData({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const resto = await FavoriteRestoIDB.getResto(1);
    expect(resto).toEqual({ id: 1 });
    await FavoriteRestoIDB.deleteResto(1);
  });

  it('should not add a resto again when its already favorited', async () => {
    await addButtonComponentWithRestoData({ id: 1 });
    await FavoriteRestoIDB.putResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIDB.getFavorites()).toEqual([{ id: 1 }]);
    await FavoriteRestoIDB.deleteResto(1);
  });

  it('should not add resto when it has no id', async () => {
    await addButtonComponentWithRestoData({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIDB.getFavorites()).toEqual([]);
  });
});
