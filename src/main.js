import * as Utils from './utils.js';
import {filters, features} from './const.js';

import MapComponent from './components/map.js';
import PinsComponent from './components/pins.js';
import MainPinComponent from './components/main-pin.js';
import PinComponent from './components/pin.js';
import MapFilterComponent from './components/map-filter.js';

import NoticeComponent from './components/notice.js';

import {generateOrders} from './mock/orders.js';


// TODO если делаешь выборку дом то название переменной начинается с символа $

const $main = document.querySelector(`main`);
const mapComponent = new MapComponent();
Utils.render($main, mapComponent, Utils.RenderPosition.BEFOREEND);

const map = $main.querySelector(`.map`);
const pinsComponent = new PinsComponent();
Utils.render(map, pinsComponent, Utils.RenderPosition.BEFOREEND);
const mainPinComponent = new MainPinComponent();

Utils.render(pinsComponent.getElement(), mainPinComponent, Utils.RenderPosition.BEFOREEND);
Utils.render(map, new MapFilterComponent(filters, features), Utils.RenderPosition.BEFOREEND);
const $noticeComponent = new NoticeComponent();
Utils.render($main, $noticeComponent, Utils.RenderPosition.BEFOREEND);

const orders = generateOrders(8);

mainPinComponent.getElement().addEventListener(`mousedown`, () => {
  mapComponent.getElement().classList.remove(`map--faded`);
  orders.map((order) => {
    Utils.render(pinsComponent.getElement(), new PinComponent(order), Utils.RenderPosition.BEFOREEND);
  });
});
