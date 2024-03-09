import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatform";

interface Props {
  plateforms: Platform[];
}

const PlatformIcons = ({ plateforms }: Props) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack>
      {plateforms.map((platform) => (
        <Icon
          key={platform.id}
          as={icons[platform.slug]}
          color="gray.500"
          marginY={1}
        />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
