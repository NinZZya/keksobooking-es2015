import AbstractMessageComponent from './abstract-message';

const MSG_CLASS = `success__message`;

const createSuccessMessageTemplate = () => {
  return (
    `<div class="success">
      <p class="success__message">Ваше объявление<br>успешно размещено!</p>
    </div>`
  );
};

export default class SuccessMessageComponent extends AbstractMessageComponent {
  constructor() {
    super(MSG_CLASS);
  }

  getTemplate() {
    return createSuccessMessageTemplate();
  }
}
