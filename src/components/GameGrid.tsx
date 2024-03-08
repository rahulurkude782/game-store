import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleon";
import BoxContainer from "./BoxContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { loading, error, data: games } = useGame(selectedGenre);
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
