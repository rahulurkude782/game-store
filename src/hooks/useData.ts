import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Response<T> {
  count: number;
  results: T[];
}

export default function useData<T>(endPoint: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<Response<T>>(endPoint, { signal: controller.signal })
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
  }, [endPoint]);

  return { loading, error, data };
}
