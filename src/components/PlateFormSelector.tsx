import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";

const PlateFormSelector = () => {
  return (
    <Box padding={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronRight />}>
          Platforms
        </MenuButton>
        <MenuList>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlateFormSelector;
