import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { Response } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export default function useGame(gameQuery: GameQuery) {
  const { data, isPending, error } = useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<Response<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery?.order,
            search: gameQuery.searchString,
          },
        })
        .then((res) => res.data.results)
        .catch((error) => error),
    staleTime: 60 * 1000, //1min
  });
  return { data, isPending, error };
}
