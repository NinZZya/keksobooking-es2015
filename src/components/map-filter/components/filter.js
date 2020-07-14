import AbstractComponent from '../../abstract-component';
const DEFAULT_FILTER_INDEX = 0;

const getOptionTemplate = (option, index) => {
  const {value, title} = option;
  return (
    `<option value="${value}" ${index === 0 ? `selected` : ``}>${title}</option>`
  );
};

const getFilterTemplate = (filter) => {
  const {name, options} = filter;
  return (
    `<select name="housing-${name}" id="housing-${name}" class="map__filter">
      ${options.map(getOptionTemplate).join(`\n`)}
    </select>`
  );
};

export default class FilterComponent extends AbstractComponent {
  constructor(filter) {
    super();
    this._filter = filter;
  }
  getTemplate() {
    return getFilterTemplate(this._filter);
  }

  isActivate() {
    return !this.getElement().disabled;
  }

  toggleState() {
    this.getElement().disabled = !this.getElement().disabled;
  }

  setDefault() {
    this.getElement().value = this.getElement()[DEFAULT_FILTER_INDEX].value;
  }

  getID() {
    return this.getElement().id;
  }

  getValue() {
    return this.getElement().value;
  }
}
