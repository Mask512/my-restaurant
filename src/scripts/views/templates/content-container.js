import '../components/loading-wave';

const createContainer = (title) => `
    <section id="main-content-header">
      <h2 class="content-header-title cursive-text">
        ${title}
      </h2>
    </section>
    <section class="content-container"></section>
    <loading-wave></loading-wave>
    `;

export default createContainer;
