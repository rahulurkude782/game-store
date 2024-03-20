import React from "react";
import { Box, Button, HStack, SimpleGrid, Spinner } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";
import { Platform } from "../hooks/usePlatform";
import BoxContainer from "./BoxContainer";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleon";
import PlateFormSelector from "./PlateFormSelector";
import OrderSelector from "./OrderSelector";
import DynamicHeading from "./DynamicHeading";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform) => void;
  onSelectSortOrder: (order: string) => void;
}

const GameGrid = ({
  gameQuery,
  onSelectPlatform,
  onSelectSortOrder,
}: Props) => {
  const { data, isPending, error, isFetchingNextPage, fetchNextPage } =
    useGame(gameQuery);
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <DynamicHeading gameQuery={gameQuery} />
      <HStack paddingX="2px">
        <PlateFormSelector
          onSelectPlatform={onSelectPlatform}
          selectedPlatform={gameQuery.platform}
        />
        <OrderSelector
          selectedOrder={gameQuery?.order}
          onSelectSortOrder={onSelectSortOrder}
        />
      </HStack>

      <Box padding="10px">
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={6}
        >
          {isPending ? (
            <GameCardSkeleton count={9} />
          ) : (
            data.pages.map((page, idx) => (
              <React.Fragment key={idx}>
                {page.results?.map((game) => (
                  <BoxContainer key={game.id}>
                    <GameCard game={game} />
                  </BoxContainer>
                ))}
              </React.Fragment>
            ))
          )}
        </SimpleGrid>
        <Button onClick={() => fetchNextPage()} marginY="20px">
          {isFetchingNextPage ? <Spinner /> : "Load more"}
        </Button>
      </Box>
    </>
  );
};

export default GameGrid;
