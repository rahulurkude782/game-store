import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export default function usePlatforms() {
  const { data, isPending, error } = useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24hrs
    initialData: platforms,
  });
  return { data, isPending, error };
}
