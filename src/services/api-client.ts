import axios from "axios";

export interface Response<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d4e97545370c40e9b4d3ec5b064337b7",
  },
});

export default apiClient;
