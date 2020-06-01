const DEFAULT_ITEM = `any`;

const createItem = (name, value) => {
  return (
    `<option value="${name}" ${name === DEFAULT_ITEM ? `selected` : ``}>
      ${value}
    </option>`
  );
};

export const createFilter = (data) => {
  const filterName = Object.keys(data)[0];
  const {keys: filterKeys, values: filterValues} = data[filterName];
  const filterItems = filterKeys.map((key, index) => createItem(key, filterValues[index])).join(`\n`);

  return (
    `<select name="housing-${filterName}" id="housing-${filterName}" class="map__filter">
      ${filterItems}
    </select>`
  );
};
