import itActsAsFavoriteRestoModel from './contracts/favoriteRestoContracts';
import FavoriteRestoIDB from '../src/scripts/data/favorite-resto';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIDB.getFavorites()).forEach(async (resto) => {
      await FavoriteRestoIDB.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIDB);
});
