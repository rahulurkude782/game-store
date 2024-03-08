import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIcons from "./PlatformIcons";
import getCropedImage from "../services/image-crop";
import CiritcBadge from "./CiritcBadge";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image
        src={getCropedImage(game.background_image)}
        height="100%"
        width="100%"
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatformIcons
            plateforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CiritcBadge metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
