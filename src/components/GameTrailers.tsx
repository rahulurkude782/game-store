import { Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data: trailer, isPending, error } = useTrailer(gameId);
  if (isPending) return <Spinner />;
  if (error) throw error;

  const first = trailer?.results[0];

  return first ? (
    <video src={first.data.max} controls poster={first.preview} />
  ) : null;
};

export default GameTrailers;
