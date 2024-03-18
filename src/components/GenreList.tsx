import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCropedImage from "../services/image-crop";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genre, isPending, error } = useGenre();
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
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
