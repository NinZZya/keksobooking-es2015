import ErrorMessageComponent from './components/message-error';
import {render, RenderPosition} from './utils/utils';
import {Constant} from './constants';

const Method = {
  GET: `GET`,
  POST: `POST`,
};

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class API {
  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  load(successLoadHandler) {
    return this._request({url: `data`})
      .then((response) => response.json())
      .then((response) => successLoadHandler(response));
  }

  _request({url, method = Method.GET, body = null}) {

    return fetch(`${this._endPoint}/${url}`, {method, body})
      .then(checkStatus)
      .catch(() => {
        const errorMessage = new ErrorMessageComponent();
        render(Constant.mainContainer, errorMessage, RenderPosition.BEFOREEND);
        errorMessage.addMessageErrorListeners();
      });
  }
}
