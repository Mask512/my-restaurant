class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h1 class="brand">My Restaurant</h1>
        <button aria-label="Buka Menu Navigasi" class="menu-open material-icons">menu</button>
        <nav role="navigation" class="nav-container">
        <button aria-label="Tutup Menu Navigasi" class="menu-close material-icons">close</button>
          <ul class="nav-list">
          <li class="nav-item"><a href="#/" aria-current="page">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item"><a href="https://github.com/Mask512" target="_blank" rel="noopener noreferrer">About Us</a></li>
          </ul>
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
