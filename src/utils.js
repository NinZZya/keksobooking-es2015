const ESK_KEYCODE = 27;
const ENTER_KEYCODE = 13;

export const isEscKeycode = (evt) => {
  return evt.keyCode === ESK_KEYCODE;
};

export const isEnterKeycode = (evt) => {
  return evt.keyCode === ENTER_KEYCODE;
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
  const cases = [2, 0, 1, 1, 1, 2];
  let index = 0;
  if (number % 100 > 4 && number % 100 < 20) {
    index = 2;
  } else {
    index = cases[(number % 10 < 5) ? number % 10 : 5];
  }
  return txt[index];
};

export const createMapArray = (keys, values) => {
  return keys.map((it, i) => ({key: it, value: values[i]}));
};

export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
