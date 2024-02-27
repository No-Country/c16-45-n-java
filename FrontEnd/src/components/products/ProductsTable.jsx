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
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
//const URL_BASE = "http://localhost:8080/"

import { ProductContext } from "@/components/context/productos/ProductContext";
import EditModal from "@/components/ui/EditModal";
import DialogAlert from "../ui/DialogAlert";

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

  return (
    <>
      <TableContainer p="2.5" position="relative" top="8rem" maxW="100%">
        <Table variant={"striped"} colorScheme="telegram">
          <Thead>
            <Tr>
              <Th>imagen</Th>
              <Th>nombre filtrar</Th>
              <Th>código</Th>
              <Th>categoria</Th>
              <Th>precio</Th>
              <Th>cantidad</Th>
              <Th>acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, index) => (
              <Tr key={product.id}>
                <Td>{product.imagenUrl}</Td>
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
