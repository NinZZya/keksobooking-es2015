import AbstractComponent from '../components/abstract-component';

const ESK_KEYCODE = 27;
const ENTER_KEYCODE = 13;
const LEFT_MOUSE_BUTTON = 0;
const FILE_TYPES = [`gif`, `svg`, `jpg`, `jpeg`, `png`];

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

/**
 * @description Проверяет нажата клавиша Esc
 * @param {number} evt Код клавиши
 * @return Возвращает true || false
 */

export const isEscPressed = (evt) => evt.keyCode === ESK_KEYCODE;

/**
 * @description Проверяет нажата клавиша Enter
 * @param {number} evt Код клавиши
 * @return Возвращает true || false
 */

export const isEnterPressed = (evt) => evt.keyCode === ENTER_KEYCODE;

/**
 * @description Проверяет нажата главная кнопка мыши или нет
 * @param {Object} evt Событие клика мышки
 */

export const isLeftMouseButtonPressed = (evt) => evt.button === LEFT_MOUSE_BUTTON;


/**
 * @description Возвращет склоненние слова или окончание для числа
 * @param {number} number Число, дя которого нужно найти склонение слов или окончания числа
 * @param {Object[]} txt Массив склонений слов или окончания числа. Массив из 3 значений
 * @return {String} Слово или окончание для числа
 *
 * Слова с окончаниями для чисел:
 * Вариант1 (индекс 0): 1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131, 141 и т.д.
 * Вариант2 (индекс 1): 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44 ... 102, 103, 104, 122, 123, 124, 132 и т.д.
 * Вариант3 (индекс 2): 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35 и т.д.
 */

export const getEndWord = (number, txt) => {
  const cases = [2, 0, 1, 1, 1, 2];
  let index = 0;
  // Если число от 5 до 19, выбираем последний Вариант3 (индекс 2)
  if (number % 100 > 4 && number % 100 < 20) {
    index = 2;
  } else {
    // Если число заканчивается на 5 выбираем последний Вариант3 (индекс 2), иначе берем значение в зависимоти от кейса cases
    index = cases[(number % 10 < 5) ? number % 10 : 5];
  }
  return txt[index];
};

/**
 * @description Вставляет <$element> в <$container> на место <place>
 * @param {Object} container DOM-элемент, куда необходимо вставить component
 * @param {Object} element DOM-элемент, который необходимо вставить в container
 * @param {string} place Место вставки в container значение afterbegin || beforeend
 */

const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

/**
 * @description Создает фрагмент с объектами для вставки
 * @param {Object[]} elements Массив DOM-элементов
 * @return {Object}
 */

const createRenderFragment = (elements) => {
  const fragment = document.createDocumentFragment();

  elements.forEach(function (element) {
    const rendElement = getRenderElement(element);
    fragment.appendChild(rendElement);
  });

  return fragment;
};

const getRenderElement = (element) => element instanceof AbstractComponent ? element.getElement() : element;

/**
 * @description Вставляет <$element> в <$container> на место <place>
 * @param {Object} container DOM-элемент, куда необходимо вставить component
 * @param {Object} element DOM-элемент, который необходимо вставить в container
 * @param {string} place Место вставки в container значение afterbegin || beforeend || DOMElement. По умолчанию beforeend
 */

export const render = (container, element, place) => {
  let rendElement = null;
  const rendContainer = getRenderElement(container);

  if (Array.isArray(element)) {
    rendElement = createRenderFragment(element);
  } else {
    rendElement = getRenderElement(element);
  }

  if (place instanceof Object) {
    const rendPlace = getRenderElement(place);
    rendContainer.insertBefore(rendElement, rendPlace);
  } else {
    renderElement(rendContainer, rendElement, place);
  }
};


/**
 * @description Создает DOM элемент из шаблонной строки
 * @param {string} template Шаблон элемента в виде строки
 * @returns {Object} Возвращает DOM элемент
 */

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

/**
 * @description Удаляет компонет
 * @param {Object} component Компонент
 */

export const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

/**
 * @description Устанавливает изображение file в $preview
 * @param {Object} file Объект file
 * @param {Object} $previewImage DOM элемент для вставки изображения
 */

export const loadImage = (file, previewImageElement) => {
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some(function (fileType) {
    return fileName.endsWith(fileType);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener(`load`, function () {
      previewImageElement.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

export const throttle = function (callback, ms) {
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;

  const wrapper = function () {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    callback.apply(this, arguments);
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis. savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  };

  return wrapper;
};
