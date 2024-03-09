import { SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";
import { Platform } from "../hooks/usePlatform";
import BoxContainer from "./BoxContainer";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleon";
import PlateFormSelector from "./PlateFormSelector";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform) => void;
}

const GameGrid = ({ gameQuery, onSelectPlatform }: Props) => {
  const { loading, error, data: games } = useGame(gameQuery);
  if (error) return <p>{error}</p>;
  return (
    <>
      {games.length ? (
        <PlateFormSelector
          onSelectPlatform={onSelectPlatform}
          selectedPlatform={gameQuery.platform}
        />
      ) : null}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        padding="10px"
        spacing={3}
      >
        {loading ? (
          <GameCardSkeleton count={9} />
        ) : (
          games.map((game) => (
            <BoxContainer key={game.id}>
              <GameCard game={game} />
            </BoxContainer>
          ))
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
