import AbstractComponent from '../abstract-component';
import FilterComponent from './components/filter';
import FeaturesComponent from './components/features';
import {filters} from '../../constants/filters';
import {features} from '../../constants/features';
import {createElement, render, RenderPosition} from '../../utils/utils';

const FILTERS_MESSAGE = `Filters component are`;
const FEATURES_MESSAGE = `A feature component is`;

const MapFilterSelector = {
  FORM: `.map__filters`,
  FEATURES_CONTAINER: `.map__features`,
};

const createMapFilterTemplate = () => {
  return (
    `<div class="map__filters-container">
      <form action="index.html" class="map__filters" autocomplete="off">
        <fieldset id="housing-features" class="map__features">
        </fieldset>
      </form>
    </div>`
  );
};

export default class MapFiltersComponent extends AbstractComponent {
  constructor() {
    super();
    this._filtersFormElement = null;
    this._featuresContainerElement = null;
    this._filtersComponents = filters.map((filter) => new FilterComponent(filter));
    this._featuresComponent = new FeaturesComponent(features);
    this.filtersHandler = null;
  }

  getTemplate() {
    return createMapFilterTemplate(this._filters, this._features);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      render(this.getForm(), this.getFilters(), RenderPosition.AFTERBEGIN);
      render(this.getFeaturesContainer(), this.getFeatures(), RenderPosition.AFTERBEGIN);
    }

    return this._element;
  }

  getForm() {
    return this._getCustomElement(this._filtersFormElement, MapFilterSelector.FORM, this.getElement());
  }

  getFilters() {
    this._isExist(this._filtersComponents, FILTERS_MESSAGE);

    return this._filtersComponents;
  }

  getFeatures() {
    this._isExist(this._featuresComponent, FEATURES_MESSAGE);

    return this._featuresComponent;
  }

  getFeaturesContainer() {
    return this._getCustomElement(this._featuresContainerElement, MapFilterSelector.FEATURES_CONTAINER, this.getElement());
  }

  isActivate() {
    return this.getFilters()[0].isActivate() || this.getFeatures().isActivate();
  }

  toggleState() {
    this.getFilters().forEach((filterComponent) => filterComponent.toggleState());
    this.getFeatures().toggleState();
  }

  setDefault() {
    this.getFilters().forEach((filterComponent) => filterComponent.setDefault());
    this.getFeatures().setDefault();
  }

  addEventListeners() {
    this.getForm().addEventListener(`change`, this.filtersHandler);
  }

  removeEventListeners() {
    this.getForm().removeEventListener(`change`, this.filtersHandler);
  }
}
