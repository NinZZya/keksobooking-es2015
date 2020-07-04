import AbstractComponent from './abstract-component';
import {getFiltersTemplate} from './filters';
import {getFeaturesTemplate} from './features';

const MapFilterSelector = {
  FORM: `.map__filters`,
  FILTER: `.map__filter`,
  FEATURE_FILTER: `input[name="features"]`,
};

const createMapFilterTemplate = () => {
  const filterLists = getFiltersTemplate();
  const featureLists = getFeaturesTemplate();

  return (
    `<div class="map__filters-container">
      <form action="index.html" class="map__filters" autocomplete="off">
        ${filterLists}
        <fieldset id="housing-features" class="map__features">
        ${featureLists}
        </fieldset>
      </form>
    </div>`
  );
};

export default class MapFiltersComponent extends AbstractComponent {
  constructor() {
    super();
    this._filtersFormElement = null;
    this._filtersElements = null;
    this._featuresFiltersElements = null;
    this.filtersHandler = null;
  }
  getTemplate() {
    return createMapFilterTemplate(this._filters, this._features);
  }

  geFiltersForm() {
    return this._getCustomElement(this._filtersFormElement, MapFilterSelector.FORM, this.getElement());
  }

  getFilters() {
    return this._getCustomElements(this._filtersElements, MapFilterSelector.FILTER, this.geFiltersForm());
  }

  getFeaturesFilters() {
    return this._getCustomElements(this._featuresFiltersElements, MapFilterSelector.FEATURE_FILTER, this.geFiltersForm());
  }

  isFiltersActivate() {
    return !this.getFilters()[0].disabled;
  }

  toggleStateFilters() {
    this.getFilters().forEach((filterElement) => {
      filterElement.disabled = !filterElement.disabled;
    });
  }

  addFilterListeners() {
    this.geFiltersForm().addEventListener(`change`, this.filtersHandler);
  }

  removeFilterListeners() {
    this.geFiltersForm().removeEventListener(`change`, this.filtersHandler);
  }
}
