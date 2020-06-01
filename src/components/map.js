import AbstractComponent from './abstract-component.js';

const createMapTemplate = () => {
  return (`<section class="map map--faded"></section>`);
};

export default class MapComponent extends AbstractComponent {
  getTemplate() {
    return createMapTemplate();
  }
}
