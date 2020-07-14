export const filters = [
  {
    name: `type`,
    options: [
      {
        value: `any`,
        title: `Любой тип жилья`,
      },
      {
        value: `palace`,
        title: `Дворец`,
      },
      {
        value: `flat`,
        title: `Квартира`,
      },
      {
        value: `house`,
        title: `Дом`,
      },
      {
        value: `bungalo`,
        title: `Бунгало`,
      },
    ],
  },
  {
    name: `price`,
    options: [
      {
        value: `any`,
        title: `Любая`,
      },
      {
        value: `middle`,
        title: `10000 - 50000&#x20bd`,
      },
      {
        value: `low`,
        title: `до 10000&#x20bd;`,
      },
      {
        value: `high`,
        title: `от 50000&#x20bd;`,
      },
    ],
  },
  {
    name: `rooms`,
    options: [
      {
        value: `any`,
        title: `Любое число комнат`,
      },
      {
        value: `1`,
        title: `Одна комната`,
      },
      {
        value: `2`,
        title: `Две комнаты`,
      },
      {
        value: `3`,
        title: `Три комнаты`,
      },
    ],
  },
  {
    name: `guests`,
    options: [
      {
        value: `any`,
        title: `Любое число гостей`,
      },
      {
        value: `2`,
        title: `Два гостя`,
      },
      {
        value: `1`,
        title: `Один гость`,
      },
      {
        value: `0`,
        title: `Не для гостей`,
      },
    ],
  },
];
