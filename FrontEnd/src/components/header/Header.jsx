import {
  IconButton,
  Heading,
  Box,
  Flex,
  Icon,
  useColorMode,
  useTheme,
  Button,
} from "@chakra-ui/react";
import Searchbar from "./Searchbar";
import ModalWindow from "@/components/ui/ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import Filter from "./Filter";
import { ProductContext } from "../context/productos/ProductContext";

export default function Header() {
  const {filtrado,limpiarFiltro}=useContext(ProductContext)
  // useEffect(()=>{
  //  console.log(filtrado);
  // },[filtrado])

  const [openFilter, setOpenFilter] = useState(false);
  const { colorMode } = useColorMode();
  const abrirFilter = () => {
    setOpenFilter(true);
  };
  const theme = useTheme();
  const cerrarFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Flex
      justifyContent={["center", "space-between"]}
      alignItems="center"
      top="7rem"
      flexDirection={["column", "column", "row"]}
    >
      <Heading
        as="h3"
        size="2xl"
        color={
          colorMode === "dark"
            ? theme.colors.AlmosWhitePurple
            : theme.colors.darkBlue
        }
      >
        Productos
      </Heading>
      <Box display="flex" p="2">
        <Searchbar />
        <IconButton width="15px" onClick={abrirFilter}>
          <Icon alignSelf="center">
            <FontAwesomeIcon icon={faFilter} size="xl" />
          </Icon>
        </IconButton>
       <Box position="relative" rigth="0" top="15px">
          <Filter isOpen={openFilter} onClose={cerrarFilter}  />
        </Box>
      </Box>
      <Flex alignItems="center" justifyContent="center">
        <ModalWindow />
      </Flex>
    </Flex>
  );
}
