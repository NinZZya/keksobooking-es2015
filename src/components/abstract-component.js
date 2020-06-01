import * as Utils from '../utils.js';

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`You can't create Abscract component`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Component can't have abstract method`);
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
