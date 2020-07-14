import AbstractComponent from '../../abstract-component';


export default class NoticeFieldSetComponent extends AbstractComponent {
  constructor(template) {
    super();
    this._template = template;
  }

  getTemplate() {
    return this._template;
  }

  isActivate() {
    return !this.getElement().disabled;
  }

  toggleState() {
    this.getElement().disabled = !this.getElement().disabled;
  }
}
