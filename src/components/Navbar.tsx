import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo1.jpg";

const Navbar = () => {
  return (
    <HStack p="10px">
      <Image src={logo} boxSize="60px" objectFit="cover" borderRadius="md" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
