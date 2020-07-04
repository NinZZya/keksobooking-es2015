export const getFiltersTemplate = () => {
  return (
    `<select name="housing-type" id="housing-type" class="map__filter">
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
    </select>`
  );
};
