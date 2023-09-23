import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import focusTrapInitiator from '../utils/focus-trap';

class App {
  constructor({
    menuOpen,
    menuClose,
    navList,
    mainContent,
  }) {
    this._menuOpen = menuOpen;
    this._menuClose = menuClose;
    this._navList = navList;
    this._mainContent = mainContent;

    this._initMenu();
    this._initFocusTrap();
  }

  _initMenu() {
    DrawerInitiator.init({
      menuOpen: this._menuOpen,
      menuClose: this._menuClose,
      navList: this._navList,
      mainContent: this._mainContent,
    });
  }

  _initFocusTrap() {
    focusTrapInitiator({
      container: this._navList,
      openBtn: this._menuOpen,
      closeBtn: this._menuClose,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._mainContent.innerHTML = await page.render();
    page.afterRender();
  }
}

export default App;
