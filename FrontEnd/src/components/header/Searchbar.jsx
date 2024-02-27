import { useContext, useState } from "react";
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
import { ProductContext } from "../context/productos/ProductContext";

export default function Searchbar() {
  let {onFind} = useContext(ProductContext)
  const buscar = (e) => {
     onFind(e.target.value);
  };

  return (
    <Flex w="60%">
      <FormControl mx="2">
        <InputGroup size="md">
          <Input
            type="search"
            bg="white"
            placeholder="buscar producto"
            onChange={(e) => buscar(e)}
          />
          <InputRightElement>
            <IconButton
              aria-label="searchbar"
              icon={<SearchIcon />}
              // onClick={searchingProduct}
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
