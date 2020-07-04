import AbstractComponent from './abstract-component';

const createMessageSuccessTemplate = () => {
  return (
    `<div class="success">
      <p class="success__message">Ваше объявление<br>успешно размещено!</p>
    </div>`
  );
};

export default class MessageSuccessComponent extends AbstractComponent {

  getTemplate() {
    return createMessageSuccessTemplate();
  }
}
