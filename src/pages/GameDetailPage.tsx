import { Box, HStack, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
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
      <ExpandableText game={game} />
    </Box>
  );
};

export default GameDetailPage;
