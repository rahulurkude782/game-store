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
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

const PlateFormSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { data: platforms, isPending, error } = usePlatforms();
  const platform = usePlatform(selectedPlatformId);

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
              onClick={() => onSelectPlatform(platform)}
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
