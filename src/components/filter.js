const FILTER_CLASS = `map__filter`;
const NAME_PREFIX = `housing-`;
const ID_PREFIX = `housing-`;

export const createFilter = (filter) => {
  const createFilterItem = (item, isSelected) => {
    return (
      `<option value="${item.key}" ${isSelected ? `selected` : ``}>
        ${item.value}
      </option>`
    );
  };

  const filterItems = filter.value.map((it, i) => createFilterItem(it, i === 0)).join(`\n`);

  return (
    `<select name="${NAME_PREFIX + filter.key}" id="${ID_PREFIX + filter.key}" class="${FILTER_CLASS}">
      ${filterItems}
    </select>`
  );
};
