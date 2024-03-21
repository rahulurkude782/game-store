import useGenres from "./useGenres";

export default function useGenre(genreId?: number) {
  const { data: genres } = useGenres();
  return genres.find((genre) => genre.id === genreId);
}
