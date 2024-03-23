import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameStore from "../store/useGameStore";

const PlateFormSelector = () => {
  const setPlatFormId = useGameStore((store) => store.setPlatFormId);
  const { data: platforms, isPending, error } = usePlatforms();
  const platform = usePlatform();

  if (isPending) return <Skeleton height={5} />;

  if (error) return null;

  return (
    <Box padding={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronRight />}>
          {platform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms?.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => setPlatFormId(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlateFormSelector;
