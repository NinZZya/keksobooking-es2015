import {getEndWord} from '../utils/utils';
import AbstractComponent from './abstract-component';
import {Constant} from '../constants';

const ROOM_TEXTS = [`комната`, `комнаты`, `комнат`];
const GUEST_TEXTS = [`гостя`, `гостей`, `гостей`];

const getTitle = (order) => order.offer.title ? `<h3 class="popup__title">${order.offer.title}</h3>` : ``;
const getAddress = (order) => order.offer.address ? `<p class="popup__text popup__text--address">${order.offer.address}</p>` : ``;
const getPrice = (order) => order.offer.price ? `<p class="popup__text popup__text--price">${order.offer.price.toLocaleString()}₽/ночь</p>` : ``;
const getType = (order) => order.offer.type ? `<h4 class="popup__type">${Constant.bookingType[order.offer.type].title}</h4>` : ``;
const getDescription = (order) => order.offer.description ? `<p class="popup__description">${order.offer.description}</p>` : ``;

const getCapacity = (order) => {
  if (order.offer.rooms && order.offer.guests) {
    const roomsText = getEndWord(order.offer.rooms, ROOM_TEXTS);
    const guestsText = getEndWord(order.offer.guests, GUEST_TEXTS);
    return (
      `<p class="popup__text popup__text--capacity">
        ${order.offer.rooms} ${roomsText} для ${order.offer.guests} ${guestsText}
      </p>`
    );
  }

  return ``;
};

const getOrderTimes = (order) => {
  if (order.offer.checkin && order.offer.checkout) {
    return `<p class="popup__text popup__text--time">Заезд после ${order.offer.checkin}, выезд до ${order.offer.checkout}</p>`;
  }

  return ``;
};

const getFeatures = (order) => {
  if (order.offer.features.length) {
    return (
      `<ul class="popup__features">
        ${order.offer.features.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join(`\n`)}
      </ul>`
    );
  }

  return ``;
};

const getPhotos = (order) => {
  if (order.offer.photos.length) {
    return (
      `<div class="popup__photos">
        ${order.offer.photos.map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join(`\n`)}
      </div>`
    );
  }

  return ``;
};

const createCardTemplate = (order) => {

  const avatar = order.author.avatar || Constant.defaultAvatar;
  return (
    `<article class="map__card popup">
      <img src="${avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <button type="button" class="popup__close">Закрыть</button>
      ${getTitle(order)}
      ${getAddress(order)}
      ${getPrice(order)}
      ${getType(order)}
      ${getCapacity(order)}
      ${getOrderTimes(order)}
      ${getFeatures(order)}
      ${getDescription(order)}
      ${getPhotos(order)}
    </article>`
  );
};

export default class CardComponent extends AbstractComponent {
  constructor(order) {
    super();
    this._order = order;
    this.closeCardClickHandler = null;
    this.documentKeyDownHandler = null;
  }

  getTemplate() {
    return createCardTemplate(this._order);
  }

  addCardListeners() {
    this.getElement().addEventListener(`click`, this.closeCardClickHandler);
    document.addEventListener(`keydown`, this.documentKeyDownHandler);
  }

  removeCardListeners() {
    document.removeEventListener(`keydown`, this.documentKeyDownHandler);
  }
}
