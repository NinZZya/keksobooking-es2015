import PinComponent from '../components/pin.js';
import CardComponent from '../components/card.js';
import {render, remove} from '../utils/utils.js';
import * as coordsUtil from '../utils/coords.js';

const ORDERS_COUNT = 5;

const Default = {
  MAIN_PIN_LEFT: 570,
  MAIN_PIN_TOP: 375,
};

export default class PinsController {
  constructor(pinsComponent, mainPinComponent, ordersModel) {
    this._pinsComponent = pinsComponent;
    this._mainPinComponent = mainPinComponent;
    this._pinComponents = [];
    this._pinsElements = [];
    this._ordersModel = ordersModel;
    this._activePinComponent = null;
    this._activeCardComponent = null;
    this._cardContainer = null;
    this._cardPlace = null;
  }

  activate() {
    this.setDefaultMainPin();
  }

  setDefaultMainPin() {
    this._mainPinComponent.getElement().style.left = `${Default.MAIN_PIN_LEFT}px`;
    this._mainPinComponent.getElement().style.top = `${Default.MAIN_PIN_TOP}px`;
  }

  getMainPinDefaultCoords() {
    return {
      x: Math.floor(Default.MAIN_PIN_LEFT + this._mainPinComponent.getElement().offsetWidth / 2),
      y: Math.floor(Default.MAIN_PIN_TOP + this._mainPinComponent.getElement().offsetHeight / 2),
    };
  }

  getMainPinCoords() {
    return coordsUtil.convertToCoords(
        this._mainPinComponent.getElement().style.left,
        this._mainPinComponent.getElement().style.top
    );
  }

  renderPins(orders) {
    // Если пины есть
    if (this._pinComponents) {
      // Удалить пины
      this.removePins();
      // Удалить активную карточку, если она есть
      this._removeActiveCard();
    }


    // Создать массив пин компонентов
    this._createPinsComponents(orders);
    // Отрисовать пины на карте
    render(this._pinsComponent.getElement(), this._pinsElements, this._mainPinComponent.getElement());
    this._pinsElements = [];
  }

  setCardContainer(cardContainer) {
    this._cardContainer = cardContainer;
  }

  setCardPlace(cardPlace) {
    this._cardPlace = cardPlace;
  }

  _createPinsComponents(orders) {
    this._pinComponents = orders.slice(0, ORDERS_COUNT).map((order) => {
      // Создать новый копонент пина
      const pinComponent = new PinComponent(order);
      pinComponent.setClickPinHandler(() => {
        this._activatePin(pinComponent);
        this._removeActiveCard();
        const cardComponent = new CardComponent(order);
        this._activeCardComponent = cardComponent;
        render(this._cardContainer, cardComponent.getElement(), this._cardPlace);
        cardComponent.setClickCardHandler(this._removeActiveCard);
      });

      this._pinsElements.push(pinComponent.getElement());
      return pinComponent;
    });
  }

  removePins() {
    this._pinComponents.forEach((pinComponent) => {
      // Удалить компонент
      remove(pinComponent);
    });
    // Очистить список компонентов
    this._pinComponents = [];
  }

  _activatePin(pinComponent) {
    // Деактивировать активный пин, если он есть
    this._deactivatePin();
    // Установить активный пин
    this._activePinComponent = pinComponent;
    // Активировать нажатый пин
    this._activePinComponent.toggleState();
  }

  _deactivatePin() {
    if (this._activePinComponent) {
      // Деактивировать нажатый пин
      this._activePinComponent.toggleState();
      // Очистить активный пин
      this._activePinComponent = null;
    }
  }

  _removeActiveCard() {
    if (this._activeCardComponent) {
      // document.removeEventListener(`keydown`, this._keydownHandler);
      remove(this._activeCardComponent);
      this._activeCardComponent = null;
    }
  }
}
