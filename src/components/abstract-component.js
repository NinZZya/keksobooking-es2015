import {createElement} from '../utils/utils';
const TOGGLE_MESSAGE = `A toggle class is`;

export default class AbstractComponent {
  constructor(TOGGLE_CLASS) {
    if (new.target === AbstractComponent) {
      throw new Error(`You can't create Abscract component`);
    }

    this._element = null;
    this._TOGGLE_CLASS = TOGGLE_CLASS;
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

  isActivate() {
    this._isExist(this._TOGGLE_CLASS, TOGGLE_MESSAGE);
    return !this.getElement().classList.contains(this._TOGGLE_CLASS);
  }

  toggleState() {
    this._isExist(this._TOGGLE_CLASS, TOGGLE_MESSAGE);
    this.getElement().classList.toggle(this._TOGGLE_CLASS);
  }

  _isExist(value, classNameText) {
    if (!value) {
      throw new Error(`${classNameText} not exist`);
    }
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
