import { HStack, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGame from "../hooks/useGame";
import BoxContainer from "./BoxContainer";
import DynamicHeading from "./DynamicHeading";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleon";
import OrderSelector from "./OrderSelector";
import PlateFormSelector from "./PlateFormSelector";
import { Link } from "react-router-dom";

const GameGrid = () => {
  const { data, isPending, error, hasNextPage, fetchNextPage } = useGame();
  if (error) return <p>{error.message}</p>;
  const fetchGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      <DynamicHeading />
      <HStack paddingX="2px">
        <PlateFormSelector />
        <OrderSelector />
      </HStack>
      <InfiniteScroll
        dataLength={fetchGameCount}
        next={fetchNextPage}
        loader={<Spinner />}
        hasMore={hasNextPage}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={6}
          padding="10px"
        >
          {isPending ? (
            <GameCardSkeleton count={9} />
          ) : (
            data.pages.map((page, idx) => (
              <React.Fragment key={idx}>
                {page.results?.map((game) => (
                  <Link to={"/games/" + game.id}>
                    <BoxContainer key={game.id}>
                      <GameCard game={game} />
                    </BoxContainer>
                  </Link>
                ))}
              </React.Fragment>
            ))
          )}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
