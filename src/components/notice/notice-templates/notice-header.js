export const getNoticeHeader = () => {
  return (
    `<fieldset class="ad-form-header">
      <legend class="ad-form-header__title">Ваша фотография (для карты)</legend>
      <div class="ad-form-header__upload">
        <div class="ad-form-header__preview">
          <img src="img/muffin-grey.svg" alt="Аватар пользователя" width="40" height="44">
        </div>
        <div class="ad-form__field">
          <input type="file" id="avatar" name="avatar" class="ad-form-header__input visually-hidden" accept="image/*">
          <label class="ad-form-header__drop-zone" for="avatar">Загрузить<br>фото...</label>
        </div>
        <p class="ad-form-header__info">Заполните все обязательные поля, назначьте цену, загрузите фотографии. Придумайте интересное описание. Оно сделает объявление более живым и привлекательным. Получившееся объявление должно давать гостям полное представление о вашем жилье.</p>
      </div>
    </fieldset>`
  );
};
