
const PIN_WIDTH = 50;
const PIN_HEIGHT = 70;
const MAIN_PIN_WIDTH = 65;
const MAIN_PIN_HEIGHT = 82;
const MAP_MIN_X = 0;
const MAP_MAX_X = 1200;
const MAP_MIN_Y = 130;
const MAP_MAX_Y = 630;

const GAP = MAIN_PIN_WIDTH / 2;
const minX = MAP_MIN_X - GAP;
const maxX = MAP_MAX_X - GAP;
const minY = MAP_MIN_Y - MAIN_PIN_HEIGHT;
const maxY = MAP_MAX_Y - MAIN_PIN_HEIGHT;

/**
 * @return {Object} {x:null, y:null}
 */

export const create = () => ({x: null, y: null});

/**
 * @param {number} x Координата X
 * @return {number} Координата в пределаха карты
 */

export const setX = (x) => Math.max(Math.min(x, maxX), minX);

/**
 * @param {number} y Координата Y
 * @return {number} Координата в пределаха карты
 */

export const setY = (y) => Math.max(Math.min(y, maxY), minY);

/**
 * @param {number} x Координата X, которую нужно утановить
 * @param {number} y Координата Y, которую нужно утановить
 * @return {Object} Координаты {x: number, y:number}
 */

export const set = (x, y) => ({x: setX(x), y: setY(y)});

/**
 * @param {Object} obj Координаты {x: number, y:number}
 */

export const convertToLocation = (obj) => ({
  x: Math.floor(obj.x + MAIN_PIN_WIDTH / 2),
  y: Math.floor(obj.y + MAIN_PIN_HEIGHT),
});

/**
 * @param {Object} obj Координаты {x: number, y:number}
 */

export const convertFromLocation = (obj) => ({
  x: Math.floor(obj.x - PIN_WIDTH / 2),
  y: Math.floor(obj.y - PIN_HEIGHT),
});

/**
 * @description Конвертирует координату в число, удаляет "px" если есть
 * @param {Object} coord Координата
 */

export const convertToCoord = (coord) => parseInt(String(coord).replace(`px`, ``), 10);

/**
 * @description Удалит слово "px" у координат
 * @param {string} x Координата X, которую нужно сконвертировать
 * @param {string} y Координата Y, которую нужно сконвертировать
 * @return {Object} Координаты {x: number, y:number}
 */

export const convertToCoords = (x, y) => ({x: convertToCoord(x), y: convertToCoord(y)});
