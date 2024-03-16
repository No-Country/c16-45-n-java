import { useContext, useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Button,
  ButtonGroup,
  IconButton,
  Img,
  useBreakpointValue,
  Text,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Box,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";
<<<<<<< HEAD
import { ChevronDownIcon, ChevronUpIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
=======
import {
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";
>>>>>>> dev-omar
import { ProductContext } from "@/components/context/productos/ProductContext";
import EditModal from "@/components/ui/EditModal";
import DialogAlert from "@/components/ui/DialogAlert";
import ordenar from "@/utils/ordenamiento";

export default function ProductsTable() {
  //Products List
  const { products, product } = useContext(ProductContext);
  const [deleteItem, setDeleteItem] = useState(product);
  const { colorMode } = useColorMode();
  const theme = useTheme();
  // Delete Product
  const [alertModal, setAlertModal] = useState(false);

  const openAlertModal = () => {
    setAlertModal(true);
  };

  const closeAlertModal = () => {
    setAlertModal(false);
  };

  const deleteProduct = (row) => {
    const selectedProduct = products.find((_, index) => index === row);
    setDeleteItem(selectedProduct);
    openAlertModal();
  };

  // EDITAR PRODUCTOS
  // EditModal state
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const editProduct = (row) => {
    //identificando elemento
    const productToEdit = products.find((_, idx) => idx === row);
    openEditModal(productToEdit);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
<<<<<<< HEAD
  const [cat,setCat]=useState(false)
  
  function handlerCat(e,tipo){
     setCat(ordenar(cat,products,tipo))
  
  }
=======

  // MOBILE
  const [cat, setCat] = useState(false);
  function handlerCat(e, tipo) {
    setCat(ordenar(cat, products, tipo));
  }
  const isMobile = useBreakpointValue({ base: true, lg: false });

>>>>>>> dev-omar
  return (
    <>
      {isMobile ? (
        <Box>
          {products?.map((product) => (
            <Card key={product.id}>
              <CardBody>
                <Image
                  src={product.imagenUrl}
                  alt="articulos de libreria"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.detalle}</Heading>
                  <Text>{product.categoria}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    $ {product.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Text>Stock {product.cantidad}</Text>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Box>
      ) : (
        <TableContainer p="2.5" position="relative" maxW="100%">
          <Table variant={"simple"} colorScheme="telegram">
            <Thead>
              <Tr>
                <Th
                  color={
                    colorMode === "dark"
                      ? theme.colors.AlmosWhitePurple
                      : theme.colors.darkBlue
                  }
                  fontWeight="900"
                >
                  imagen
                </Th>
                <Th color="lightPurple">
                  Detalle
                  <IconButton
                    variant="outline"
                    bgColor="transparent"
                    border="none"
                    size="sm"
                    color="black"
                    fontWeight="900"
                    _hover={{ bgColor: "AlmosWhitePurple" }}
                    onClick={(e) => handlerCat(e, 1)}
                  >
                    {cat ? <ChevronDownIcon /> : <ChevronUpIcon />}
                  </IconButton>
                </Th>
                <Th
                  color={
                    colorMode === "dark"
                      ? theme.colors.AlmosWhitePurple
                      : theme.colors.darkBlue
                  }
                  fontWeight="900"
                >
                  Código
                </Th>
                <Th color="lightPurple">
                  Categoria
                  <IconButton
                    variant="outline"
                    bgColor="transparent"
                    border="none"
                    size="sm"
                    color="black"
                    fontWeight="900"
                    _hover={{ bgColor: "AlmosWhitePurple" }}
                    onClick={(e) => handlerCat(e, 2)}
                  >
                    {cat ? <ChevronDownIcon /> : <ChevronUpIcon />}
                  </IconButton>
                </Th>
                <Th color="lightPurple">
                  Precio
                  <IconButton
                    variant="outline"
                    bgColor="transparent"
                    border="none"
                    size="sm"
                    color="black"
                    fontWeight="900"
                    _hover={{ bgColor: "AlmosWhitePurple" }}
                    onClick={(e) => handlerCat(e, 3)}
                  >
                    {cat ? <ChevronDownIcon /> : <ChevronUpIcon />}
                  </IconButton>
                </Th>
                <Th color="lightPurple">
                  Cantidad
                  <IconButton
                    variant="outline"
                    bgColor="transparent"
                    border="none"
                    size="sm"
                    color="black"
                    fontWeight="900"
                    _hover={{ bgColor: "AlmosWhitePurple" }}
                    onClick={(e) => handlerCat(e, 4)}
                  >
                    {cat ? <ChevronDownIcon /> : <ChevronUpIcon />}
                  </IconButton>
                </Th>
                <Th
                  color={
                    colorMode === "dark"
                      ? theme.colors.AlmosWhitePurple
                      : theme.colors.darkBlue
                  }
                  fontWeight="900"
                >
                  acciones
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product, index) => (
                <Tr key={product.id}>
                  <Td>
                    <Img src={product.imagenUrl} width="100px" />
                  </Td>
                  <Td overflow="hidden">{product.detalle}</Td>
                  <Td>{product.codigoBarra}</Td>
                  <Td>{product.categoria}</Td>
                  <Td maxW="100px">$ {product.precio}</Td>
                  <Td maxW="100px">{product.cantidad}</Td>
                  <Td maxW="100px">
                    <ButtonGroup gap={"4"}>
                      <Button
                        m={5}
                        color="Purple"
                        size={"xl"}
                        onClick={() => editProduct(index)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        m={5}
                        color="red.500"
                        size={"xl"}
                        onClick={() => deleteProduct(index)}
                      >
                        <DeleteIcon />
                      </Button>
                    </ButtonGroup>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <EditModal
        isOpen={editModalOpen}
        onClose={closeEditModal}
        initialValues={selectedProduct}
      />
      <DialogAlert
        isOpen={alertModal}
        onClose={closeAlertModal}
        product={deleteItem}
      />
    </>
  );
}
