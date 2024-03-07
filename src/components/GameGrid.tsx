import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleon";

const GameGrid = () => {
  const { loading, error, games } = useGame();
  if (error) return <p>{error}</p>;
  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} padding="10px" spacing={4}>
        {loading && <GameCardSkeleton count={9} />}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
