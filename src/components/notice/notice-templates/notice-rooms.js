import {notice} from '../../../constants/notice';

const getOtionTemlate = (option) => {
  const {title, value} = option;
  return `<option value="${value}">${title}</option>`;
};

export const getNoticeRooms = () => {
  return (
    `<fieldset class="ad-form__element">
      <label class="ad-form__label" for="room_number">Количество комнат</label>
      <select id="room_number" name="rooms">
        ${notice.rooms.map(getOtionTemlate).join(`\n`)}
      </select>
    </fieldset>`
  );
};
