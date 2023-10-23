const resto = require('./helpers/restoElements');

Feature('Unliking Resto');

// Adding the number of restaurants to be liked
const likingResto = async (I, numberOfItems) => {
  I.amOnPage('/');
  I.seeElement(resto.listElement);
  I.seeElement(resto.itemElement);
  const availableResto = await I.grabNumberOfVisibleElements(
    resto.itemElement,
  );

  if (numberOfItems > availableResto) {
    // eslint-disable-next-line no-param-reassign
    numberOfItems = availableResto;
    console.log(
      `The number of items: ${numberOfItems} is adjusted to ${availableResto} because the specified quantity exceeds the available visible items.`,
    );
  }

  for (let i = 1; i <= numberOfItems; i++) {
    const restoButtonDetail = locate(resto.itemElement)
      .at(i)
      .find('.btn-detail');

    I.click(restoButtonDetail);

    I.seeElement('#likeButton');
    I.see('Add to Favorites');
    I.click('Add to Favorites', '#likeButton');

    I.amOnPage('/');
    I.seeElement(resto.listElement);
    I.seeElement(resto.itemElement);
  }
};

Feature('Unliking Resto');

Before(({ I }) => {
  likingResto(I, 2);
});

Scenario('showing liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('My Favorites', '.content-header-title');
  I.seeElement(resto.itemElement);
});

Scenario('Unliking one and or more restaurant', async ({ I }) => {
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
