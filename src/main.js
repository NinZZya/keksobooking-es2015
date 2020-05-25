import {createMapTemplate} from './components/map.js';
import {createNoiceTemplate} from './components/notice.js';
import {createMainPinTemplate} from './components/main-pin.js';


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const main = document.querySelector(`main`);
// Render the map
render(main, createMapTemplate(), `beforeend`);
const map = document.querySelector(`.map`);
render(map, createMainPinTemplate(), `beforeend`);

// Render the noice
render(main, createNoiceTemplate(), `beforeend`);
