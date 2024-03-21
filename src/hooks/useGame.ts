import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { Response } from "../services/api-client";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

export default function useGame(gameQuery: GameQuery) {
  return useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery?.order,
          search: gameQuery.searchString,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
}
