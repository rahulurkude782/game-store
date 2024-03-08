import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const BoxContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default BoxContainer;
