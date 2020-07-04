import AbstractComponent from './abstract-component';
import {noticeElements} from './notice-elements';

const NoticeSelector = {
  FORM: `.ad-form`,
  TOGGLE_FORM_CLASS: `ad-form--disabled`,
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


export default class NoticeComponent extends AbstractComponent {
  constructor() {
    super();
    this._formElement = null;
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
    this._descriptionElement = null;
    this._resetBtnElement = null;
    this._featuresElements = null;
    this._fieldsetsElements = null;

    this.titleChangeHandler = null;
    this.avatarChangeHandler = null;
    this.roomsChangeHandler = null;
    this.imagesChangeHandler = null;
    this.priceChangeHandler = null;
    this.typeChangeHandler = null;
    this.checkInChangeHandler = null;
    this.checkOutChangeHandler = null;
    this.formSubmitHandler = null;
    this.formResetHandler = null;
  }

  getTemplate() {
    return createNoticeTemplate();
  }

  getForm() {
    return this._getCustomElement(this._formElement, NoticeSelector.FORM, this.getElement());
  }

  getTitle() {
    return this._getCustomElement(this._titleElement, NoticeSelector.TITLE, this.getElement());
  }

  getAvatar() {
    return this._getCustomElement(this._avatarElement, NoticeSelector.AVATAR, this.getElement());
  }

  getAvatarPreview() {
    return this._getCustomElement(this._avatarPreviewElement, NoticeSelector.AVATAR_PREVIEW, this.getElement());
  }

  getAddress() {
    return this._getCustomElement(this._addressElement, NoticeSelector.ADDRESS, this.getElement());
  }

  getRooms() {
    return this._getCustomElement(this._roomsElement, NoticeSelector.ROOM, this.getElement());
  }

  getGuests() {
    return this._getCustomElement(this._guestsElement, NoticeSelector.GUEST, this.getElement());
  }

  getImagesContainer() {
    return this._getCustomElement(this._imagesContainerElement, NoticeSelector.IMAGES_CONTAINER, this.getElement());
  }

  getImages() {
    return this._getCustomElement(this._imagesElement, NoticeSelector.IMAGES, this.getElement());
  }

  getImagesPreview() {
    return this._getCustomElement(this._imagesPreviewElement, NoticeSelector.IMAGES_PREVIEW, this.getElement());
  }

  getImagesPreviews() {
    return this._getCustomElements(this._imagesPreviewsElements, NoticeSelector.IMAGES_PREVIEW, this.getElement());
  }

  getAllImagesPreviews() {
    return this._getCustomElements(this._imagesPreviewsElements, NoticeSelector.IMAGES_PREVIEW, this.getElement());
  }

  getPrice() {
    return this._getCustomElement(this._priceElement, NoticeSelector.PRICE, this.getElement());
  }

  getType() {
    return this._getCustomElement(this._typeElement, NoticeSelector.TYPE, this.getElement());
  }

  getCheckIn() {
    return this._getCustomElement(this._checkInElement, NoticeSelector.CHECK_IN, this.getElement());
  }

  getCheckOut() {
    return this._getCustomElement(this._checkOutElement, NoticeSelector.CHECK_OUT, this.getElement());
  }

  getDescription() {
    return this._getCustomElement(this._descriptionElement, NoticeSelector.DESCRIPTION, this.getElement());
  }

  getResetBtn() {
    return this._getCustomElement(this._resetBtnElement, NoticeSelector.RESET_BTN, this.getElement());
  }

  _getFeatures() {
    return this._getCustomElements(this._$features, NoticeSelector.FEATURE, this.getElement());
  }

  _getFieldsets() {
    return this._getCustomElements(this._$fieldsets, NoticeSelector.FIELDSET, this.getElement());
  }

  isFormActivate() {
    return !this.getForm().classList.contains(NoticeSelector.TOGGLE_FORM_CLASS);
  }

  toggleStateForm() {
    this.getForm().classList.toggle(NoticeSelector.TOGGLE_FORM_CLASS);
  }

  isActivateFieldsets() {
    return !this._getFieldsets()[0].disabled;
  }

  toggleStateFieldsets() {
    this._getFieldsets().forEach((fieldsetElement) => {
      fieldsetElement.disabled = !fieldsetElement.disabled;
    });
  }

  addNoticeValidityListeners() {
    this.getTitle().addEventListener(`change`, this.titleChangeHandler);
    this.getRooms().addEventListener(`change`, this.roomsChangeHandler);
    this.getType().addEventListener(`change`, this.typeChangeHandler);
    this.getPrice().addEventListener(`change`, this.priceChangeHandler);
    this.getCheckIn().addEventListener(`change`, this.checkInChangeHandler);
    this.getCheckOut().addEventListener(`change`, this.checkOutChangeHandler);
  }

  removeNoticeValidityListeners() {
    this.getTitle().removeEventListener(`change`, this.titleChangeHandler);
    this.getRooms().removeEventListener(`change`, this.roomsChangeHandler);
    this.getType().removeEventListener(`change`, this.typeChangeHandler);
    this.getPrice().removeEventListener(`change`, this.priceChangeHandler);
    this.getCheckIn().removeEventListener(`change`, this.checkInChangeHandler);
    this.getCheckOut().removeEventListener(`change`, this.checkOutChangeHandler);
  }

  addFormSubmitListeners() {
    this.getElement().addEventListener(`submit`, this.formSubmitHandler);
  }

  removeFormSubmitListeners() {
    this.getElement().removeEventListener(`submit`, this.formSubmitHandler);
  }

  addFormResetListeners() {
    this.getResetBtn().addEventListener(`click`, this.formResetHandler);
  }

  removeFormResetListeners() {
    this.getResetBtn().removeEventListener(`click`, this.formResetHandler);
  }

  addAvatarListeners() {
    this.getAvatar().addEventListener(`change`, this.avatarChangeHandler);
  }

  removeAvatarListeners() {
    this.getAvatar().removeEventListener(`change`, this.avatarChangeHandler);
  }

  addImagesListeners() {
    this.getImages().addEventListener(`change`, this.imagesChangeHandler);
  }

  removeImagesListeners() {
    this.getImages().removeEventListener(`change`, this.imagesChangeHandler);
  }
}
