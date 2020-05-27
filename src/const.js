const createMapArray = (keys, values) => {
  return keys.map((it, i) => ({key: it, value: values[i]}));
};

const PIN_WIDTH = 65;

const featureKeys = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const featureValues = [`Wi-Fi`, `Посудомоечная машина`, `Парковка`, `Стиральная машина`, `Кондиционер`];

const filterKeys = [`type`, `price`, `rooms`, `guests`];

const typeKeys = [`any`, `palace`, `flat`, `house`, `bungalo`];
const typeValues = [`Любой тип жилья`, `Дворец`, `Квартира`, `Дом`, `Бунгало`];

const priceKeys = [`any`, `middle`, `low`, `high`];
const priceValues = [`Любая`, `10000 - 50000&#x20bd;`, `до 10000&#x20bd;`, `от 50000&#x20bd;`];

const roomsKeys = [`any`, `1`, `2`, `3`];
const roomsValues = [`Любое число комнат`, `Одна комната`, `Две комнаты`, `Три комнаты`];

const guestsKeys = [`any`, `2`, `1`, `0`];
const guestsValues = [`Любое число гостей`, `Два гостя`, `Один гость`, `Не для гостей`];

const filterValues = [
  createMapArray(typeKeys, typeValues),
  createMapArray(priceKeys, priceValues),
  createMapArray(roomsKeys, roomsValues),
  createMapArray(guestsKeys, guestsValues)
];

export const features = createMapArray(featureKeys, featureValues);
export const filters = createMapArray(filterKeys, filterValues);

export {featureKeys};

export const orderValues = {
  timePeriods: [`12:00`, `13:00`, `14:00`],
  roomTexts: [`комната`, `комнаты`, `комнат`],
  guestTexts: [`гостя`, `гостей`, `гостей`],
  movePinInf: {
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
