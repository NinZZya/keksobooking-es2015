import * as Utils from '../utils.js';

const createMapTemplate = () => {
  return (`<section class="map map--faded"></section>`);
};

export default class MapComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMapTemplate();
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
