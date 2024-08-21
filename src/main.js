import './style.css'; 
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

loadHome();

document.querySelector('#home-tab').addEventListener('click', loadHome);
document.querySelector('#menu-tab').addEventListener('click', loadMenu);
document.querySelector('#contact-tab').addEventListener('click', loadContact);