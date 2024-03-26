import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { Response } from "../services/api-client";
import useGameStore from "../store/useGameStore";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  slug: string;
}

const apiClient = new APIClient<Game>("/games");

export default function useGames() {
  const gameQuery = useGameStore((store) => store.gameQuery);
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
    staleTime: ms("24h"), //24hrs
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
}
