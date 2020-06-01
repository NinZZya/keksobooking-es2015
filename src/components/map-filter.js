import AbstractComponent from './abstract-component.js';
import {createFilter} from './filter.js';
import {createFeature} from './feature.js';

const createMapFilterTemplate = (filters, features) => {
  const filterLists = filters.map((filter) => createFilter(filter)).join(`\n`);
  const featureLists = features.map((feature) => createFeature(feature)).join(`\n`);

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
  constructor(filters, features) {
    super();
    this._filters = filters;
    this._features = features;
  }

  getTemplate() {
    return createMapFilterTemplate(this._filters, this._features);
  }
}
