import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const BoxContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      borderRadius="10px"
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
