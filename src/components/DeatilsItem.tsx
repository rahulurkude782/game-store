import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}

const DeatilsItem = ({ term, children }: Props) => {
  return (
    <Box>
      <Heading as="dt" fontSize="lg" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DeatilsItem;
