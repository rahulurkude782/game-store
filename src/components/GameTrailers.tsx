import { HStack, Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data: trailer, isPending, error } = useTrailers(gameId);
  if (isPending)
    return (
      <HStack alignItems="center" justifyContent="center" height="100%">
        <Spinner />
      </HStack>
    );

  if (error) throw error;

  const first = trailer?.results[0];

  return first ? (
    <video src={first.data.max} controls poster={first.preview} />
  ) : null;
};

export default GameTrailers;
