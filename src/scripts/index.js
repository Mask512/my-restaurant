import 'regenerator-runtime';
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/hero-bar';
import './views/components/footer-element';
import App from './views/app';

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const navList = document.querySelector('.nav-list');
const mainContent = document.querySelector('#main-content');

const app = new App({
  menuOpen,
  menuClose,
  navList,
  mainContent,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
