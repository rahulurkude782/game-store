import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
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
}

export default App;
