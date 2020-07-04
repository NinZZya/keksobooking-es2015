import AbstractLiveComponent from './abstract-live-component.js';
const TOGGLE_CLASS = `map--faded`;

const createMapTemplate = () => {
  return (`<section class="map map--faded"></section>`);
};

export default class MapComponent extends AbstractLiveComponent {
  constructor() {
    super(TOGGLE_CLASS);
  }

  getTemplate() {
    return createMapTemplate();
  }
}
