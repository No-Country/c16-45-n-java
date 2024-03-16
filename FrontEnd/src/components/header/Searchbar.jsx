import { useContext } from "react";
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
  const { onFind } = useContext(ProductContext);
  const searchHandler = (value) => {
    onFind(value);
  };

  return (
    <Flex minW="70%">
      <FormControl mx="2">
        <InputGroup size="md">
          <Input
            type="search"
            bg="white"
            placeholder="buscar producto"
            onChange={(e) => searchHandler(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              aria-label="searchbar"
              icon={<SearchIcon />}
              //onClick={(e)=>onFind(e.target.value)}
            ></IconButton>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Flex>
  );
}
