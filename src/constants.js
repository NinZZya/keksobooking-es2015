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


export const features = [
  {wifi: `Wi-Fi`},
  {dishwasher: `Посудомоечная машина`},
  {parking: `Парковка`},
  {washer: `Стиральная машина`},
  {elevator: `Лифт`},
  {conditioner: `Кондиционер`},
];

const type = {
  keys: [`any`, `palace`, `flat`, `house`, `bungalo`],
  values: [`Любой тип жилья`, `Дворец`, `Квартира`, `Дом`, `Бунгало`],
};

const price = {
  keys: [`any`, `middle`, `low`, `high`],
  values: [
    `Любая`,
    `${filterValues.price.middle[0]} ${MIDDLE_PREFIX} ${filterValues.price.middle[1]}${CURRENCY}`,
    `${LOW_PREFIX} ${filterValues.price.low}${CURRENCY}`,
    `${HIGH_PREFIX} ${filterValues.price.high}${CURRENCY}`
  ]
};

const rooms = {
  keys: [`any`, `1`, `2`, `3`],
  values: [`Любое число комнат`, `Одна комната`, `Две комнаты`, `Три комнаты`],
};

const guests = {
  keys: [`any`, `2`, `1`, `0`],
  values: [`Любое число гостей`, `Два гостя`, `Один гость`, `Не для гостей`],
};

export const filters = [
  {type},
  {price},
  {rooms},
  {guests},
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
