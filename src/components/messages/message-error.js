import AbstractMessageComponent from './abstract-message';

const MSG_CLASS = `error__message`;
const BTN_CLASS = `.error__button`;


const createMessageErrorTemplate = () => {
  return (
    `<div class="error">
      <p class="error__message">Ошибка загрузки объявления</p>
      <button class="error__button">Попробовать снова</button>
    </div>`
  );
};

export default class ErrorMessageComponent extends AbstractMessageComponent {
  constructor() {
    super(MSG_CLASS, BTN_CLASS);
  }

  getTemplate() {
    return createMessageErrorTemplate();
  }
}
