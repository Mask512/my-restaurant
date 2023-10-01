const DrawerInitiator = {
  init({
    menuOpen,
    menuClose,
    navContainer,
  }) {
    menuOpen.addEventListener('click', (event) => {
      this._openDrawer(event, navContainer);
    });

    menuClose.addEventListener('click', (event) => {
      this._closeDrawer(event, navContainer);
    });
  },

  _openDrawer(event, navContainer) {
    event.stopPropagation();
    navContainer.classList.add('open');
  },

  _closeDrawer(event, navContainer) {
    event.stopPropagation();
    navContainer.classList.remove('open');
  },
};

export default DrawerInitiator;
