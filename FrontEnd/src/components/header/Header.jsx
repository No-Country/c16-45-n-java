import { useState } from "react";
import { IconButton, Heading, Box, Flex, Icon } from "@chakra-ui/react";
import Searchbar from "./Searchbar";
import ModalWindow from "@/components/ui/ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "@/utils/connectApi";

export default function Header() {
  const [findProduct, setFindProduct] = useState(null);

  const searchHandler = (searchValue) => {
    BASE_URL.get("listar")
      .then((response) => response.data)
      .then((data) => {
        setFindProduct(data.find((product) => product.detalle === searchValue));
      });
  };

  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      position="relative"
      top="7rem"
    >
      <Heading as="h3" size="2xl">
        Productos
      </Heading>
      <Box display="flex" w="80%" p="2">
        <Searchbar onSearch={searchHandler} />
        <IconButton>
          <Icon alignSelf="center">
            <FontAwesomeIcon icon={faFilter} size="xl" />
          </Icon>
        </IconButton>
        <ModalWindow />
      </Box>
      <p>{findProduct}</p>
    </Flex>
  );
}
