export const getNoticeDescription = () => {
  return (
    `<fieldset class="ad-form__element ad-form__element--wide">
      <label class="ad-form__label" for="description">Описание (не обязательно)</label>
      <textarea id="description" name="description" placeholder="Здесь расскажите о том, какое ваше жилье замечательное и вообще"></textarea>
    </fieldset>`
  );
};
