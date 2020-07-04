import AbstractComponent from './abstract-component';
const TOGGLE_CLASS = `map--faded`;

const createMapTemplate = () => {
  return (`<section class="map map--faded"></section>`);
};

export default class MapComponent extends AbstractComponent {
  constructor() {
    super(TOGGLE_CLASS);
  }

  getTemplate() {
    return createMapTemplate();
  }
}
