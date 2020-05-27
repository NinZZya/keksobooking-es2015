import * as Utils from './utils.js';
import {createMapTemplate} from './components/map.js';
import {createNoiceTemplate} from './components/notice.js';
import {createPinsTemplate} from './components/pins.js';
import {createMainPinTemplate} from './components/main-pin.js';
import {createMapFilterTemplate} from './components/map-filter.js';
import {filters, features} from './const.js';
// import {generateOrders} from './mock/orders.js';

const main = document.querySelector(`main`);

Utils.render(main, createMapTemplate(), `beforeend`);
const map = main.querySelector(`.map`);
Utils.render(map, createPinsTemplate(), `beforeend`);
const mapPins = map.querySelector(`.map__pins`);
Utils.render(mapPins, createMainPinTemplate(), `beforeend`);
Utils.render(map, createMapFilterTemplate(filters, features), `beforeend`);
Utils.render(main, createNoiceTemplate(), `beforeend`);

// const orders = generateOrders(8);
