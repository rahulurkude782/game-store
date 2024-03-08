import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

export default function useGenre() {
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGenre(res.data.results);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { loading, error, genre };
}
