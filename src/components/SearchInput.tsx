import { Input } from "@chakra-ui/react";
import React, { useRef } from "react";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) console.log(inputRef.current.value);
      }}
    >
      <Input
        ref={inputRef}
        placeholder="Search games..."
        borderRadius="20px"
        variant="filled"
      />
    </form>
  );
};

export default SearchInput;
