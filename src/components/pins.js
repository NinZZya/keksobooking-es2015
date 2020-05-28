import * as Utils from '../utils.js';

const createPinsTemplate = () => {
  return (
    `<div class="map__pins">
      <div class="map__overlay">
        <h2 class="map__title">И снова Токио!</h2>
      </div>
    </div>`
  );
};


export default class PinsComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createPinsTemplate();
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
