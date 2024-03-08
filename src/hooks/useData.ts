import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface Response<T> {
  count: number;
  results: T[];
}

export default function useData<T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      apiClient
        .get<Response<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.results);
        })
        .catch((error) => {
          setLoading(false);
          if (error instanceof CanceledError) return;
          setError(error.message);
        })
        .finally(() => setLoading(false));

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { loading, error, data };
}
