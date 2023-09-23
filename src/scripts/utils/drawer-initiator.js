const DrawerInitiator = {
  init({
    menuOpen,
    menuClose,
    navList,
    mainContent,
  }) {
    menuOpen.addEventListener('click', (event) => {
      this._openDrawer(event, navList);
    });

    menuClose.addEventListener('click', (event) => {
      this._closeDrawer(event, navList);
    });

    mainContent.addEventListener('click', (event) => {
      this._closeDrawer(event, navList);
    });
  },

  _openDrawer(event, navlist) {
    event.stopPropagation();
    navlist.classList.add('open');
  },

  _closeDrawer(event, navlist) {
    event.stopPropagation();
    navlist.classList.remove('open');
  },
};

export default DrawerInitiator;
