import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCropedImage from "../services/image-crop";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genre, loading, error } = useGenre();
  if (loading) return <GenreListSkeleton count={10} />;

  if (error) return null;

  return (
    <List>
      {genre.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCropedImage(genre.image_background)}
              boxSize={35}
              borderRadius={4}
              objectFit="cover"
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
