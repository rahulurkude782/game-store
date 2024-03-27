import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import DeatilsItem from "./DeatilsItem";
import CriticBadge from "./CriticBadge";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={{ base: 1, md: 2 }} spacing={10} marginY={10}>
      <DeatilsItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DeatilsItem>
      <DeatilsItem term="Metascore">
        <CriticBadge metacritic={game.metacritic} />
      </DeatilsItem>
      <DeatilsItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DeatilsItem>
      <DeatilsItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DeatilsItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
