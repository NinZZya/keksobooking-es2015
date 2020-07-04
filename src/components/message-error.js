import AbstractComponent from './abstract-component';
import {isEscPressed} from '../utils/utils';

const MessageErrorSelector = {
  BTN_CLASS: `.error__button`,
  MSG_CLASS: `error__message`,
};


const createMessageErrorTemplate = () => {
  return (
    `<div class="error">
      <p class="error__message">Ошибка загрузки объявления</p>
      <button class="error__button">Попробовать снова</button>
    </div>`
  );
};

export default class MessageErrorComponent extends AbstractComponent {

  getTemplate() {
    return createMessageErrorTemplate();
  }

  addMessageErrorListeners() {
    this.getElement().addEventListener(`click`, this._clickMessageErrorrHandler.bind(this));
    this.getElement().querySelector(MessageErrorSelector.BTN_CLASS).addEventListener(`click`, this._clickBtnErrorHandler.bind(this));
    document.addEventListener(`keydown`, this._documentKeyDownHandler.bind(this));
  }

  _closeMessageError() {
    document.removeEventListener(`keydown`, this.closeMessageError);
    this.getElement().remove();
    this._element = null;
  }

  _clickBtnErrorHandler() {
    this._closeMessageError();
  }

  _clickMessageErrorrHandler(evt) {
    if (!evt.target.classList.contains(MessageErrorSelector.MSG_CLASS)) {
      this._closeMessageError();
    }
  }

  _documentKeyDownHandler(evt) {
    if (isEscPressed(evt)) {
      this._closeMessageError();
    }
  }
}
