import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo7.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchString: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" shadow={"md"} marginBottom="15px">
      <Image src={logo} boxSize="60px" objectFit="cover" borderRadius="md" />
      <SearchInput onSearch={(searchString) => onSearch(searchString)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
