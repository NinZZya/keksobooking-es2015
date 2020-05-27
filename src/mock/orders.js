import {featureKeys, features} from './const.js';

const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 5;
const MIN_GUEST = 1;
const MAX_GUEST = 10;
const MIN_FEATURES = 2;
const photos = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];

const generateAvatarsArray = (path, imgSufix, imgEx, countAvatars) => {
  const arrAvatars = [];
  for (let i = 0; i < countAvatars; i++) {
    arrAvatars.push(path + imgSufix + String(i + 1) + imgEx);
  }
  return arrAvatars;
};

const avatars =

const generateOrder = () => {
  return (
    {
      `author`: {
        `avatar`: avatars[i]
      },
      `offer`: {
        `title`: typeTitle.title,
        `address`: String(locationX) + `, ` + String(locationY),
        `price`: window.utils.getRandomInt(MIN_PRICE, MAX_PRICE),
        `type`: typeTitle.type,
        `rooms`: window.utils.getRandomInt(MIN_ROOMS, MAX_ROOMS),
        `guests`: window.utils.getRandomInt(MIN_GUEST, MAX_GUEST),
        `checkin`: window.utils.getRandomArrValue(window.data.def.timePeriods),
        `checkout`: window.utils.getRandomArrValue(window.data.def.timePeriods),
        `features`: window.utils.getRandomArr(
            window.data.def.features, window.utils.getRandomInt(MIN_FEATURES, window.data.def.features.length)
        ),
        `description`: ``,
        `photos`: window.utils.getRandomArr(photos, photos.length)
      },
      `location`: {
        `x`: locationX,
        `y`: locationY
      },
    };
    arrOrders.push(orderElement);
    }
  );
};





export {generateFeatures};





    generateOrders: function (countOrders) {


      var getRandomTitlesAndTypes = function (randomFile) {
        var typesArr = Object.keys(randomFile);
        var result = {
          type: window.utils.getRandomArrValue(typesArr),
          title: ``
        };
        result.title = window.utils.getRandomArrValue(randomFile[result.type].title);
        return result;
      };

      var avatars = window.utils.getRandomArr(generateAvatarsArray(`img/avatars/`, `user0`, `.png`, countOrders), countOrders);
      var arrOrders = [];

      for (var i = 0; i < countOrders; i++) {
        var locationX = window.utils.getRandomInt(window.data.def.movePinInf.minX, window.data.def.movePinInf.maxX);
        var locationY = window.utils.getRandomInt(window.data.def.movePinInf.minY, window.data.def.movePinInf.maxY);
        var typeTitle = getRandomTitlesAndTypes(window.data.def.typeTitles);
        var orderElement =
      return arrOrders;
    }
  };
})();




