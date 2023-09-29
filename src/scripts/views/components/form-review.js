import RestoSource from '../../data/resto-source';
import { showAlertError, showAlertSuccess } from '../../utils/swal';

class FormReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <form id="form-review">
    <h4 class="form-title">Add a Review</h4>
      <label for="name">Name :</label>
      <input type="text" id="name" required>
      <label for="review">Review :</label>
      <textarea name="review" id="review" required></textarea>
      <button aria-label="Reset Review" type="reset">Reset</button>
      <button aria-label="Submit Review" type="submit">Submit</button>
    </form>`;
    this._submitEvent();
  }

  _submitEvent() {
    const formElement = this.querySelector('#form-review');
    const inputNameElement = this.querySelector('#name');
    const inputReviewElement = this.querySelector('#review');
    const dataId = this.getAttribute('data-id');

    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._formHandler(inputNameElement, inputReviewElement, dataId);
      this.render();
    });
  }

  async _formHandler(inputName, inputReview, id) {
    const data = {
      name: inputName.value,
      review: inputReview.value,
      id,
    };

    const response = await RestoSource.postReview(data);
    const { error, message, customerReviews } = response;
    if (error) {
      showAlertError(message);
    } else {
      const formSubmittedEvent = new CustomEvent('formSubmitted', {
        detail: customerReviews,
      });
      this.dispatchEvent(formSubmittedEvent);
      showAlertSuccess('Review Submitted');
    }
  }
}

customElements.define('form-review', FormReview);
