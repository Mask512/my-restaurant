class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>copyrights &copy; 2023 - My Restaurant</p>
`;
  }
}

customElements.define('footer-element', FooterElement);
