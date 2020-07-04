export const getFeaturesTemplate = () => {
  return (
    `<fieldset id="housing-features" class="map__features">
      <input type="checkbox" name="features" value="wifi" id="filter-wifi" class="map__checkbox visually-hidden">
      <label class="map__feature map__feature--wifi" for="filter-wifi">Wi-Fi</label>
      <input type="checkbox" name="features" value="dishwasher" id="filter-dishwasher" class="map__checkbox visually-hidden">
      <label class="map__feature map__feature--dishwasher" for="filter-dishwasher">Посудомоечная машина</label>
      <input type="checkbox" name="features" value="parking" id="filter-parking" class="map__checkbox visually-hidden">
      <label class="map__feature map__feature--parking" for="filter-parking">Парковка</label>
      <input type="checkbox" name="features" value="washer" id="filter-washer" class="map__checkbox visually-hidden">
      <label class="map__feature map__feature--washer" for="filter-washer">Стиральная машина</label>
      <input type="checkbox" name="features" value="elevator" id="filter-elevator" class="map__checkbox visually-hidden">
      <label class="map__feature map__feature--elevator" for="filter-elevator">Лифт</label>
      <input type="checkbox" name="features" value="conditioner" id="filter-conditioner" class="map__checkbox visually-hidden">
      <label class="map__feature map__feature--conditioner" for="filter-conditioner">Кондиционер</label>
   </fieldset>`
  );
};
