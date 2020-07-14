export const getNoticePhotos = () => {
  return (
    `<fieldset class="ad-form__element ad-form__element--wide">
      <label class="ad-form__label">Фотография жилья</label>
      <div class="ad-form__photo-container">
        <div class="ad-form__upload">
          <input type="file" id="images" name="images" class="ad-form__input visually-hidden" accept="image/png, image/jpeg" multiple>
          <label for="images" class="ad-form__drop-zone">Загрузить<br>фото...</label>
        </div>
        <div class="ad-form__photo"></div>
      </div>
    </fieldset>`
  );
};
