import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedImage from "../services/image-crop";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
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
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
