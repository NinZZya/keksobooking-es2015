import AbstractComponent from './abstract-component.js';
import {noticeElements} from './notice-elements.js';

const createNoticeTemplate = () => {
  return (
    `<section class="notice">
      <h2 class="notice__title">Ваше объявление</h2>
      <form class="ad-form ad-form--disabled" method="post" enctype="multipart/form-data" autocomplete="off">
        ${noticeElements.join(`\n`)}
      </form>
    </section>`
  );
};


export default class NoticeComponent extends AbstractComponent {
  getTemplate() {
    return createNoticeTemplate();
  }
}
