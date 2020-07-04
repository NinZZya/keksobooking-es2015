import AbstractComponent from './abstract-component.js';

const createMainPinTemplate = () => {
  return (
    `<button class="map__pin map__pin--main" style="left: 570px; top: 375px;">
      <img src="img/muffin-red.svg" width="40" height="44" draggable="false" alt="Метка объявления">
      <svg viewBox="0 0 70 70" width="156" height="156" aria-label="Метка для поиска жилья">
        <defs>
          <path d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0" id="tophalf" />
        </defs>
        <ellipse cx="35" cy="35" rx="35" ry="35" fill="rgba(255, 86, 53, 0.7)" />
        <text><textPath xlink:href="#tophalf" startOffset="0">Поставь меня куда-нибудь</textPath></text>
      </svg>
    </button>`
  );
};

export default class MainPinComponent extends AbstractComponent {
  constructor() {
    super();
    this.mainPinMouseDownHandler = null;
    this.mainPinKeyDownHandler = null;
  }

  getTemplate() {
    return createMainPinTemplate();
  }

  addMainPinListeners() {
    this.getElement().addEventListener(`mousedown`, this.mainPinMouseDownHandler);
    this.getElement().addEventListener(`keydown`, this.mainPinKeyDownHandler);
  }

  removeMainPinListeners() {
    this.getElement().removeEventListener(`mousedown`, this.mainPinMouseDownHandler);
    this.getElement().removeEventListener(`keydown`, this.mainPinKeyDownHandler);
  }
}
