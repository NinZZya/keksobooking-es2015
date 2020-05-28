import * as Utils from '../utils.js';
import {createFilter} from './filter.js';
import {createFeature} from './feature.js';

const createMapFilterTemplate = (filters, features) => {
  const filterLists = filters.map((it) => createFilter(it)).join(`\n`);
  const featureLists = features.map((it) => createFeature(it)).join(`\n`);

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


export default class MapFilterComponent {
  constructor(filters, features) {
    this._element = null;
    this._filters = filters;
    this._features = features;
  }

  getTemplate() {
    return createMapFilterTemplate(this._filters, this._features);
  }

  getElement() {
    if (!this._element) {
      this._element = Utils.createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
