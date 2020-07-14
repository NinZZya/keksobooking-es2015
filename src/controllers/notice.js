import {Constant} from '../constants/constants';
import {render, RenderPosition, loadImage} from '../utils/utils';

// Индекс значения по умолчанию
const DefaultIndex = {
  ROOMS: 0,
  TYPE: 1,
  CHECK_IN: 0,
};

const NOT_GUESTS = 0;
const MAX_ROOMS_COUNT = 100;
const INVALID_STYLE = `border: 2px solid #ff0000;`;
const PREVIEW_SELECTOR = `img`;
const AD_GUESTS_ITEM_SELECTOR = `option`;
const AD_AVATAR_SELECTOR = `img`;

export default class NoticeController {
  constructor(noticeComponent) {
    this._noticeComponent = noticeComponent;
  }

  /**
   * @description Активирует контроллер
   */

  activate() {
    // Синхронизировать fieldsets и form
    if (this._noticeComponent.isFormActivate() !== this._noticeComponent.isActivateFieldsets()) {
      this._noticeComponent.toggleStateFieldsets();
    }

    this.setDefaultNotice();
    // Установить функции для обработчиков событий валидации
    this._noticeComponent.roomsChangeHandler = this._roomsChangeHandler.bind(this);
    this._noticeComponent.typeChangeHandler = this._typeChangeHandler.bind(this);
    this._noticeComponent.checkInChangeHandler = this._checkInChangeHandler.bind(this);
    this._noticeComponent.checkOutChangeHandler = this._checkOutChangeHandler.bind(this);
    this._noticeComponent.priceChangeHandler = this._priceChangeHandler.bind(this);
    this._noticeComponent.titleChangeHandler = this._titleChangeHandler.bind(this);
    // Установить функции для обработчиков событий  загрузки изображений
    this._noticeComponent.avatarChangeHandler = this._avatarChangeHandler.bind(this);
    this._noticeComponent.imagesChangeHandler = this._imagesChangeHandler.bind(this);
  }

  /**
   * @description Деактивирует контроллер
   */

  deactivate() {
    // Переключить форму в неактивное состояние
    this.toggleState();
    this.setDefaultNotice();
    this.stopValidity();
    this.stopLoadImagesListeners();
  }

  /**
   * @description Переключает состояние формы и поля
   */

  toggleState() {
    this._noticeComponent.toggleStateForm();
    this._noticeComponent.toggleStateFieldsets();
  }

  /**
   * @description Запускает валидацию формы
   */

  runValidity() {
    this._noticeComponent.addValidityListeners();
  }

  /**
   * @description Остановливает валидацию формы
   */

  stopValidity() {
    this._noticeComponent.removeValidityListeners();
  }

  /**
   * @description Устанавливает значения по умолчанию
   */

  setDefaultNotice() {
    // Значения по умолчанию
    const Default = {
      EMPTY_STRING: ``,
      ROOMS: this._noticeComponent.getRooms()[DefaultIndex.ROOMS].value,
      TYPE: this._noticeComponent.getType()[DefaultIndex.TYPE].value,
      CHECK_IN: this._noticeComponent.getCheckIn()[DefaultIndex.CHECK_IN].value,
    };

    this._noticeComponent.getAvatar().value = Default.EMPTY_STRING;
    this._noticeComponent.getAvatarPreview().querySelector(AD_AVATAR_SELECTOR).src = Constant.defaultAvatar;
    this._noticeComponent.getImages().value = Default.EMPTY_STRING;
    this._clearImagesContainer();
    this._resetRequiredElement(this._noticeComponent.getTitle());
    this._noticeComponent.getRooms().value = Default.ROOMS;
    this._noticeComponent.getGuests().value = this._getGuests(Default.ROOMS);
    this._disabledGuestsValues(Default.ROOMS);
    this._noticeComponent.getType().value = Default.TYPE;
    this._setMinPrice(Constant.bookingType[Default.TYPE].minPrice);
    this._resetRequiredElement(this._noticeComponent.getPrice());
    this._noticeComponent.getCheckIn().value = Default.CHECK_IN;
    this._noticeComponent.getCheckOut().value = this._noticeComponent.getCheckIn().value;
    this._noticeComponent.getDescription().value = Default.EMPTY_STRING;
    this._noticeComponent._getFeatures().forEach((featureElement) => {
      featureElement.checked = false;
    });
  }


  /**
   * @description Сбрасывает значение обязательного поля. Меняет состояние required, что бы избежать ошибки в MS Eadge
   * @param {Object} element DOM элемент который необходимо сбросить
   * @param {*} defaultValue Значение по умолчанию, необязательный параметр
   */

  _resetRequiredElement(element, defaultValue) {
    defaultValue = defaultValue || ``;
    element.required = false;
    element.width = element.width;
    element.required = true;
    element.value = defaultValue;
    element.style = ``;
  }

  /**
   * @description Запустить обработчики событий по загрузке файлов
   */

  runLoadImagesListeners() {
    this._noticeComponent.addAvatarListeners();
    this._noticeComponent.addImagesListeners();
  }

  /**
   * @description Остановливает загрузку файлов
   */

  stopLoadImagesListeners() {
    this._noticeComponent.removeAvatarListeners();
    this._noticeComponent.removeImagesListeners();
  }

  /**
   * @description Валидация количества комнат
   */

  _roomsChangeHandler(evt) {
    this._noticeComponent.getGuests().value = this._getGuests(parseInt(evt.target.value, 10));
    this._disabledGuestsValues(this._noticeComponent.getGuests().value);
  }

  /**
   * @description Валидация цен типа жилья
   */

  _typeChangeHandler(evt) {
    this._setMinPrice(Constant.bookingType[evt.target.value].minPrice);
  }

  /**
   * @description Валидация времени заезада
   */

  _checkInChangeHandler(evt) {
    this._noticeComponent.getCheckOut().value = evt.target.value;
  }

  /**
   * @description Валидация времени выезда
   */

  _checkOutChangeHandler(evt) {
    this._noticeComponent.getCheckIn().value = evt.target.value;
  }

  /**
   * @description Валидация значения цены при изменениее
   */

  _priceChangeHandler(evt) {
    this._checkValidity(evt);
  }

  /**
   * @description Валидация значения заголовка при изменениее
   */

  _titleChangeHandler(evt) {
    this._checkValidity(evt);
  }

  /**
   * @description Если ошибка, установить стиль ошибки
   */

  _checkValidity(evt) {
    evt.target.style = evt.target.validity.valid ? `` : INVALID_STYLE;
  }

  /**
   * @param {number} rooms Количество комнат
   * @return {number} Количество гостей
   */

  _getGuests(rooms) {
    if (rooms === MAX_ROOMS_COUNT) {
      return NOT_GUESTS;
    }

    return rooms;
  }

  /**
   * @description Переключает элементы фильтра количества гостей: enabled || diasabled
   * @param {string} validValue
   */

  _disabledGuestsValues(validValue) {
    validValue = parseInt(validValue, 10);
    this._noticeComponent.getGuests().querySelectorAll(AD_GUESTS_ITEM_SELECTOR).forEach((itemElement) => {
      const itemValue = parseInt(itemElement.value, 10);
      if (validValue === NOT_GUESTS) {
        itemElement.disabled = itemValue !== validValue;
      } else {
        itemElement.disabled = !((itemValue <= validValue) && (itemValue !== NOT_GUESTS));
      }
    });
  }

  /**
   * @description Валидация цен типа жилья
   */

  _setMinPrice(minPrice) {
    this._noticeComponent.getPrice().placeholder = minPrice;
    this._noticeComponent.getPrice().min = minPrice;
  }

  /**
   * @description Загружает изображение для аватара
   */

  _avatarChangeHandler() {
    const file = this._noticeComponent.getAvatar().files[0];
    const previewImageElement = this._noticeComponent.getAvatarPreview().querySelector(PREVIEW_SELECTOR);
    loadImage(file, previewImageElement);
  }

  /**
   * @description Загружает изображение для фотографии жилья
   */
  _imagesChangeHandler() {
    const files = this._noticeComponent.getImages().files;
    this._clearImagesContainer();
    const previewContainerElement = this._noticeComponent.getImagesContainer();
    let previewElement = this._noticeComponent.getImagesPreview();

    Array.from(files).forEach((file) => {
      if (!previewElement.querySelector(PREVIEW_SELECTOR)) {
        const previewImageElement = document.createElement(`img`);
        loadImage(file, previewImageElement);
        render(previewElement, previewImageElement, RenderPosition.BEFOREEND);
      } else {
        previewElement = previewElement.cloneNode(true);
        const previewImageElement = previewElement.querySelector(PREVIEW_SELECTOR);
        loadImage(file, previewImageElement);
        render(previewContainerElement, previewElement, RenderPosition.BEFOREEND);
      }
    });
  }

  /**
   * @description Очищает контейнер с Preview изображений
   */

  _clearImagesContainer() {
    this._noticeComponent.getAllImagesPreviews().forEach(function (imagesPreviewElement, index) {
      if (index === 0) {
        imagesPreviewElement.innerHTML = ``;
      } else {
        imagesPreviewElement.remove();
      }
    });
  }
}
