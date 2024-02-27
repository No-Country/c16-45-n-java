import { useState } from "react";
import { PropTypes } from "prop-types";
import {
  Flex,
  FormControl,
  Input,
  InputRightElement,
  IconButton,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(null);

  const searchingProduct = () => {
    onSearch(searchTerm);
  };

  return (
    <Flex w="60%">
      <FormControl mx="2">
        <InputGroup size="md">
          <Input
            type="search"
            bg="white"
            placeholder="buscar producto"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              aria-label="searchbar"
              icon={<SearchIcon />}
              onClick={searchingProduct}
            ></IconButton>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Flex>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func,
};
