import {createFilter} from './filter.js';
import {createFeature} from './feature.js';

export const createMapFilterTemplate = (filters, features) => {
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
