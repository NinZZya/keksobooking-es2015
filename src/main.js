import {createMapTemplate} from './components/map.js';
import {createNoiceTemplate} from './components/notice.js';
import {createPinsTemplate} from './components/pins.js';
import {createMainPinTemplate} from './components/main-pin.js';
import {createMapFilterTemplate} from './components/map-filter.js';
import {filters, features} from './const.js';


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const main = document.querySelector(`main`);
// Render the map
render(main, createMapTemplate(), `beforeend`);
const map = document.querySelector(`.map`);
render(map, createPinsTemplate(), `beforeend`);
const mapPins = document.querySelector(`.map__pins`);
render(mapPins, createMainPinTemplate(), `beforeend`);
render(map, createMapFilterTemplate(filters, features), `beforeend`);

// Render the noice
render(main, createNoiceTemplate(), `beforeend`);
