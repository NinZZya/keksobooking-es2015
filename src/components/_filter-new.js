const room = {
  any: `Любое число комнат`,
  1: `Одна комната`,
  2: `Две комнаты`,
  3: `Три комнаты`
};

const price = {
  any: `Любая`,
  middle: `10000 - 50000&#x20bd;`,
  low: `до 10000&#x20bd;`,
  high: `от 50000&#x20bd;`
};

const filtersMap = {
  room,
  price
};

const createSelect = (valus, name) => {
  const options = Object.keys(valus).map((key) =>
    `<option value="${key}">
      ${valus[key]}
    </option>`
  );

  return (
    `<select name="${name}" id="${name}">
      ${options}
    </select>`
  );
};

export const filters = Object.keys(filtersMap).map((key) => {
  return createSelect(filtersMap[key], key);
});

// {
//   values: {},
//   type: 'range' | 'from' | 'to',
//
// }
