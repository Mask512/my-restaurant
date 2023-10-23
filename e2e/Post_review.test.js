const resto = require('./helpers/restoElements');

Feature('Post A Review');

Scenario('Post Review on first restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement(resto.listElement);
  I.seeElement(resto.itemElement);

  const firstResto = await locate(resto.itemElement).first();
  const firstRestoButtonDetail = locate(firstResto).find('.btn-detail');

  I.click(firstRestoButtonDetail);

  const reviewerName = `reviewer name on ${new Date().toLocaleString()}`;
  const reviewMessage = `This my review message on ${new Date().toLocaleString()}`;
  const lastReviewerName = locate('.reviewer-name').last();
  const lastReviewMessage = locate('.review-message').last();
  I.dontSee(reviewerName, lastReviewerName);
  I.dontSee(reviewMessage, lastReviewMessage);

  I.seeElement('form#form-review');
  I.fillField('Name', reviewerName);
  I.fillField('Review', reviewMessage);
  I.click('Submit');

  I.seeElement('.swal2-popup');
  I.seeElement('.swal2-icon-success');
  I.waitToHide('.swal2-icon-success', 2);

  I.see(reviewerName, lastReviewerName);
  I.see(reviewMessage, lastReviewMessage);
});
