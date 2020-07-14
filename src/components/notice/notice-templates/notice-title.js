export const getNoticeTitle = () => {
  return (
    `<fieldset class="ad-form__element ad-form__element--wide">
      <label class="ad-form__label" for="title">Заголовок объявления</label>
      <input id="title" name="title" type="text" placeholder="Милая, уютная квартирка в центре Токио" required minlength="30" maxlength="100">
    </fieldset>`
  );
};
