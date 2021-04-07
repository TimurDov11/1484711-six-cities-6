import axios from "axios";

const BACKEND_URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};

export const createAPI = (onUnauthorized, notFound, onUnavailable) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    try {
      if (response.status === HttpCode.UNAUTHORIZED) {
        onUnauthorized();
      }

      if (response.status === HttpCode.NOT_FOUND) {
        notFound();
      }
    } catch (error) {
      onUnavailable();

      throw new Error(`Server is not available`);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
