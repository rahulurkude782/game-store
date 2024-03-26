import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

export default function useGame(id: number | string) {
  return useQuery<Game>({
    queryKey: ["games", id],
    queryFn: () => apiClient.find(id),
  });
}
