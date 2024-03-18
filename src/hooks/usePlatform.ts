import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { Response } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default function usePlatform() {
  const { data, isPending, error } = useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<Response<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results)
        .catch((error) => error),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: genres,
  });
  return { data, isPending, error };
}
