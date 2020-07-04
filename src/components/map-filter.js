import AbstractComponent from './abstract-component.js';
import {getFiltersTemplate} from './filters.js';
import {getFeaturesTemplate} from './features.js';

const MapFilterSelector = {
  MAP_FILTER: `.map__filter`,
  MAP_FEATURE_FILTER: `input[name="features"]`,
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

export default class MapFilterComponent extends AbstractComponent {
  constructor() {
    super();
    this._mapFiltersElements = null;
    this._mapFeaturesFiltersElements = null;
  }
  getTemplate() {
    return createMapFilterTemplate(this._filters, this._features);
  }

  getMapFilters() {
    return this._getCustomElements(this._mapFiltersElements, MapFilterSelector.MAP_FILTER, this.getElement());
  }

  getMapFeaturesFilters() {
    return this._getCustomElements(this._mapFeaturesFiltersElements, MapFilterSelector.MAP_FEATURE_FILTER, this.getElement());
  }
}
