import AbstractLiveComponent from './abstract-live-component.js';
import {noticeElements} from './notice-elements.js';
const NoticeSelector = {
  TOGGLE_CLASS: `ad-form--disabled`,
  TITLE: `#title`,
  AVATAR: `#avatar`,
  AVATAR_PREVIEW: `.ad-form-header__preview`,
  ADDRESS: `#address`,
  ROOM: `#room_number`,
  GUEST: `#capacity`,
  IMAGES_CONTAINER: `.ad-form__photo-container`,
  IMAGES: `#images`,
  IMAGES_PREVIEW: `.ad-form__photo`,
  PRICE: `#price`,
  TYPE: `#type`,
  CHECK_IN: `#timein`,
  CHECK_OUT: `#timeout`,
  DESCRIPTION: `#description`,
  RESET_BTN: `.ad-form__reset`,
  FEATURE: `.feature__checkbox`,
  FIELDSET: `fieldset`,
};

const createNoticeTemplate = () => {
  return (
    `<section class="notice">
      <h2 class="notice__title">Ваше объявление</h2>
      <form class="ad-form ad-form--disabled" method="post" enctype="multipart/form-data" autocomplete="off">
        ${noticeElements.join(`\n`)}
      </form>
    </section>`
  );
};


export default class NoticeComponent extends AbstractLiveComponent {
  constructor() {
    super(NoticeSelector.TOGGLE_CLASS);
    this._titleElement = null;
    this._avatarElement = null;
    this._avatarPreviewElement = null;
    this._addressElement = null;
    this._roomsElement = null;
    this._guestsElement = null;
    this._imagesContainerElement = null;
    this._imagesElement = null;
    this._imagesPreviewElement = null;
    this._imagesPreviewsElements = null;
    this._priceElement = null;
    this._typeElement = null;
    this._checkInElement = null;
    this._checkOutElement = null;
    this._resetBtnElement = null;
    this._featuresElements = null;
    this._fieldsetsElements = null;
  }

  getTemplate() {
    return createNoticeTemplate();
  }

  getTitleElement() {
    return this._getCustomElement(this._titleElement, NoticeSelector.TITLE, this.getElement());
  }

  getAvatarElement() {
    return this._getCustomElement(this._avatarElement, NoticeSelector.AVATAR, this.getElement());
  }

  getAvatarPreviewElement() {
    return this._getCustomElement(this._avatarPreviewElement, NoticeSelector.AVATAR_PREVIEW, this.getElement());
  }

  getRoomsElement() {
    return this._getCustomElement(this._roomsElement, NoticeSelector.ROOM, this.getElement());
  }

  getGuestsElement() {
    return this._getCustomElement(this._guestsElement, NoticeSelector.GUEST, this.getElement());
  }

  getImageContainerElement() {
    return this._getCustomElement(this._imagesContainerElement, NoticeSelector.IMAGES_CONTAINER, this.getElement());
  }

  getImagesElement() {
    return this._getCustomElement(this._imagesElement, NoticeSelector.IMAGES, this.getElement());
  }

  getImagesPreviewElement() {
    return this._getCustomElement(this._imagesPreviewElement, NoticeSelector.IMAGES_PREVIEW, this.getElement());
  }

  getImagesPreviewsElements() {
    return this._getCustomElements(this._imagesPreviewsElements, NoticeSelector.IMAGES_PREVIEW, this.getElement());
  }

  getPriceElement() {
    return this._getCustomElement(this._priceElement, NoticeSelector.PRICE, this.getElement());
  }

  getTypeElement() {
    return this._getCustomElement(this._typeElement, NoticeSelector.TITLE, this.getElement());
  }

  getCheckInElement() {
    return this._getCustomElement(this._checkInElement, NoticeSelector.CHECK_IN, this.getElement());
  }

  getCheckOutElement() {
    return this._getCustomElement(this._checkOutElement, NoticeSelector.CHECK_OUT, this.getElement());
  }

  getAdResetBtn() {
    return this._getCustomElement(this._resetBtnElement, NoticeSelector.RESET_BTN, this.getElement());
  }

  _getFeatures() {
    return this._getCustomElements(this._$features, NoticeSelector.FEATURE, this.getElement());
  }

  _getFieldsets() {
    return this._getCustomElements(this._$fieldsets, NoticeSelector.FIELDSET, this.getElement());
  }

  toggleStateFieldsets() {
    this._getFieldsets().forEach((fieldsetElement) => {
      fieldsetElement.disabled = !fieldsetElement.disabled;
    });
  }

  isActivateFieldsets() {
    return !this._getFieldsets()[0].disabled;
  }
}
