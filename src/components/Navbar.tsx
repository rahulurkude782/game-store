import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo7.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameStore from "../store/useGameStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const setSearchText = useGameStore((store) => store.setSearchText);
  return (
    <HStack paddingX="20px" paddingY="10px" shadow={"md"} marginBottom="15px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" borderRadius="md" />
      </Link>
      <Box width="100%" paddingX="15px">
        <SearchInput onSearch={(searchString) => setSearchText(searchString)} />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
