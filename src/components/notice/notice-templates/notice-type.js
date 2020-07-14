import {notice} from '../../../constants/notice';

const getOtionTemlate = (option) => {
  const {title, value} = option;
  return `<option value="${value}">${title}</option>`;
};

export const getNoticeType = () => {
  return (
    `<fieldset class="ad-form__element">
      <label class="ad-form__label" for="type">Тип жилья</label>
      <select id="type" name="type">
        ${notice.type.map(getOtionTemlate).join(`\n`)}
      </select>
    </fieldset>`
  );
};
