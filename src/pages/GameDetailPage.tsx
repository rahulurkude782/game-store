import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isPending, error } = useGame(params.slug!);
  if (isPending) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
