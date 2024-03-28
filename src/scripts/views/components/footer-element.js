class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>copyrights &copy; 2024 - My Restaurant | mask512</p>
`;
  }
}

customElements.define('footer-element', FooterElement);
