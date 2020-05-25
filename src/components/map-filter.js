export const createMapFilterTemplate = () => {
  return (
    `<div class="map__filters-container">
      <form action="#" class="map__filters" autocomplete="off">
        <select name="housing-type" id="housing-type" class="map__filter">
          <option value="any" selected>Любой тип жилья</option>
          <option value="palace">Дворец</option>
          <option value="flat">Квартира</option>
          <option value="house">Дом</option>
          <option value="bungalo">Бунгало</option>
        </select>
        <select name="housing-price" id="housing-price" class="map__filter">
          <option value="any" selected>Любая</option>
          <option value="middle">10000 - 50000&#x20bd;</option>
          <option value="low">до 10000&#x20bd;</option>
          <option value="high">от 50000&#x20bd;</option>
        </select>
        <select name="housing-rooms" id="housing-rooms" class="map__filter">
          <option value="any" selected>Любое число комнат</option>
          <option value="1">Одна комната</option>
          <option value="2">Две комнаты</option>
          <option value="3">Три комнаты</option>
        </select>
        <select name="housing-guests" id="housing-guests" class="map__filter">
          <option value="any" selected>Любое число гостей</option>
          <option value="2">Два гостя</option>
          <option value="1">Один гость</option>
          <option value="0">Не для гостей</option>
        </select>
        <fieldset id="housing-features" class="map__features">
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
        </fieldset>
      </form>
    </div>`
  );
};
