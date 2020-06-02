import * as Utils from './utils.js';

import МapComponent from './components/map.js';
import MapController from './controllers/map.js';
import NoticeComponent from './components/notice.js';

import {generateOrders} from './mock/orders.js';


const main = document.querySelector(`main`);
const mapComponent = new МapComponent();
Utils.render(main, mapComponent, Utils.RenderPosition.BEFOREEND);

const orders = generateOrders(8);

const mapController = new MapController(mapComponent, orders);
mapController.activeMainPin();

const noticeComponent = new NoticeComponent();
Utils.render(main, noticeComponent, Utils.RenderPosition.BEFOREEND);

