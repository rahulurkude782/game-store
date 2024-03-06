import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo7.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" objectFit="cover" borderRadius="md" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
