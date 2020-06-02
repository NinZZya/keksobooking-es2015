import AbstractComponent from './abstract-component.js';
const ACTIVATE_CLASS = `map--faded`;

const createMapTemplate = () => {
  return (`<section class="map map--faded"></section>`);
};

export default class MapComponent extends AbstractComponent {
  getTemplate() {
    return createMapTemplate();
  }

  activateElement() {
    this._element.classList.remove(ACTIVATE_CLASS);
  }

  deactivateElement() {
    this._element.classList.add(ACTIVATE_CLASS);
  }
}
