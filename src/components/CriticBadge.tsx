import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const CriticBadge = ({ metacritic }: Props) => {
  const critic = metacritic >= 75 ? "green" : metacritic <= 65 ? "red" : "";
  return (
    <Badge colorScheme={critic} fontSize="14px" borderRadius="4px">
      {metacritic}
    </Badge>
  );
};

export default CriticBadge;
