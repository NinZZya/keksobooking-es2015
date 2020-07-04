import AbstractComponent from './abstract-component.js';

export default class AbstractLiveComponent extends AbstractComponent {
  constructor(TOGGLE_CLASS) {
    super();
    this._TOGGLE_CLASS = TOGGLE_CLASS;
  }

  _isClassExist(className, classNameText) {
    if (!className) {
      throw new Error(`A ${classNameText} class not exist`);
    }
  }

  isActivate() {
    this._isClassExist(this._TOGGLE_CLASS, `toggle`);
    return !this.getElement().classList.contains(this._TOGGLE_CLASS);
  }

  toggleState() {
    this._isClassExist(this._TOGGLE_CLASS, `toggle`);
    this.getElement().classList.toggle(this._TOGGLE_CLASS);
  }
}
