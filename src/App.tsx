import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
        <GridItem area="aside" paddingX="30px" paddingY="20px">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX="10px">
        <GameGrid
          gameQuery={gameQuery}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platformId: platform.id })
          }
          onSelectSortOrder={(order) => setGameQuery({ ...gameQuery, order })}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
