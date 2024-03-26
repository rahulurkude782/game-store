import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"aside main"`,
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX="30px" paddingY="20px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX="10px">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
