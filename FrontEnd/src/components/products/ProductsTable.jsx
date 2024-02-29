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
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ProductContext } from "@/components/context/productos/ProductContext";
import EditModal from "@/components/ui/EditModal";
import DialogAlert from "../ui/DialogAlert";
import ordenar from "../../utils/ordenamiento";

export default function ProductsTable() {
  //Products List
  const { products, editProducts } = useContext(ProductContext);
  
  // Delete Product
  const [alertModal, setAlertModal] = useState(false);
  const [choosedProduct, setChoosedProduct] = useState(null);

  const openAlertModal = (product) => {
    setChoosedProduct(product);
    setAlertModal(true);
  };

  const closeAlertModal = () => {
    setAlertModal(false);
  };

  const deleteProduct = (row) => {
    const deleteProduct = products.find((_, index) => index === row);
    openAlertModal(deleteProduct);
  };

  const editProduct = (row) => {
    //identificando elemento
    const productToEdit = products.find((_, idx) => idx === row);
    openEditModal(productToEdit);
  };

  // EditModal state
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  const [cat,setCat]=useState(false)
  
  function handlerCat(e,tipo){
     setCat(ordenar(cat,products,tipo))
  
  }
  return (
    <>
      <TableContainer p="2.5" position="relative" top="8rem" maxW="100%">
        <Table variant={"striped"} colorScheme="telegram">
          <Thead>
            <Tr>
              <Th color="black" fontWeight="900">imagen</Th>
              <Th color="lightPurple">
                Detalle
                <IconButton 
                variant="outline" 
                bgColor="transparent" 
                border="none"
                size="sm" 
                color="black"
                fontWeight="900"
                _hover={{bgColor:"AlmosWhitePurple"}}
                onClick = {(e)=>handlerCat(e,1)}>
                {cat?<ChevronDownIcon/>: <ChevronUpIcon />}                
                </IconButton>
              
              </Th>
              <Th color="black" fontWeight="900">Código</Th>
              <Th color="lightPurple">
                Categoria
                <IconButton 
                variant="outline" 
                bgColor="transparent" 
                border="none"
                size="sm" 
                color="black"
                fontWeight="900"
                _hover={{bgColor:"AlmosWhitePurple"}}
                onClick = {(e)=>handlerCat(e,2)}>
                {cat?<ChevronDownIcon/>: <ChevronUpIcon />}                
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
                _hover={{bgColor:"AlmosWhitePurple"}}
                onClick = {(e)=>handlerCat(e,3)}>
                {cat?<ChevronDownIcon/>: <ChevronUpIcon />}                
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
                _hover={{bgColor:"AlmosWhitePurple"}}
                onClick = {(e)=>handlerCat(e,4)}>
                {cat?<ChevronDownIcon/>: <ChevronUpIcon />}                
                </IconButton>
              
              </Th>
              <Th color="black" fontWeight="900">acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, index) => (
              <Tr key={product.id}>
                <Td>
                  <Img src={product.imagenUrl} width="100px"/></Td>
                <Td>{product.detalle}</Td>
                <Td>{product.codigo}</Td>
                <Td>{product.categoria}</Td>
                <Td>$ {product.precio}</Td>
                <Td>{product.cantidad}</Td>
                <Td>
                  <ButtonGroup gap={"4"}>
                    <Button
                      m={5}
                      size={"xs"}
                      onClick={() => editProduct(index)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      m={5}
                      size={"xs"}
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
      <EditModal
        isOpen={editModalOpen}
        onClose={closeEditModal}
        initialValues={selectedProduct}
        onSubmit={editProducts}
      />
      <DialogAlert
        isOpen={alertModal}
        onClose={closeAlertModal}
        product={choosedProduct}
      />
    </>
  );
}
