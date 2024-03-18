import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default function useGenre() {
  const { data, isPending, error } = useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<Response<Genre>>("/genres")
        .then((res) => res.data.results)
        .catch((error) => error),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: genres,
  });
  return { data, isPending, error };
}
