const resto = require('./helpers/restoElements');

Feature('Unliking Resto');

// Adding the number of restaurants to be liked
const likeRestoItems = async (I, numberOfItems) => {
  I.amOnPage('/');
  I.seeElement(resto.listElement);
  I.seeElement(resto.itemElement);
  const visibleLikedResto = await I.grabNumberOfVisibleElements(
    resto.itemElement,
  );

  if (numberOfItems > visibleLikedResto) {
    // eslint-disable-next-line no-param-reassign
    numberOfItems = visibleLikedResto;
    console.log(`The number of items: ${numberOfItems} is adjusted to ${visibleLikedResto} because the specified quantity exceeds the available visible items.`);
  }

  for (let i = 1; i <= numberOfItems; i++) {
    const restoButtonDetail = locate(resto.itemElement)
      .at(i)
      .find('.btn-detail');

    I.click(restoButtonDetail);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/');
    I.seeElement(resto.listElement);
    I.seeElement(resto.itemElement);
  }
};

Feature('Unliking Resto');

Before(({ I }) => {
  likeRestoItems(I, 22);
});

Scenario('showing liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('My Favorites', '.content-header-title');
  I.seeElement(resto.itemElement);
});

Scenario('Unliking one or more restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.seeElement(resto.itemElement);
  const visibleLikedResto = await I.grabNumberOfVisibleElements(
    resto.itemElement,
  );
  for (let i = visibleLikedResto; i >= 1; i--) {
    const restoButtonDetail = locate(resto.itemElement)
      .at(i)
      .find('.btn-detail');

    I.click(restoButtonDetail);

    I.seeElement('#likeButton');
    I.see('Remove from Favorites');
    I.click('Remove from Favorites', '#likeButton');
    I.amOnPage('/#/favorite');
  }

  I.dontSeeElement(resto.itemElement);
});
