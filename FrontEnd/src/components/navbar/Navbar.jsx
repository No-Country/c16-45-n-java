import { useContext, useEffect } from "react";
import {
  Image,
  Flex,
  Box,
  Avatar,
  useColorMode,
  IconButton,
  useTheme,
  WrapItem,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const {setValido}=useContext(LoginContext)
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const toggleIcon = colorMode === "dark" ? <SunIcon /> : <MoonIcon />;
  useEffect(() => {
    colorMode === "dark" ? theme.colors.darkBlue : theme.colors.white;
  }, [colorMode, theme]);

  
  return (
    <Flex
      w="100%"
      bgGradient="linear-gradient(180deg, #201F4F 0%, #363583 100%)"
      color={"white"}
      justifyContent="space-between"
      alignItems="center"
      p="5"
      top="0"
      left="0"
    >
      <Image
        boxSize="100px"
        objectFit="cover"
        src="https://i.postimg.cc/KjvjxVJ9/version-Letras-Mas-Grandes.png"
        alt="brand_logo"
      />
      <Box>
        <Text
          as="a"
          p="5px"
          m="5px"
          cursor={"pointer"}
          textDecorationStyle={"none"}
        >
          Stock
        </Text>
        <Text
          as="a"
          p="5px"
          m="5px"
          cursor={"pointer"}
          textDecorationStyle={"none"}
        >
          Categorias
        </Text>
        <Text
          as="a"
          p="5px"
          m="5px"
          cursor={"pointer"}
          textDecorationStyle={"none"}
        >
          Transacciones
        </Text>
      </Box>

      <Box display="flex" alignItems="center" mx="5">
        <WrapItem mx="2">
          <Avatar name="username" src="https://bit.ly/dan-abramov" />
        </WrapItem>
        <Menu>
          <MenuButton
            as={Button}
            color="whitesmoke"
            variant="flushed"
            _hover={{ color: "lightPurple" }}
            rightIcon={<ChevronDownIcon />}
          >
            Administrador
          </MenuButton>
          <MenuList color="darkblue">
            <MenuItem key={1}>Cuenta</MenuItem>
            <MenuItem key={2}>Estadisticas</MenuItem>
            <MenuItem key={3} onClick={()=>{setValido(false);navigate("/")}}>Cerrar Sesion</MenuItem>
            
          </MenuList>
        </Menu>
        <IconButton icon={toggleIcon} onClick={toggleColorMode} mx="3" />
      </Box>
    </Flex>
  );
}
