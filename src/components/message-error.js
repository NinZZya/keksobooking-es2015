import * as Utils from '../utils.js';

const DEFAULT_MESSAGE = `Ошибка загрузки объявления`;

const createMessageErrorTemplate = (message = DEFAULT_MESSAGE) => {
  return (
    `<div class="error">
      <p class="error__message">${message}</p>
      <button class="error__button">Попробовать снова</button>
    </div>`
  );
};

export default class MessageErrorComponent {
  constructor(message) {
    this._element = null;
    this._message = message;
  }

  getTemplate() {
    return createMessageErrorTemplate(this._message);
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
