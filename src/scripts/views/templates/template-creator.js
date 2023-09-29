import '../components/loading-wave';

const createContainer = (title) => `
    <section id="main-content-header">
      <h2 class="content-header-title text-cursive">
        ${title}
      </h2>
    </section>
    <section class="content-container"></section>
    `;

const createLoading = () => '<loading-wave></loading-wave>';

const createReviewCard = (customerReview) => {
  const { name, review, date } = customerReview;
  return `
  <article class="review-card">
    <blockquote class="text-bold text-italic">${review}</blockquote>
    <div class="review-card-data">
        <cite class="text-bold">${name}</cite>
        <time class="text-italic">${date}</time>
    </div>
  </article>
  `;
};

export {
  createContainer,
  createLoading,
  createReviewCard,
};
