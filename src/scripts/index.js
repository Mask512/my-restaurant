import 'regenerator-runtime';
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/hero-bar';
import './views/components/footer-element';
import App from './views/app';
import swRegister from './utils/sw-register';

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const navContainer = document.querySelector('.nav-container');
const mainContent = document.querySelector('#main-content');

const app = new App({
  menuOpen,
  menuClose,
  navContainer,
  mainContent,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  mainContent.scrollIntoView();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  mainContent.scrollIntoView();
});
