import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" objectFit="cover" borderRadius="md" />
      <Text>
        <ColorModeSwitch />
      </Text>
    </HStack>
  );
};

export default Navbar;
