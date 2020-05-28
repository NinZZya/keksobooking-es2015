import * as Utils from '../utils.js';

const DEFAULT_MESSAGE = `Ваше объявление<br>успешно размещено!`;

const createMessageSuccessTemplate = (message = DEFAULT_MESSAGE) => {
  return (
    `<div class="success">
      <p class="success__message">${message}</p>
    </div>`
  );
};

export default class MessageSuccessComponent {
  constructor(message) {
    this._element = null;
    this._message = message;
  }

  getTemplate() {
    return createMessageSuccessTemplate(this._message);
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
