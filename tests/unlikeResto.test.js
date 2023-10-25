import {
  addButtonComponentWithRestoData,
} from './helpers/testFactories';
import FavoriteRestoIDB from '../src/scripts/data/favorite-resto';

describe('Unliking A Resto', () => {
  beforeEach(async () => {
    await FavoriteRestoIDB.putResto({ id: 1 });
    await addButtonComponentWithRestoData({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIDB.deleteResto(1);
  });

  it('should display unlike button when the resto has been favorited', () => {
    expect(
      document.querySelector('[aria-label="Remove resto from Favorites"]'),
    ).toBeTruthy();
  });

  it('should not display unlike button when the resto has been favorited', () => {
    expect(
      document.querySelector('[aria-label="Add Resto to Favorites"]'),
    ).toBeFalsy();
  });

  it('should be able to remove favorited resto from the list', async () => {
    document.querySelector('[aria-label="Remove resto from Favorites"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIDB.getFavorites()).toEqual([]);
  });

  it('should not throw error when user click unlike button if the unliked resto is not in the list', async () => {
    await FavoriteRestoIDB.deleteResto(1);
    document.querySelector('[aria-label="Remove resto from Favorites"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIDB.getFavorites()).toEqual([]);
  });
});
