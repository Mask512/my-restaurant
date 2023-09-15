class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h1 class="brand">My Restaurant</h1>
        <button aria-label="Buka Menu Navigasi" class="menu-open material-icons">menu</button>
        <nav role="navigation" id="nav-links">
          <ul class="nav-list">
            <li class="nav-item"><a href="#home">Home</a></li>
            <li class="nav-item"><a href="#favorite">Favorite</a></li>
            <li class="nav-item"><a href="#about-us">About Us</a></li>
            <li class="nav-item"><button aria-label="Tutup Menu Navigasi" class="menu-close material-icons">close</button></li>
          </ul>
        </nav>        
    `;
    const menuClose = document.querySelector('.menu-close');
    const menuOpen = document.querySelector('.menu-open');
    const navList = document.querySelector('.nav-list');
    this.toggleMenu(menuClose,navList);
    this.toggleMenu(menuOpen,navList);
  }

  toggleMenu(menu, navlist) {
    menu.addEventListener('click', (e) => {
      e.stopPropagation();
      navlist.classList.toggle('open');
    });
  }
}

customElements.define('app-bar', AppBar);
