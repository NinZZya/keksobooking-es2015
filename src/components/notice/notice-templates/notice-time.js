import {notice} from '../../../constants/notice';

const getOtionTemlate = (option) => {
  const {title, value} = option;
  return `<option value="${value}">${title}</option>`;
};

export const getNoticeTime = () => {
  return (
    `<fieldset class="ad-form__element ad-form__element--time">
      <label class="ad-form__label" for="timein">Время заезда и выезда</label>
      <select id="timein" name="timein">
        ${notice.checkin.map(getOtionTemlate).join(`\n`)}
      </select>
      <select id="timeout" name="timeout" title="Time to go out">
        ${notice.checkout.map(getOtionTemlate).join(`\n`)}
      </select>
    </fieldset>`
  );
};
