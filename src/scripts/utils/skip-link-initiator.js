const skipInitiator = {
  init(skip, contentId) {
    skip.addEventListener('click', () => {
      const content = document.getElementById(contentId);
      this._skipTo(content);
    });
  },
  _skipTo(content) {
    content.setAttribute('tabindex', '-1');
    content.focus();
  },
};

export default skipInitiator;
