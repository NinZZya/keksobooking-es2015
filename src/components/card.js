import * as Utils from '../utils.js';
import AbstractComponent from './abstract-component.js';
import {orderValues} from '../const.js';

const createCardTemplate = (card) => {
  const roomsText = Utils.getEndWord(card.offer.rooms, orderValues.roomTexts);
  const guestsText = Utils.getEndWord(card.offer.guests, orderValues.guestTexts);
  return (
    `<article class="map__card popup">
      <img src="${card.author.avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <button type="button" class="popup__close">Закрыть</button>
      <h3 class="popup__title">${card.offer.title}</h3>
      <p class="popup__text popup__text--address">${card.offer.address}</p>
      <p class="popup__text popup__text--price">${card.offer.price}&#x20bd;<span>/ночь</span></p>
      <h4 class="popup__type">${card.offer.type}</h4>
      <p class="popup__text popup__text--capacity">
        ${card.offer.rooms} ${roomsText} для ${card.offer.guests} ${guestsText}
      </p>
      <p class="popup__text popup__text--time">Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}</p>
      <ul class="popup__features">
        ${card.offer.features.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`)}
      </ul>
      <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
      <div class="popup__photos">
        ${card.offer.photos.map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)}
      </div>
    </article>`
  );
};

export default class CardComponent extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createCardTemplate(this._card);
  }
}
