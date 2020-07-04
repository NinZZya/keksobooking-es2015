import PinComponent from '../components/pin';
import CardComponent from '../components/card';
import {render, remove, isEscPressed} from '../utils/utils';
import * as coordsUtil from '../utils/coords';

const ORDERS_COUNT = 5;

const Default = {
  MAIN_PIN_LEFT: 570,
  MAIN_PIN_TOP: 375,
};

export default class PinsController {
  constructor(pinsComponent, mainPinComponent) {
    this._pinsComponent = pinsComponent;
    this._mainPinComponent = mainPinComponent;
    this._pinComponents = [];
    this._pinsElements = [];
    this._activePinComponent = null;
    this._activeCardComponent = null;
    this._cardContainer = null;
    this._cardPlace = null;
  }
  /**
   * @description Активирует контроллер. Установкаглавного пина по уомолчанию
   */

  activate() {
    this.setDefaultMainPin();
  }

  /**
   * @description Деактивирует контроллер. Установкаглавного пина по уомолчанию
   */

  deactivate() {
    // Установить главный пин по умолчанию
    this.setDefaultMainPin();
    // Удалить пины
    this.removePins();
    // Удалить активную карточку
    this._removeActiveCard();
  }

  /**
   * @description Устанавливает главный пин по умолчанию
   */

  setDefaultMainPin() {
    this._mainPinComponent.getElement().style.left = `${Default.MAIN_PIN_LEFT}px`;
    this._mainPinComponent.getElement().style.top = `${Default.MAIN_PIN_TOP}px`;
  }

  /**
   * @description Возвращает соординаты главного пина по умолчанию (до активации карты)
   */

  getMainPinDefaultCoords() {
    return {
      x: Math.floor(Default.MAIN_PIN_LEFT + this._mainPinComponent.getElement().offsetWidth / 2),
      y: Math.floor(Default.MAIN_PIN_TOP + this._mainPinComponent.getElement().offsetHeight / 2),
    };
  }

  /**
   * @description Возвращает соординаты главного пина после активации карты
   */

  getMainPinCoords() {
    return coordsUtil.convertToCoords(
        this._mainPinComponent.getElement().style.left,
        this._mainPinComponent.getElement().style.top
    );
  }

  /**
   *@description Отрисовывает пины в контейнере
   */

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
    render(this._pinsComponent, this._pinsElements, this._mainPinComponent);
    this._pinsElements = [];
  }

  /**
   * @description Устанавливает контейнер, куда отрисовывать карточку
   * @param {Object} $cardContainer Контейнер, куда отрисовывать карточку
   */

  setCardContainer(cardContainer) {
    this._cardContainer = cardContainer;
  }

  /**
   * @description Устанавливает место, куда отрисовывать карточку
   * @param {Object} $cardPlace Место, куда отрисовывать карточку
   */

  setCardPlace(cardPlace) {
    this._cardPlace = cardPlace;
  }

  /**
   * @description Создать список компонентов по полученным данным не более чем ORDERS_COUNT
   */

  _createPinsComponents(orders) {
    this._pinComponents = orders.slice(0, ORDERS_COUNT).map((order) => {
      // Создать новый копонент пина
      const pinComponent = new PinComponent(order);
      pinComponent.clickPinHandler = () => {
        this._activatePin(pinComponent);
        this._removeActiveCard();
        const cardComponent = new CardComponent(order);
        this._activeCardComponent = cardComponent;
        this._renderCard(cardComponent);
        cardComponent.closeBtnCardClickHandler = this._closeBtnCardClickHandler.bind(this);
        cardComponent.documentKeyDownHandler = this._documentKeyDownHandler.bind(this);
        cardComponent.addCardListeners();
      };

      pinComponent.addPinListeners();
      this._pinsElements.push(pinComponent.getElement());
      return pinComponent;
    });
  }

  /**
   * Рендерит карточку если есть контейнер и место вствки
   * @param {Object} cardComponent Компонент карточки
   */

  _renderCard(cardComponent) {
    if (!(this._cardContainer && this._cardPlace)) {
      throw new Error(`Container or place for card not exist!`);
    }
    render(this._cardContainer, cardComponent, this._cardPlace);
  }

  _closeBtnCardClickHandler() {
    this._сloseCard();
  }

  /**
   * @description Callback для document (нажатие кнопки Esc для закрытия карточки)
   */

  _documentKeyDownHandler(evt) {
    if (isEscPressed(evt)) {
      evt.preventDefault();
      this._сloseCard();
    }
  }

  /**
   * @description Закрывает карточку
   */

  _сloseCard() {
    // Удалить обработчики событий карточки
    this._activeCardComponent.removeCardListeners();
    // Удалить карточку
    this._removeActiveCard();
    // Деактивировать пин карточки
    this._deactivatePin();
  }

  /**
   * @description Удаляет пины с карты если они есть
   */

  removePins() {
    this._pinComponents.forEach((pinComponent) => {
      // Удалить компонент
      remove(pinComponent);
    });
    // Очистить список компонентов
    this._pinComponents = [];
  }

  /**
   * @description Активирует активный пин
   */

  _activatePin(pinComponent) {
    // Деактивировать активный пин, если он есть
    this._deactivatePin();
    // Установить активный пин
    this._activePinComponent = pinComponent;
    // Активировать нажатый пин
    this._activePinComponent.toggleState();
  }

  /**
   * @description Деактивирует активный пин, если он есть
   */

  _deactivatePin() {
    if (this._activePinComponent) {
      // Деактивировать нажатый пин
      this._activePinComponent.toggleState();
      // Очистить активный пин
      this._activePinComponent = null;
    }
  }

  /**
   * @description Удаляет активную карточку, если она есть
   */

  _removeActiveCard() {
    if (this._activeCardComponent) {
      this._activeCardComponent.removeCardListeners();
      remove(this._activeCardComponent);
      this._activeCardComponent = null;
    }
  }
}
