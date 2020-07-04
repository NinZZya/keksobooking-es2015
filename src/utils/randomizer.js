/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 */

export const getRandomInt = (min, max) => min + Math.floor(Math.random() * (max - min));

/**
 * @param {Object[]} arr Массив значений
 * @return {*} Рандомное значение
 */

export const getRandomArrValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * @param {Object[]} arr Исходный массив значений
 * @param {number} length Длинна массива, который нужно получить
 * @return {Object[]} Рандомный массив
 */

export const getRandomArr = (arr, length) => {
  length = length || arr.length;
  const randomArr = arr.slice();
  randomArr.sort(function () {
    return Math.random() - 0.5;
  });
  return randomArr.slice(0, length);
};
