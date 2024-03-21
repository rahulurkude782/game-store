import usePlatforms from "./usePlatforms";

export default function usePlatform(platformId?: number) {
  const { data: platforms } = usePlatforms();
  return platforms.find((platform) => platform.id === platformId);
}
