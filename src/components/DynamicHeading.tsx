import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameStore from "../store/useGameStore";

const DynamicHeading = () => {
  const genreId = useGameStore((store) => store.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platform = usePlatform();

  const content = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="7xl" padding={2}>
      {content}
    </Heading>
  );
};

export default DynamicHeading;
