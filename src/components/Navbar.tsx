import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo7.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px" shadow={"md"} marginBottom="15px">
      <Image src={logo} boxSize="60px" objectFit="cover" borderRadius="md" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
