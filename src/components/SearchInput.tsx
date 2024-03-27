import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Props {
  onSearch: (searchString: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
        navigate("/");
        //@ts-expect-error it might be null
        inputRef.current.value = "";
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          placeholder="Search games..."
          borderRadius="20px"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
