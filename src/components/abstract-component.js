import {createElement} from '../utils/utils.js';

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
    this._isClassExist(this._TOGGLE_CLASS, `toggle`);
    return !this.getElement().classList.contains(this._TOGGLE_CLASS);
  }

  toggleState() {
    this._isClassExist(this._TOGGLE_CLASS, `toggle`);
    this.getElement().classList.toggle(this._TOGGLE_CLASS);
  }

  _isClassExist(className, classNameText) {
    if (!className) {
      throw new Error(`A ${classNameText} class not exist`);
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
