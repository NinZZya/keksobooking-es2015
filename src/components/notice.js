import * as Utils from '../utils.js';

const fieldsetHeader = (
  `<fieldset class="ad-form-header">
    <legend class="ad-form-header__title">Ваша фотография (для карты)</legend>
    <div class="ad-form-header__upload">
      <div class="ad-form-header__preview">
        <img src="img/muffin-grey.svg" alt="Аватар пользователя" width="40" height="44">
      </div>
      <div class="ad-form__field">
        <input type="file" id="avatar" name="avatar" class="ad-form-header__input visually-hidden">
        <label class="ad-form-header__drop-zone" for="avatar">Загрузить<br>фото...</label>
      </div>
      <p class="ad-form-header__info">Заполните все обязательные поля, назначьте цену, загрузите фотографии. Придумайте интересное описание. Оно сделает объявление более живым и привлекательным. Получившееся объявление должно давать гостям полное представление о вашем жилье.</p>
    </div>
  </fieldset>`
);

const fieldsetTitle = (
  `<fieldset class="ad-form__element ad-form__element--wide">
    <label class="ad-form__label" for="title">Заголовок объявления</label>
    <input id="title" name="title" type="text" placeholder="Милая, уютная квартирка в центре Токио">
  </fieldset>`
);

const fieldsetAddress = (
  `<fieldset class="ad-form__element ad-form__element--wide">
    <label class="ad-form__label" for="address">Адрес</label>
    <input id="address" name="address" type="text">
  </fieldset>`
);

const fieldsetType = (
  `<fieldset class="ad-form__element">
    <label class="ad-form__label" for="type">Тип жилья</label>
    <select id="type" name="type">
      <option value="bungalo">Бунгало</option>
      <option value="flat" selected>Квартира</option>
      <option value="house">Дом</option>
      <option value="palace">Дворец</option>
    </select>
  </fieldset>`
);

const fieldsetPrice = (
  `<fieldset class="ad-form__element">
    <label class="ad-form__label" for="price">Цена за ночь, руб.</label>
    <input id="price" name="price" type="number" placeholder="5000" min="1000" max="1000000">
  </fieldset>`
);

const fieldsetTime = (
  `<fieldset class="ad-form__element ad-form__element--time">
    <label class="ad-form__label" for="timein">Время заезда и выезда</label>
    <select id="timein" name="timein">
      <option value="12:00" selected>После 12</option>
      <option value="13:00">После 13</option>
      <option value="14:00">После 14</option>
    </select>
    <select id="timeout" name="timeout" title="Time to go out">
      <option value="12:00" selected>Выезд до 12</option>
      <option value="13:00">Выезд до 13</option>
      <option value="14:00">Выезд до 14</option>
    </select>
  </fieldset>`
);

const fieldsetRooms = (
  `<fieldset class="ad-form__element">
    <label class="ad-form__label" for="room_number">Количество комнат</label>
    <select id="room_number" name="rooms">
      <option value="1" selected>1 комната</option>
      <option value="2">2 комнаты</option>
      <option value="3">3 комнаты</option>
      <option value="100">100 комнат</option>
    </select>
  </fieldset>`
);

const fieldsetGuests = (
  `<fieldset class="ad-form__element">
    <label class="ad-form__label" for="capacity">Количество мест</label>
    <select id="capacity" name="capacity">
      <option value="3" selected>для 3 гостей</option>
      <option value="2">для 2 гостей</option>
      <option value="1">для 1 гостя</option>
      <option value="0">не для гостей</option>
    </select>
  </fieldset>`
);

const fieldsetFeatures = (
  `<fieldset class="ad-form__element ad-form__element--wide features">
    <legend>Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер</legend>
    <input type="checkbox" name="features" value="wifi" id="feature-wifi" class="feature__checkbox visually-hidden">
    <label class="feature feature--wifi" for="feature-wifi">Wi-Fi</label>
    <input type="checkbox" name="features" value="dishwasher" id="feature-dishwasher" class="feature__checkbox visually-hidden">
    <label class="feature feature--dishwasher" for="feature-dishwasher">Посудомоечная машина</label>
    <input type="checkbox" name="features" value="parking" id="feature-parking" class="feature__checkbox visually-hidden">
    <label class="feature feature--parking" for="feature-parking">Парковка</label>
    <input type="checkbox" name="features" value="washer" id="feature-washer" class="feature__checkbox visually-hidden">
    <label class="feature feature--washer" for="feature-washer">Стиральная машина</label>
    <input type="checkbox" name="features" value="elevator" id="feature-elevator" class="feature__checkbox visually-hidden">
    <label class="feature feature--elevator" for="feature-elevator">Лифт</label>
    <input type="checkbox" name="features" value="conditioner" id="feature-conditioner" class="feature__checkbox visually-hidden">
    <label class="feature feature--conditioner" for="feature-conditioner">Кондиционер</label>
  </fieldset>`
);

const fieldsetDescription = (
  `<fieldset class="ad-form__element ad-form__element--wide">
    <label class="ad-form__label" for="description">Описание (не обязательно)</label>
    <textarea id="description" name="description" placeholder="Здесь расскажите о том, какое ваше жилье замечательное и вообще"></textarea>
  </fieldset>`
);

const fieldsetPhotos = (
  `<fieldset class="ad-form__element ad-form__element--wide">
    <label class="ad-form__label">Фотография жилья</label>
    <div class="ad-form__photo-container">
      <div class="ad-form__upload">
        <input type="file" id="images" name="images" class="ad-form__input visually-hidden">
        <label for="images" class="ad-form__drop-zone">Загрузить<br>фото...</label>
      </div>
      <div class="ad-form__photo"></div>
    </div>
  </fieldset>`
);

const fieldsetSubmit = (
  `<fieldset class="ad-form__element ad-form__element--submit">
    <button class="ad-form__submit" type="submit">Опубликовать</button>
    или <button class="ad-form__reset" type="reset">очистить</button>
  </fieldset>`
);

const fieldsets = [
  fieldsetHeader,
  fieldsetTitle,
  fieldsetAddress,
  fieldsetType,
  fieldsetPrice,
  fieldsetTime,
  fieldsetRooms,
  fieldsetGuests,
  fieldsetFeatures,
  fieldsetDescription,
  fieldsetPhotos,
  fieldsetSubmit
];

const createNoiceTemplate = () => {
  return (
    `<section class="notice">
      <h2 class="notice__title">Ваше объявление</h2>
      <form class="ad-form ad-form--disabled" method="post" enctype="multipart/form-data" autocomplete="off">
        ${fieldsets.join(`\n`)}
      </form>
    </section>`
  );
};


export default class NoticeComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoiceTemplate();
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
