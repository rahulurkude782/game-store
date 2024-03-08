import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleon";
import BoxContainer from "./BoxContainer";

const GameGrid = () => {
  const { loading, error, data: games } = useGame();
  console.log({ loading });
  if (error) return <p>{error}</p>;
  return (
    <>
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
