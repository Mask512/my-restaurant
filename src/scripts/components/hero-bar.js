class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-text">
        <h2 class="hero-title">Welcome to My Restaurant</h2>
        <p>Discover the finest dining experience.</p>
    </div>
    `;
  }
}
customElements.define('hero-bar', HeroBar);
