import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import useGenre from "./hooks/useGenre";

function App() {
  const { genre } = useGenre();
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
        <GridItem area="aside">
          <ul>
            {genre.map((genre, idx) => (
              <li key={genre.id + idx}>{genre.name}</li>
            ))}
          </ul>
        </GridItem>
      </Show>
      <GridItem area="main" colSpan={1}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
