import { Image, List, ListItem, HStack, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropedImage from "../services/image-crop";

const GenreList = () => {
  const { data: genre } = useGenre();
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
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
