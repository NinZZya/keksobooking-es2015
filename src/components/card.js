import * as Utils from '../utils.js';
import {orderValues} from '../const.js';


// TODO: Change forEach on map


const createCardTemplate = (card) => {
  return (
    `<article class="map__card popup">
      <img src="${card.author.avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <button type="button" class="popup__close">Закрыть</button>
      <h3 class="popup__title">${card.offer.title}</h3>
      <p class="popup__text popup__text--address">${card.offer.address}</p>
      <p class="popup__text popup__text--price">${card.offer.price}&#x20bd;<span>/ночь</span></p>
      <h4 class="popup__type">${card.offer.type}</h4>
      <p class="popup__text popup__text--capacity">
        ${card.offer.rooms} ${Utils.getEndWord(orderValues.roomTexts)} для ${card.offer.guests} ${Utils.getEndWord(orderValues.guestTexts)}
      </p>
      <p class="popup__text popup__text--time">Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}</p>
      <ul class="popup__features">
        ${card.offer.features.forEach((it) => `<li class="popup__feature popup__feature--${it}"></li>`)}
      </ul>
      <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
      <div class="popup__photos">
        ${card.offer.photos.forEach((it) => `<img src="${it}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)}
      </div>
    </article>`
  );
};

export default class CardComponent {
  constructor(card) {
    this._element = null;
    this._card = card;
  }

  getTemplate() {
    return createCardTemplate(this._card);
  }

  getElement() {
    if (!this._element) {
      this._element = Utils.createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
