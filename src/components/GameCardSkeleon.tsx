import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = ({ count }: { count: number }) => {
  return Array.from({ length: count }, () => "a").map((item, idx) => (
    <Card key={item + idx} width="450px" borderRadius="10px" overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <Skeleton height="20px" />
        <br />
        <Skeleton height="5px" />
        <br />
      </CardBody>
    </Card>
  ));
};

export default GameCardSkeleton;
