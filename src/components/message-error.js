import AbstractComponent from './abstract-component';

const DEFAULT_MESSAGE = `Ошибка загрузки объявления`;

const createMessageErrorTemplate = (message = DEFAULT_MESSAGE) => {
  return (
    `<div class="error">
      <p class="error__message">${message}</p>
      <button class="error__button">Попробовать снова</button>
    </div>`
  );
};

export default class MessageErrorComponent extends AbstractComponent {
  constructor(message) {
    super();
    this._message = message;
  }

  getTemplate() {
    return createMessageErrorTemplate(this._message);
  }
}
