import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string | null;
  searchString: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchString) =>
            setGameQuery({ ...gameQuery, searchString })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="20px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX="10px">
        <GameGrid
          gameQuery={gameQuery}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          onSelectSortOrder={(order) => setGameQuery({ ...gameQuery, order })}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
