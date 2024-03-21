import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

export default function useGenres() {
  const { data, isPending, error } = useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24hrs
    initialData: genres,
  });
  return { data, isPending, error };
}
