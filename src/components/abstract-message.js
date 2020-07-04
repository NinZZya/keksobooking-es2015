import AbstractComponent from './abstract-component';
import {isEscPressed} from '../utils/utils';

export default class AbstractMessageComponent extends AbstractComponent {
  constructor(MSG_CLASS, BTN_CLASS) {
    super();
    this._MSG_CLASS = MSG_CLASS;
    this._BTN_CLASS = BTN_CLASS;
    this._clickAbstractMessageHandler = this._clickAbstractMessageHandler.bind(this);
    this._clickBtnAbstractHandler = this._clickBtnAbstractHandler.bind(this);
    this._documentKeyDownHandler = this._documentKeyDownHandler.bind(this);
  }

  addMessageListeners() {
    if (this._MSG_CLASS) {
      this.getElement().addEventListener(`click`, this._clickAbstractMessageHandler);
    }

    if (this.BTN_CLASS) {
      this.getElement().querySelector(this._BTN_CLASS).addEventListener(`click`, this._clickBtnAbstractHandler);
    }

    document.addEventListener(`keydown`, this._documentKeyDownHandler);
  }

  _closeAbstractMessage() {
    document.removeEventListener(`keydown`, this._documentKeyDownHandler);
    this.getElement().remove();
    this._element = null;
  }

  _clickBtnAbstractHandler() {
    this._closeAbstractMessage();
  }

  _clickAbstractMessageHandler(evt) {
    if (!evt.target.classList.contains(this._MSG_CLASS)) {
      this._closeAbstractMessage();
    }
  }

  _documentKeyDownHandler(evt) {
    if (isEscPressed(evt)) {
      this._closeAbstractMessage();
    }
  }
}
