import AbstractComponent from '../../abstract-component';

const FEATURE_FILTER_SELECTOR = `input[name="features"]`;

const getFeatureTemplate = (feature) => {
  const {value, title} = feature;
  return (
    `<input type="checkbox" name="features" value="${value}" id="filter-${value}" class="map__checkbox visually-hidden">
    <label class="map__feature map__feature--${value}" for="filter-${value}">${title}</label>`
  );
};

const getFeaturesTemplate = (features) => {
  return (
    `<fieldset id="housing-features" class="map__features">
      ${features.map(getFeatureTemplate).join(`\n`)}
    </fieldset>`
  );
};

export default class FeaturesComponent extends AbstractComponent {
  constructor(features) {
    super();
    this._features = features;
    this._featuresFiltersElements = null;
  }

  getTemplate() {
    return getFeaturesTemplate(this._features);
  }

  getFilters() {
    return this._getCustomElements(this._featuresFiltersElements, FEATURE_FILTER_SELECTOR, this.getElement());
  }

  isActivate() {
    return !this.getFilters()[0].disabled;
  }

  toggleState() {
    this.getFilters().forEach((featuresFilterElement) => {
      featuresFilterElement.disabled = !featuresFilterElement.disabled;
    });
  }

  setDefault() {
    this.getFilters().forEach((featuresFilterElement) => {
      featuresFilterElement.checked = false;
    });
  }

  getID() {
    return this.getElement().id;
  }
}
