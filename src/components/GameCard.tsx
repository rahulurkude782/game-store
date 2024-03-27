import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import getCropedImage from "../services/image-crop";
import CiritcBadge from "./CriticBadge";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

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
        <HStack justify="space-between" marginBottom={3}>
          <PlatformIcons
            plateforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CiritcBadge metacritic={game.metacritic} />
        </HStack>
        <Link to={"/games/" + game.slug}>
          <Heading fontSize="2xl">{game.name}</Heading>
        </Link>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
