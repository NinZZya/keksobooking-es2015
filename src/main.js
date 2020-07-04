import {render, RenderPosition} from './utils/utils.js';
import * as coordsUtil from './utils/coords.js';

import OrdersModel from './models/orders.js';

import МapComponent from './components/map.js';
import NoticeComponent from './components/notice.js';
import PinsComponent from './components/pins.js';
import MainPinComponent from './components/main-pin.js';
import MapFilterComponent from './components/map-filter.js';

import PinsController from './controllers/pins.js';

import { generateOrders } from './mock/orders.js';

const orders = generateOrders(8);
const DEFAULT_FILTER_INDEX = 0;

const mainElement = document.querySelector(`main`);

const ordersModel = new OrdersModel();
const mapComponent = new МapComponent();
const noticeComponent = new NoticeComponent();
const pinsComponent = new PinsComponent();
const mainPinComponent = new MainPinComponent();
const mapFilterComponent = new MapFilterComponent();
const pinsController = new PinsController(pinsComponent, mainPinComponent, ordersModel);

// Координаты главного пина
let coordsMainPin = null;
// Координаты события
const coordsEvt = coordsUtil.create();
// Сдвиг координат главного пина
const coordsShift = coordsUtil.create();

const setCoordsToAdress = (coords, isDefault) => {
  // Сконвертировать координаты в адресс
  coords = isDefault
    ? pinsController.getMainPinDefaultCoords()
    : coordsUtil.convertToLocation(coords);
  // Установить адресс в форму
  // adFormController.setAddress(coords);
};

/**
 * @description Сброс фильтров на значение по умолчанию
 */

const setDefaultFilters = () => {
  mapFilterComponent.getMapFilters().forEach((filterElement) => {
    if (filterElement.id !== `housing-features`) {
      filterElement.value = filterElement[DEFAULT_FILTER_INDEX].value;
    }
  });

  mapFilterComponent.getMapFeaturesFilters().forEach((featuresFilterElement) => {
    featuresFilterElement.checked = false;
  });
};

/**
 * @description Событие на изменение фильтров
 */

const setFilterToOrdersModel = () => {
  const features = [];
  mapFilterComponent.getMapFilters().forEach((filterElement) => {
    if (filterElement.id !== `housing-features`) {
      ordersModel.filters[filterElement.id].value = filterElement.value;
    }
  });

  mapFilterComponent.getMapFeaturesFilters().forEach((featuresFilterElement) => {
    if (featuresFilterElement.checked) {
      features.push(featuresFilterElement.value);
    }
  });

  ordersModel.filters[`housing-features`].value = features;
};

/**
* @description Событие на изменение фильтров
*/

function mapFiltersHandler() {
  setFilterToOrdersModel();
  pinsController.renderPins(ordersModel.getOrdersByFilters());
}

/**
 * @description Нажатие клавиши мыши по главному пину
 * @param {*} evt Событие
 */

const mainPinMouseDownHandler = (evt) => {
  start();

  // Зафиксировать текущие координаты главного пина
  coordsEvt.x = evt.clientX;
  coordsEvt.y = evt.clientY;
  // Активировать обработчик события на перемещение мыши у главного пина
  document.addEventListener(`mousemove`, mainPinMouseMoveHandler);
  // Активировать обработчик события на отпускание клавиши мыши у главного пина
  document.addEventListener(`mouseup`, mainPinMouseUpHandler);
};
/**
 * @description Перемещение мыши у главного пина
 * @param {*} evt Событие
 */

const mainPinMouseMoveHandler = (evt) => {
  evt.preventDefault();
  // Расчитать смещение главного пина
  coordsShift.x = coordsEvt.x - evt.clientX;
  coordsShift.y = coordsEvt.y - evt.clientY;
  // Зафиксировать текущие координаты главного пина
  coordsEvt.x = evt.clientX;
  coordsEvt.y = evt.clientY;
  // Вычислить координаты главного пина в допустимых пределах карты
  coordsMainPin = coordsUtil.set(
      mainPinComponent.getElement().offsetLeft - coordsShift.x,
      mainPinComponent.getElement().offsetTop - coordsShift.y
  );
  // Установить координаты главного пина в допустимых пределах карты
  mainPinComponent.getElement().style.left = `${coordsMainPin.x}px`;
  mainPinComponent.getElement().style.top = `${coordsMainPin.y}px`;
  // Конвертация и установка координат
  setCoordsToAdress(coordsMainPin);
};

/**
 * @description Отпускание клавиши мыши у главного пина
 * @param {*} evt Событие
 */

const mainPinMouseUpHandler = (evt) => {
  evt.preventDefault();
  document.removeEventListener(`mousemove`, mainPinMouseMoveHandler);
  document.removeEventListener(`mouseup`, mainPinMouseUpHandler);
};

const activateMap = () => {
  // Получить координаты главного пина
  coordsMainPin = pinsController.getMainPinCoords();
  // Конвертация и установка координат
  setCoordsToAdress(coordsMainPin);
  // Переключить состояние карты на активное
  mapComponent.toggleState();
  // // Переключить форму в активное состояние.
  // adFormController.toggleState();
  // // Запустить валидацию формы.
  // adFormController.runValidity();
  // // Загрузить обработчики событий preview для аватара и изображений
  // adFormController.runLoadImagesListeners();
  // // Положить данные в модель данных
  ordersModel.setOrders(orders);
  // Установить контейнер, куда отрисовывать карточку
  pinsController.setCardContainer(mapComponent.getElement());
  // Установить место, куда отрисовывать карточку
  pinsController.setCardPlace(mapFilterComponent.getElement());
  // // Установить функцию для события отправки формы
  // adFormComponent.adFormSubmitHandler = adFormSubmitHandler;
  // // Запустить обработчики события для отправки формы
  // adFormComponent.addAdFormSubmitListener();
  // // Установить callbak для обработчика события кнопки reset
  // adFormComponent.adFormResetHandler = deactivateMap;
  // // Запустить обработчики события кнопки reset
  // adFormComponent.addAdFormResetListener();
  setDefaultFilters();
  if (ordersModel.isOrdersExist()) {
    // mainMapComponent.mapFiltersHandler = util.debounce(mapFiltersHandler);
    // mainMapComponent.toggleStateMapFilters();
    // mainMapComponent.addMapFiltersListener();
    // Отрисовать пины на карте
    mapFiltersHandler();
  }
};

const start = () => {
  if (!mapComponent.isActivate()) {
    activateMap();
  }
};


render(mainElement, mapComponent.getElement(), RenderPosition.BEFOREEND);
render(mainElement, noticeComponent.getElement(), RenderPosition.BEFOREEND);
render(mapComponent.getElement(), pinsComponent.getElement(), RenderPosition.AFTERBEGIN);
render(pinsComponent.getElement(), mainPinComponent.getElement(), RenderPosition.BEFOREEND);
render(mapComponent.getElement(), mapFilterComponent.getElement(), RenderPosition.BEFOREEND);

pinsController.activate();

mainPinComponent.setMouseDownHandler(mainPinMouseDownHandler);

// Установить обработчик клика клавиши у главного пина
mainPinComponent.setKeyDownHandler(start);
