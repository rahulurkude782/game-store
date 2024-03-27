import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 400: string; max: string };
}

export default function useTrailers(gameId: number) {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiClient.getAll,
  });
}
