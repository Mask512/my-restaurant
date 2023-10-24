import 'regenerator-runtime';
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/footer-element';
import App from './views/app';
import swRegister from './utils/sw-register';
import skipInitiator from './utils/skip-link-initiator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const navContainer = document.querySelector('.nav-container');
const mainContent = document.querySelector('#main-content');
const skipButton = document.querySelector('.skip-to-content');

const app = new App({
  menuOpen,
  menuClose,
  navContainer,
  mainContent,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipInitiator.init(skipButton, 'main-content');
});

window.addEventListener('load', () => {
  app.renderPage();
  skipInitiator.init(skipButton, 'main-content');
  swRegister();
});
