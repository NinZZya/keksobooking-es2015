const ESK_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const isEscKeycode = (evt) => {
  return evt.keyCode === ESK_KEYCODE;
};

const isEnterKeycode = (evt) => {
  return evt.keyCode === ENTER_KEYCODE;
};

/**
 * @description Возвращает следующий индекс для перехода, если конец массива или не найдено значение - 0
 * @param {Object} elem Элемент массива <arr>
 * @param {Object[]} arr Массив с элементами
 * @param {number} startIndex С какого индекса начинать, в случае если конец массива или элемент не найден
 * @returns {number} Следующий индекс для перехода
 */

const getNextIndex = (elem, arr, startIndex = 0) => {
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

/**
* @description Возвращет склоненние слова или окончание для числа
* @param {number} number Число, дя которого нужно найти склонение слов или окончания числа
* @param {Object[]} txt Массив склонений слов или окончания числа
* @returns {String} Слово или окончание для числа
*/

const getEndWord = (number, txt) => {
  const cases = [2, 0, 1, 1, 1, 2];
  let index = 0;
  if (number % 100 > 4 && number % 100 < 20) {
    index = 2;
  } else {
    index = cases[(number % 10 < 5) ? number % 10 : 5];
  }
  return txt[index];
};

/**
 * @description Вставляет <component> в <container> на место <place>
 * @param {Object} container DOM-элемент, куда необходимо вставить component
 * @param {Object} component DOM-элемент, который необходимо вставить в container
 * @param {string} place Место вставки в container значение afterbegin || beforeend
 */
const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

/**
* @description Создает DOM элемент из шаблонной строки
* @param {string} template Шаблон элемента в виде строки
* @returns {Object} Возвращает DOM элемент
*/

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export {RenderPosition};
export {isEnterKeycode};
export {isEscKeycode};
export {getNextIndex};
export {getEndWord};
export {render};
export {createElement};
