import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import BoxContainer from "./BoxContainer";

const GameCardSkeleton = ({ count }: { count: number }) => {
  return Array.from({ length: count }, () => "a").map((item, idx) => (
    <BoxContainer key={item + idx}>
      <Card width="450px" borderRadius="10px" overflow="hidden">
        <Skeleton height="200px" />
        <CardBody>
          <Skeleton height="20px" />
          <br />
          <Skeleton height="5px" />
          <br />
        </CardBody>
      </Card>
    </BoxContainer>
  ));
};

export default GameCardSkeleton;
