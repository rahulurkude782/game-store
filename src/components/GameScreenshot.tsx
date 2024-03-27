import { HStack, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data: screenshots, isPending, error } = useGameScreenshots(gameId);

  if (isPending)
    return (
      <HStack alignItems="center" justifyContent="center" height="100%">
        <Spinner />
      </HStack>
    );

  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {screenshots.results.map((screenshot: { id: number; image: string }) => (
        <Image key={screenshot.id} src={screenshot.image} borderRadius={5} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
