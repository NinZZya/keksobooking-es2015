export const getNoticePrice = () => {
  return (
    `<fieldset class="ad-form__element">
      <label class="ad-form__label" for="price">Цена за ночь, руб.</label>
      <input id="price" name="price" type="number" placeholder="5000" max="1000000">
    </fieldset>`
  );
};
