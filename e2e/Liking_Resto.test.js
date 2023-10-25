const assert = require('assert');
const resto = require('./helpers/restoElements');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('No Favorite Restaurant', '.content-header-title');
  I.dontSeeElement(resto.listElement);
  I.dontSeeElement(resto.itemElement);
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('No Favorite Restaurant', '.content-header-title');
  I.amOnPage('/');

  I.seeElement(resto.listElement);
  I.seeElement(resto.itemElement);

  const firstResto = locate(resto.itemElement).first();
  const firstRestoName = await I.grabTextFrom(locate(firstResto).find(resto.nameElement));
  const firstRestoButtonDetail = locate(firstResto).find('.btn-detail');

  I.click(firstRestoButtonDetail);

  I.seeElement('#likeButton');
  I.see('Add to Favorites');
  I.click('Add to Favorites', '#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement(resto.itemElement);
  const likedRestoName = await I.grabTextFrom(locate(resto.itemElement).find(resto.nameElement));

  assert.strictEqual(firstRestoName, likedRestoName);
});
