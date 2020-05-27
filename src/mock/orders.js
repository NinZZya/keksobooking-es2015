import {featureKeys, typeValues, orderValues} from '../const.js';

const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 5;
const MIN_GUEST = 1;
const MAX_GUEST = 10;
const MIN_FEATURES = 2;

const photos = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
];

const titleKeys = typeValues.slice(1);
const titleValues = [
  [`Огромный прекрасный дворец`, `Маленький ужасный дворец`],
  [`Большая уютная квартира`, `Маленькая неуютная квартира`],
  [`Красивый гостевой домик`, `Некрасивый негостеприимный домик`],
  [`Уютное бунгало далеко от моря`, `Неуютное бунгало по коле но в воде`]
];

const typeTitles = new Map();
titleKeys.forEach((it, i) => {
  typeTitles.set(it, titleValues[i]);
});

const getRandomInt = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomArr = (arr, length = arr.length) => {
  const randomArr = arr.slice();
  randomArr.sort(() => Math.random() - 0.5);
  return randomArr.slice(0, length);
};

const generateAvatarsArray = (COUNT_AVATARS) => {
  const arrAvatars = new Array(COUNT_AVATARS).fill(``).map((it, i) => (it = `img/avatars/user0${i}.png`));
  return getRandomArr(arrAvatars);
};

const generateOrder = (avatar) => {
  const locationX = getRandomInt(orderValues.pinCoords.minX, orderValues.pinCoords.maxX);
  const locationY = getRandomInt(orderValues.pinCoords.minY, orderValues.pinCoords.maxY);
  const offerType = getRandomArrValue([...typeTitles.keys()]);
  const titleOffer = getRandomArrValue(typeTitles.get(offerType));
  return (
    {
      'author': {
        'avatar': avatar
      },
      'offer': {
        'title': titleOffer,
        'address': `${locationX}, ${locationY}`,
        'price': getRandomInt(MIN_PRICE, MAX_PRICE),
        'type': offerType,
        'rooms': getRandomInt(MIN_ROOMS, MAX_ROOMS),
        'guests': getRandomInt(MIN_GUEST, MAX_GUEST),
        'checkin': getRandomArrValue(orderValues.timePeriods),
        'checkout': getRandomArrValue(orderValues.timePeriods),
        'features': getRandomArr(featureKeys, getRandomInt(MIN_FEATURES, featureKeys.length)),
        'description': ``,
        'photos': getRandomArr(photos, photos.length)
      },
      'location': {
        'x': locationX,
        'y': locationY
      }
    }
  );
};

const generateOrders = (COUNT_ORDERS) => {
  const avatars = generateAvatarsArray(COUNT_ORDERS);
  return new Array(COUNT_ORDERS).fill(``).map((it, i) => generateOrder(avatars[i]));
};

export {generateOrders};
