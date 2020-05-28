import * as Utils from '../utils.js';

const createPinTemplate = (pin) => {
  return (
    `<button type="button" class="map__pin" style="left: ${pin.location.x}px; top: ${pin.location.y}px;">
      <img src="${pin.author.avatar}" width="40" height="40" draggable="false" alt="Метка объявления">
    </button>`
  );
};

export default class PinComponent {
  constructor(pin) {
    this._element = null;
    this._pin = pin;
  }

  getTemplate() {
    return createPinTemplate(this._pin);
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
