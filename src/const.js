import * as Utils from './utils.js';

const PIN_WIDTH = 65;

export const featureKeys = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const featureValues = [`Wi-Fi`, `Посудомоечная машина`, `Парковка`, `Стиральная машина`, `Кондиционер`];

const filterKeys = [`type`, `price`, `rooms`, `guests`];

const typeKeys = [`any`, `palace`, `flat`, `house`, `bungalo`];
export const typeValues = [`Любой тип жилья`, `Дворец`, `Квартира`, `Дом`, `Бунгало`];

const priceKeys = [`any`, `middle`, `low`, `high`];
const priceValues = [`Любая`, `10000 - 50000&#x20bd;`, `до 10000&#x20bd;`, `от 50000&#x20bd;`];

const roomsKeys = [`any`, `1`, `2`, `3`];
const roomsValues = [`Любое число комнат`, `Одна комната`, `Две комнаты`, `Три комнаты`];

const guestsKeys = [`any`, `2`, `1`, `0`];
const guestsValues = [`Любое число гостей`, `Два гостя`, `Один гость`, `Не для гостей`];

const filterValues = [
  Utils.createMapArray(typeKeys, typeValues),
  Utils.createMapArray(priceKeys, priceValues),
  Utils.createMapArray(roomsKeys, roomsValues),
  Utils.createMapArray(guestsKeys, guestsValues)
];

export const features = Utils.createMapArray(featureKeys, featureValues);
export const filters = Utils.createMapArray(filterKeys, filterValues);

export const orderValues = {
  timePeriods: [`12:00`, `13:00`, `14:00`],
  roomTexts: [`комната`, `комнаты`, `комнат`],
  guestTexts: [`гостя`, `гостей`, `гостей`],
  pinCoords: {
    minX: 0,
    maxX: 1200 - PIN_WIDTH,
    minY: 130,
    maxY: 630
  }
};

export const URL = {
  load: `https://javascript.pages.academy/keksobooking/data`,
  upload: `https://javascript.pages.academy/keksobooking`
};
