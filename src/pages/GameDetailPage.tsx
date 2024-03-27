import { Box, GridItem, HStack, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameScreenshot from "../components/GameScreenshot";
import GameTrailers from "../components/GameTrailers";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isPending, error } = useGame(params.slug!);
  if (isPending)
    return (
      <HStack alignItems="center" justifyContent="center" height="80vh">
        <Spinner />
      </HStack>
    );

  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <ExpandableText game={game} />
          <GameAttribute game={game} />
        </GridItem>
        <GridItem>
          <GameTrailers gameId={game.id} />
          <GameScreenshot gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
