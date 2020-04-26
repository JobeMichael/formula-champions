import axios, { AxiosRequestConfig } from "axios";

const baseURL = "http://ergast.com/api/f1";

const httpClient = (config?: AxiosRequestConfig) => {
  const JSON_TYPE = "application/json";
  const instance = axios.create({
    baseURL,
    headers: {
      common: { Accept: JSON_TYPE },
      post: { "Content-Type": JSON_TYPE },
      put: { "Content-Type": JSON_TYPE },
      patch: { "Content-Type": JSON_TYPE },
    },
    ...config,
  });

  return {
    instance,
  };
};

export default httpClient;
