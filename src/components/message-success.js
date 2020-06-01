import AbstractComponent from './abstract-component.js';

const DEFAULT_MESSAGE = `Ваше объявление<br>успешно размещено!`;

const createMessageSuccessTemplate = (message = DEFAULT_MESSAGE) => {
  return (
    `<div class="success">
      <p class="success__message">${message}</p>
    </div>`
  );
};

export default class MessageSuccessComponent extends AbstractComponent {
  constructor(message) {
    super();
    this._message = message;
  }

  getTemplate() {
    return createMessageSuccessTemplate(this._message);
  }
}
