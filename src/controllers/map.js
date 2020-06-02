import * as Utils from '../utils.js';
import {filters, features} from '../constants.js';
import PinsComponent from '../components/pins.js';
import MainPinComponent from '../components/main-pin.js';
import PinComponent from '../components/pin.js';
import MapFilterComponent from '../components/map-filter.js';
import CardComponent from '../components/card.js';


export default class MapController {
  constructor(mapComponent, orders) {
    this._mapComponent = mapComponent;
    this._pinsComponent = new PinsComponent();
    this._mainPinComponent = new MainPinComponent();
    this._cardComponent = null;
    this._pins = [];
    this._orders = orders;
  }

  activeMainPin() {
    Utils.render(this._mapComponent.getElement(), this._pinsComponent, Utils.RenderPosition.BEFOREEND);
    Utils.render(this._pinsComponent.getElement(), this._mainPinComponent, Utils.RenderPosition.BEFOREEND);
    Utils.render(this._mapComponent.getElement(), new MapFilterComponent(filters, features), Utils.RenderPosition.BEFOREEND);

    this._mainPinComponent.setMousedownHandler(() => {
      this._mapComponent.activateElement();
      this._renderPins(this._orders);
    });
  }

  _renderPins(orders) {
    orders.forEach((order) => {
      const pinComponent = new PinComponent(order);
      Utils.render(this._pinsComponent.getElement(), pinComponent, Utils.RenderPosition.BEFOREEND);
      pinComponent.setClickElementHandler(() => this._renderCard(order));
      this._pins.push(pinComponent);
    });
  }

  _renderCard(order) {
    if (this._cardComponent) {
      Utils.remove(this._cardComponent);
      this._cardComponent = null;
    }
    this._cardComponent = new CardComponent(order);
    Utils.render(this._pinsComponent.getElement(), this._cardComponent, Utils.RenderPosition.BEFOREEND);
    this._cardComponent.setClickElementHandler(() => Utils.remove(this._cardComponent));
  }
}
