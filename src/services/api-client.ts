import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d4e97545370c40e9b4d3ec5b064337b7",
  },
});

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<Response<T>>(this.endPoint, config)
      .then((res) => res.data)
      .catch((error) => error);
  };

  find = (id: number | string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id, config)
      .then((res) => res.data)
      .catch((error) => error);
  };
}

export default APIClient;
