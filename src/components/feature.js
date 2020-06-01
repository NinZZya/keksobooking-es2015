export const createFeature = (feature) => {
  const key = Object.keys(feature)[0];
  const value = feature[key];
  return (
    `<input type="checkbox" name="features" value="${key}" id="filter-${key}" class="map__checkbox visually-hidden">
    <label class="map__feature map__feature--${key}" for="filter-wifi">${value}</label>`
  );
};
