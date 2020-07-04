import {render, RenderPosition, isLeftMouseButtonPressed, isEnterPressed, throttle} from './utils/utils';
import * as coordsUtil from './utils/coords';
import {Constant} from './constants';

import API from './api';

import OrdersModel from './models/orders';

import МapComponent from './components/map';
import NoticeComponent from './components/notice';
import PinsComponent from './components/pins';
import MainPinComponent from './components/main-pin';
import MapFiltersComponent from './components/map-filter';

import PinsController from './controllers/pins';
import NoticeController from './controllers/notice';

// import {generateOrders} from './mock/orders';

// const orders = generateOrders(8);
const DEFAULT_FILTER_INDEX = 0;
const THROTTLE_MS = 500;
const END_POINT = `https://javascript.pages.academy/keksobooking`;

const api = new API(END_POINT);
const ordersModel = new OrdersModel();
const mapComponent = new МapComponent();
const noticeComponent = new NoticeComponent();
const pinsComponent = new PinsComponent();
const mainPinComponent = new MainPinComponent();
const mapFiltersComponent = new MapFiltersComponent();
const pinsController = new PinsController(pinsComponent, mainPinComponent);
const noticeController = new NoticeController(noticeComponent);


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
  noticeComponent.getAddress().value = `${coords.x}, ${coords.y}`;
};

/**
 * @description Сброс фильтров на значение по умолчанию
 */

const setDefaultFilters = () => {
  mapFiltersComponent.getFilters().forEach((filterElement) => {
    if (filterElement.id !== `housing-features`) {
      filterElement.value = filterElement[DEFAULT_FILTER_INDEX].value;
    }
  });

  mapFiltersComponent.getFeaturesFilters().forEach((featuresFilterElement) => {
    featuresFilterElement.checked = false;
  });
};

/**
 * @description Событие на изменение фильтров
 */

const setFilterToOrdersModel = () => {
  const features = [];
  mapFiltersComponent.getFilters().forEach((filterElement) => {
    if (filterElement.id !== `housing-features`) {
      ordersModel.filters[filterElement.id].value = filterElement.value;
    }
  });

  mapFiltersComponent.getFeaturesFilters().forEach((featuresFilterElement) => {
    if (featuresFilterElement.checked) {
      features.push(featuresFilterElement.value);
    }
  });

  ordersModel.filters[`housing-features`].value = features;
};

/**
* @description Событие на изменение фильтров
*/

const mapFiltersHandler = () => {
  setFilterToOrdersModel();
  pinsController.renderPins(ordersModel.getOrdersByFilters());
};

/**
 * @description Нажатие клавиши мыши по главному пину
 * @param {*} evt Событие
 */

const mainPinMouseDownHandler = (evt) => {
  if (isLeftMouseButtonPressed(evt)) {
    start();

    // Зафиксировать текущие координаты главного пина
    coordsEvt.x = evt.clientX;
    coordsEvt.y = evt.clientY;
    // Активировать обработчик события на перемещение мыши у главного пина
    document.addEventListener(`mousemove`, mainPinMouseMoveHandler);
    // Активировать обработчик события на отпускание клавиши мыши у главного пина
    document.addEventListener(`mouseup`, mainPinMouseUpHandler);
  }
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

const mainPinKeyDownHandler = (evt) => {
  if (isEnterPressed(evt)) {
    start();
  }
};

/**
 *
 * @description Функции для события submit у формы
 */

const formSubmitHandler = (evt) => {
  if (evt.target.checkValidity()) {
    // backendController.upload(evt.target);
    evt.preventDefault();
  }
};

const activateMap = (orders) => {
  // Получить координаты главного пина
  coordsMainPin = pinsController.getMainPinCoords();
  // Конвертация и установка координат
  setCoordsToAdress(coordsMainPin);
  // Переключить состояние карты на активное
  mapComponent.toggleState();
  // Переключить форму в активное состояние.
  noticeController.toggleState();
  // Запустить валидацию формы.
  noticeController.runValidity();
  // Загрузить обработчики событий preview для аватара и изображений
  noticeController.runLoadImagesListeners();
  // // Положить данные в модель данных
  ordersModel.setOrders(orders);
  // Установить контейнер, куда отрисовывать карточку
  pinsController.setCardContainer(mapComponent.getElement());
  // Установить место, куда отрисовывать карточку
  pinsController.setCardPlace(mapFiltersComponent.getElement());
  // Установить функцию для события отправки формы
  noticeComponent.formSubmitHandler = formSubmitHandler;
  // Запустить обработчики события для отправки формы
  noticeComponent.addFormSubmitListeners();
  // Установить callbak для обработчика события кнопки reset
  noticeComponent.formResetHandler = deactivateMap;
  // Запустить обработчики события кнопки reset
  noticeComponent.addFormResetListeners();
  setDefaultFilters();
  if (ordersModel.isOrdersExist()) {
    mapFiltersComponent.filtersHandler = throttle(mapFiltersHandler, THROTTLE_MS);
    mapFiltersComponent.addFilterListeners();
    mapFiltersComponent.toggleStateFilters();
    // Отрисовать пины на карте
    mapFiltersHandler();
  }
};

/**
 * @param {Object} evt Событие
  * @description Деактивация карты
  */

const deactivateMap = () => {
  // Переключить состояние карты на неактивное
  mapComponent.toggleState();
  // Установить значение пина по умолчанию в поле адресс формы
  setCoordsToAdress(coordsMainPin, true);
  // Установка фильтров по умолчанию
  setDefaultFilters();
  // Деактивировать контроллер контейнера с пинами (сброс настроек компонента по умолчанию)
  pinsController.deactivate();
  // Деактивировать контроллер контейнера с пинами (сброс настроек компонента по умолчанию)
  noticeController.deactivate();
  // Удалить обработчик отправки формы
  noticeComponent.removeFormSubmitListeners();
  // Удалить обработчик события кнопки reset
  noticeComponent.removeFormResetListeners();
  // Удалить обработчик события фильтров
  mapFiltersComponent.removeFilterListeners();
};

const start = () => {
  if (!mapComponent.isActivate()) {
    api.load(activateMap);
  }
};


render(Constant.mainContainer, mapComponent, RenderPosition.BEFOREEND);
render(Constant.mainContainer, noticeComponent, RenderPosition.BEFOREEND);
render(mapComponent, pinsComponent, RenderPosition.AFTERBEGIN);
render(pinsComponent, mainPinComponent, RenderPosition.BEFOREEND);
render(mapComponent, mapFiltersComponent, RenderPosition.BEFOREEND);

pinsController.activate();
noticeController.activate();

if (mapFiltersComponent.isFiltersActivate()) {
  mapFiltersComponent.toggleStateFilters();
}

mainPinComponent.mainPinMouseDownHandler = mainPinMouseDownHandler;
mainPinComponent.mainPinKeyDownHandler = mainPinKeyDownHandler;
mainPinComponent.addMainPinListeners();
