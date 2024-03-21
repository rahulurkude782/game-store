import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const DynamicHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();

  const genre = genres.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const content = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="7xl" padding={2}>
      {content}
    </Heading>
  );
};

export default DynamicHeading;
