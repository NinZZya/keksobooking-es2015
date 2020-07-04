import {getByID} from '../utils/utils.js';

const FILTER_ALL = `any`;
const filterPrice = {
  low: 10000,
  hight: 50000,
};

export default class OrdersModel {
  constructor() {
    this._orders = [];
    this._filteredOrders = [];
    this._listFilters = [];

    this._filterAll = {
      value: `any`,
      rank: 1
    };

    this.filters = {
      'housing-type': {
        type: `type`,
        value: null,
      },
      'housing-rooms': {
        type: `rooms`,
        value: null,
      },
      'housing-guests': {
        type: `guests`,
        value: null,
      },
      'housing-price': {
        value: null,
      },
      'housing-features': {
        value: null,
      },
    };
  }

  setOrders(orders) {
    this._orders = orders.map((order, id) => {
      const orderModel = Object.assign({}, order);
      orderModel.id = id;
      return orderModel;
    });
  }

  getOrderByID(id) {
    return getByID(this._orders, parseInt(id, 10));
  }

  getOrdersByFilters() {
    if (!this._orders.length) {
      throw new Error(`Orders are not exist`);
    }

    return this._getFilteredOrders().filter((order) => {
      return (
        this._isFiltering(order, `housing-type`)
        &&
        this._isFiltering(order, `housing-rooms`)
        &&
        this._isFiltering(order, `housing-guests`)
        &&
        this._isFilteringPrice(order)
        &&
        this._isFilteringFeatures(order)
      );
    });
  }

  isOrdersExist() {
    return this._orders.length;
  }

  _getFilteredOrders() {
    if (!this._filteredOrders.length) {
      this._filteredOrders = this._orders.filter((order) => order.offer);
    }

    return this._filteredOrders;
  }

  /**
   * @description Делает простую проверку для фильтрации
   * @param {Object} order Объявление
   * @param {string} type Название фильра
   * @return Возвращает true || false (проходит условие фильтра)
   */

  _isFiltering(order, type) {
    return (
      this.filters[type].value === FILTER_ALL
        ? true
        : String(this.filters[type].value) === String(order.offer[this.filters[type].type])
    );
  }

  /**
   * @description Делает проверку для фильтрации цены
   * @param {Object} order Объявление
   * @return Возвращает true || false (проходит условие фильтра)
   */

  _isFilteringPrice(order) {
    switch (this.filters[`housing-price`].value) {
      case `low`:
        return order.offer.price < filterPrice.low;
      case `middle`:
        return order.offer.price >= filterPrice.low && order.offer.price < filterPrice.hight;
      case `high`:
        return order.offer.price >= filterPrice.hight;
      default:
        return true;
    }
  }

  /**
   * @description Делает проверку для фильтрации удобств
   * @param {Object} order Объявление
   * @return Возвращает true || false (проходит условие фильтра)
   */

  _isFilteringFeatures(order) {
    return this.filters[`housing-features`].value.every((feature) => !order.offer.features.includes(feature));
  }
}
