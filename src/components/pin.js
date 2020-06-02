import AbstractComponent from './abstract-component.js';

const createPinTemplate = (pin) => {
  return (
    `<button type="button" class="map__pin" style="left: ${pin.location.x}px; top: ${pin.location.y}px;">
      <img src="${pin.author.avatar}" width="40" height="40" draggable="false" alt="Метка объявления">
    </button>`
  );
};

export default class PinComponent extends AbstractComponent {
  constructor(pin) {
    super();
    this._pin = pin;
  }

  getTemplate() {
    return createPinTemplate(this._pin);
  }

  setClickElementHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
