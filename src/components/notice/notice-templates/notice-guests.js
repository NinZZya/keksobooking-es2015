import {notice} from '../../../constants/notice';

const getOtionTemlate = (option) => {
  const {title, value} = option;
  return `<option value="${value}"}>${title}</option>`;
};

export const getNoticeGuests = () => {
  return (
    `<fieldset class="ad-form__element">
      <label class="ad-form__label" for="capacity">Количество мест</label>
      <select id="capacity" name="capacity">
        ${notice.guests.map(getOtionTemlate).join(`\n`)}
      </select>
    </fieldset>`
  );
};
