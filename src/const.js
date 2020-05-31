const PIN_WIDTH = 65;
const LOW_PREFIX = `до`;
const HIGH_PREFIX = `от`;
const MIDDLE_PREFIX = `-`;
const CURRENCY = `&#x20bd;`;

const filterValues = {
  price: {
    low: 10000,
    high: 50000,
    middle: [10000, 50000],
  },
};


export const features = {
  wifi: `Wi-Fi`,
  dishwasher: `Посудомоечная машина`,
  parking: `Парковка`,
  washer: `Стиральная машина`,
  elevator: `Лифт`,
  conditioner: `Кондиционер`,
};

const type = {
  any: `Любой тип жилья`,
  palace: `Дворец`,
  flat: `Квартира`,
  house: `Дом`,
  bungalo: `Бунгало`,
};

const price = {
  any: `Любая`,
  middle: `${filterValues.price.middle[0]} ${MIDDLE_PREFIX} ${filterValues.price.low[1]}${CURRENCY}`,
  low: `${LOW_PREFIX} ${filterValues.price.low}${CURRENCY}`,
  high: `${HIGH_PREFIX} ${filterValues.price.high}${CURRENCY}`,
};

const rooms = {
  any: `Любое число комнат`,
  1: `Одна комната`,
  2: `Две комнаты`,
  3: `Три комнаты`,
};

const guests = {
  any: `Любое число гостей`,
  2: `Два гостя`,
  1: `Один гость`,
  0: `Не для гостей`,
};

export const filters = [
  type,
  price,
  rooms,
  guests,
];

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

export const url = {
  load: `https://javascript.pages.academy/keksobooking/data`,
  upload: `https://javascript.pages.academy/keksobooking`
};
