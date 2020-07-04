import {createElement} from '../utils/utils.js';

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
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  _getCustomElement(element, selector, container) {
    container = container || document;
    if (!element) {
      element = container.querySelector(selector);
    }

    return element;
  }

  _getCustomElements(elements, selector, container) {
    container = container || document;
    if (!elements) {
      elements = container.querySelectorAll(selector);
    }

    return elements;
  }
}
