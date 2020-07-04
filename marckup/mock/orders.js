import * as CoordsUtil from '../utils/coords';
import * as Randomazier from '../utils/randomizer';
import {Constant} from '../constants';

const MIN_FEATURES = 2;
const AVATARS_COUNT = 8;
const MAP_MIN_X = 0;
const MAP_MAX_X = 1200;
const MAP_MIN_Y = 130;
const MAP_MAX_Y = 630;

const timePeriods = [`12:00`, `13:00`, `14:00`];
const features = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];

const price = {
  min: 1000,
  max: 1000000,
};

const rooms = {
  min: 1,
  max: 10,
};

const guests = {
  min: 1,
  max: 10,
};

const descriptions = [
  `Великолепный вариан в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.`,
  `Без интернета, регистрации и СМС. Расположена на краю парка`,
  `Уютное гнездышко для молодоженов`,
  `Подходит для всех кто любит тишину.`,
  `Находится в старинном центре города. Только для тех кто может себе позволить роскошь. Лакеев и прочих жокеев просим не беспокоить.`,
  `Минимализм во всем. Для самых не требовательных.`,
  `У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!`,
  `Тут красиво, светло и уютно. Кофе и печеньки бесплатно.`,
  `Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.`,
];

const photos = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`,
];

let titles = [
  `object находится недалеко от метро`,
  `object с самым красивым видом на центр года`,
  `object для требовательных и богатых`,
  `object для командировок`,
  `object для одиноких путешественников`,
  `object для компании друзей`,
  `object для влюбленной пары`,
];

const bookingTypes = Object.keys(Constant.bookingType);

/**
 *
 * @param {string} typeBooking Тип объекта бронирования
 * @return {string} Заголовок объекта бронирования
 */

const generateTitle = (typeBooking) => {
  const REPLACE = `object`;

  return Randomazier.getRandomArrValue(titles).replace(REPLACE, typeBooking);
};

/**
 * @return {Object}
 */

const generateOrder = (order, index) => {
  let coordsOrder = CoordsUtil.set(
      Randomazier.getRandomInt(MAP_MIN_X, MAP_MAX_X),
      Randomazier.getRandomInt(MAP_MIN_Y, MAP_MAX_Y)
  );

  coordsOrder = CoordsUtil.convertToLocation(coordsOrder);

  const bookingType = Randomazier.getRandomArrValue(bookingTypes);

  order = {
    author: {
      avatar: `img/avatars/${index < AVATARS_COUNT ? `user0` + (index + 1) : `default`}.png`,
    },
    offer: {
      title: generateTitle(Constant.bookingType[bookingType].title),
      address: coordsOrder.x + `, ` + coordsOrder.y,
      price: Randomazier.getRandomInt(price.min, price.max),
      type: bookingType,
      rooms: Randomazier.getRandomInt(rooms.min, rooms.max),
      guests: Randomazier.getRandomInt(guests.min, guests.max),
      checkin: Randomazier.getRandomArrValue(timePeriods),
      checkout: Randomazier.getRandomArrValue(timePeriods),
      features: Randomazier.getRandomArr(features, Randomazier.getRandomInt(MIN_FEATURES, features.length)),
      description: Randomazier.getRandomArrValue(descriptions),
      photos: Randomazier.getRandomArr(photos, Randomazier.getRandomInt(1, photos.length + 1)),
    },
    location: {
      x: coordsOrder.x,
      y: coordsOrder.y
    }
  };

  return order;
};

/**
 * @param {number} count Количество карточек букинга
 * @return {Object[]} Массив карточек букинга
 */

export const generateOrders = (count) => new Array(count).fill(``).map(generateOrder);
