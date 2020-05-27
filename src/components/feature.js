const CHECKBOX_CLASS = `map__checkbox visually-hidden`;
const LABEL_CLASS = `map__feature`;
const FEATURE_NAME = `features`;
const ID_PREFIX = `filter-`;


export const createFeature = (feature) => {
  return (
    `<input type="checkbox" name="${FEATURE_NAME}" value="${feature.key}" id="${ID_PREFIX + feature.key}" class="${CHECKBOX_CLASS}">
    <label class="${LABEL_CLASS} ${LABEL_CLASS}--${feature.key}" for="filter-wifi">${feature.value}</label>`
  );
};
