import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const ExpandableText = ({ game }: Props) => {
  const [isExpandable, setExpandable] = useState(false);
  const length = 300;
  const string = isExpandable
    ? game.description_raw
    : game.description_raw.substring(0, length);

  const description =
    game.description_raw.length <= length ? game.description_raw : string;

  return (
    <Box>
      <Heading>{game.name}</Heading>
      <Text>{description}...</Text>
      <Button
        marginY={3}
        colorScheme="yellow"
        onClick={() => setExpandable(!isExpandable)}
      >
        {isExpandable ? "Show less" : "Read more"}
      </Button>
    </Box>
  );
};

export default ExpandableText;
