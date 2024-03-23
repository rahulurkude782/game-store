import useGameStore from "../store/useGameStore";
import usePlatforms from "./usePlatforms";

export default function usePlatform() {
  const platformId = useGameStore((store) => store.gameQuery.platformId);
  const { data: platforms } = usePlatforms();
  return platforms.find((platform) => platform.id === platformId);
}
