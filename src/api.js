import SuccessMessageComponent from './components/messages/message-success';
import ErrorMessageComponent from './components/messages/message-error';
import {render, RenderPosition} from './utils/utils';
import {Constant} from './constants/constants';

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

const showSuccessMessage = () => {
  const successMessage = new SuccessMessageComponent();
  render(Constant.mainContainer, successMessage, RenderPosition.BEFOREEND);
  successMessage.addEventListeners();
};

const showErrorMessage = () => {
  const errorMessage = new ErrorMessageComponent();
  render(Constant.mainContainer, errorMessage, RenderPosition.BEFOREEND);
  errorMessage.addEventListeners();
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

  upload(data, successUploadHandler) {

    return this._request({url: ``, method: Method.POST, body: data})
      .then((response) => response.json())
      .then(showSuccessMessage).
      then(successUploadHandler);
  }

  _request({url, method = Method.GET, body = null}) {

    return fetch(`${this._endPoint}/${url}`, {method, body})
      .then(checkStatus)
      .catch(showErrorMessage);
  }
}
