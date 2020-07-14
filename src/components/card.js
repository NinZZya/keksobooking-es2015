import {getEndWord} from '../utils/utils';
import AbstractComponent from './abstract-component';
import {Constant} from '../constants/constants';

const ROOM_TEXTS = [`комната`, `комнаты`, `комнат`];
const GUEST_TEXTS = [`гостя`, `гостей`, `гостей`];
const BTN_CLASS = `.popup__close`;

const getTitle = (title) => title ? `<h3 class="popup__title">${title}</h3>` : ``;
const getAddress = (address) => address ? `<p class="popup__text popup__text--address">${address}</p>` : ``;
const getPrice = (price) => price ? `<p class="popup__text popup__text--price">${price.toLocaleString()}₽/ночь</p>` : ``;
const getType = (type) => type ? `<h4 class="popup__type">${Constant.bookingType[type].title}</h4>` : ``;
const getDescription = (description) => description ? `<p class="popup__description">${description}</p>` : ``;

const getCapacity = (rooms, guests) => {
  if (rooms && guests) {
    const roomsText = getEndWord(rooms, ROOM_TEXTS);
    const guestsText = getEndWord(guests, GUEST_TEXTS);
    return (
      `<p class="popup__text popup__text--capacity">
        ${rooms} ${roomsText} для ${guests} ${guestsText}
      </p>`
    );
  }

  return ``;
};

const getOrderTimes = (checkin, checkout) => {
  if (checkin && checkout) {
    return `<p class="popup__text popup__text--time">Заезд после ${checkin}, выезд до ${checkout}</p>`;
  }

  return ``;
};

const getFeatures = (features) => {
  if (features.length) {
    return (
      `<ul class="popup__features">
        ${features.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join(`\n`)}
      </ul>`
    );
  }

  return ``;
};

const getPhotos = (photos) => {
  if (photos.length) {
    return (
      `<div class="popup__photos">
        ${photos.map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join(`\n`)}
      </div>`
    );
  }

  return ``;
};

const createCardTemplate = (order) => {
  const {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    description,
    photos,
  } = order.offer;

  const avatar = order.author.avatar;
  return (
    `<article class="map__card popup">
      <img src="${avatar || Constant.defaultAvatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <button type="button" class="popup__close">Закрыть</button>
      ${getTitle(title)}
      ${getAddress(address)}
      ${getPrice(price)}
      ${getType(type)}
      ${getCapacity(rooms, guests)}
      ${getOrderTimes(checkin, checkout)}
      ${getFeatures(features)}
      ${getDescription(description)}
      ${getPhotos(photos)}
    </article>`
  );
};

export default class CardComponent extends AbstractComponent {
  constructor(order) {
    super();
    this._order = order;
    this.closeBtnCardClickHandler = null;
    this.documentKeyDownHandler = null;
  }

  getTemplate() {
    return createCardTemplate(this._order);
  }

  addEventListeners() {
    this.getElement().querySelector(BTN_CLASS).addEventListener(`click`, this.closeBtnCardClickHandler);
    document.addEventListener(`keydown`, this.documentKeyDownHandler);
  }

  removeEventListeners() {
    document.removeEventListener(`keydown`, this.documentKeyDownHandler);
  }
}
