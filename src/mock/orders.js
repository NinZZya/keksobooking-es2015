import {featureKeys, typeValues, orderValues} from '../const.js';
import * as Utils from '../utils.js';


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

const generateAvatarsArray = (COUNT_AVATARS) => {
  const arrAvatars = new Array(COUNT_AVATARS).fill(``).map((it, i) => (it = `img/avatars/user0${i}.png`));
  return Utils.getRandomArr(arrAvatars);
};

const generateOrder = (avatar) => {
  const locationX = Utils.getRandomInt(orderValues.pinCoords.minX, orderValues.pinCoords.maxX);
  const locationY = Utils.getRandomInt(orderValues.pinCoords.minY, orderValues.pinCoords.maxY);
  const offerType = Utils.getRandomArrValue([...typeTitles.keys()]);
  const titleOffer = Utils.getRandomArrValue(typeTitles.get(offerType));
  return (
    {
      'author': {
        'avatar': avatar
      },
      'offer': {
        'title': titleOffer,
        'address': `${locationX}, ${locationY}`,
        'price': Utils.getRandomInt(MIN_PRICE, MAX_PRICE),
        'type': offerType,
        'rooms': Utils.getRandomInt(MIN_ROOMS, MAX_ROOMS),
        'guests': Utils.getRandomInt(MIN_GUEST, MAX_GUEST),
        'checkin': Utils.getRandomArrValue(orderValues.timePeriods),
        'checkout': Utils.getRandomArrValue(orderValues.timePeriods),
        'features': Utils.getRandomArr(featureKeys, Utils.getRandomInt(MIN_FEATURES, featureKeys.length)),
        'description': ``,
        'photos': Utils.getRandomArr(photos, photos.length)
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
