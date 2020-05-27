export const isEscKeycode = (evt) => {
  return evt.keyCode === ESK_KEYCODE;
};

export const isEnterKeycode = (evt) => {
  return evt.keyCode === ENTER_KEYCODE;
};

export const getRandomInt = (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomArrValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const getRandomArr = (arr, length = arr.length) => {
  const randomArr = arr.slice();
  randomArr.sort((a, b) => Math.random() - 0.5);
  return randomArr.slice(0, length);
};

export const getNextIndex = (elem, arr, startIndex = 0) => {
  let index = arr.indexOf(elem);
  switch (index) {
    case -1:
      return startIndex;
    case arr.length - 1:
      return 0;
    default:
      return index++;
  }
};

export const getEndWord = (number, txt) => {
  var cases = [2, 0, 1, 1, 1, 2];
  var index = 0;
  if (number % 100 > 4 && number % 100 < 20) {
    index = 2;
  } else {
    index = cases[(number % 10 < 5) ? number % 10 : 5];
  }
  return txt[index];
};
