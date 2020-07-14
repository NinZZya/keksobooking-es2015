import {getNoticeHeader} from './notice-header';
import {getNoticeTitle} from './notice-title';
import {getNoticeAddress} from './notice-address';
import {getNoticeType} from './notice-type';
import {getNoticePrice} from './notice-price';
import {getNoticeTime} from './notice-time';
import {getNoticeRooms} from './notice-rooms';
import {getNoticeGuests} from './notice-guests';
import {getNoticeFeatures} from './notice-features';
import {getNoticeDescription} from './notice-description';
import {getNoticePhotos} from './notice-photos';
import {getNoticeSubmit} from './notice-submit';

export const noticeTemplates = [
  getNoticeHeader(),
  getNoticeTitle(),
  getNoticeAddress(),
  getNoticeType(),
  getNoticePrice(),
  getNoticeTime(),
  getNoticeRooms(),
  getNoticeGuests(),
  getNoticeFeatures(),
  getNoticeDescription(),
  getNoticePhotos(),
  getNoticeSubmit(),
];
