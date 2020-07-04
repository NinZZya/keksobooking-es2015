import AbstractComponent from './abstract-component.js';
const TOGGLE_CLASS = `map__pin--active`;

const createPinTemplate = (order) => {
  return (
    `<button type="button" class="map__pin" style="left: ${order.location.x}px; top: ${order.location.y}px;">
      <img src="${order.author.avatar}" width="40" height="40" draggable="false" alt="Метка объявления">
    </button>`
  );
};

export default class PinComponent extends AbstractComponent {
  constructor(order) {
    super(TOGGLE_CLASS);
    this._order = order;
    this.clickPinHandler = null;
  }

  getTemplate() {
    return createPinTemplate(this._order);
  }

  addPinListeners() {
    this.getElement().addEventListener(`click`, this.clickPinHandler);
  }
}
