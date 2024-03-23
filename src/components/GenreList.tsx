import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImage from "../services/image-crop";
import useGameStore from "../store/useGameStore";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const setGenreId = useGameStore((store) => store.setGenreId);
  const genreId = useGameStore((store) => store.gameQuery.genreId);
  const { data: genre, isPending, error } = useGenres();
  if (isPending) return <GenreListSkeleton count={10} />;

  if (error) return null;

  return (
    <List>
      <Heading fontSize="3xl" marginBottom={3}>
        Genre
      </Heading>
      {genre?.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack gap="20px">
            <Image
              src={getCropedImage(genre.image_background)}
              boxSize="45"
              borderRadius="8"
              objectFit="cover"
            />
            <Button
              onClick={() => setGenreId(genre.id)}
              variant="link"
              fontWeight={genre.id === genreId ? "bold" : "normal"}
              fontSize="xl"
              whiteSpace="normal"
              textAlign="left"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
