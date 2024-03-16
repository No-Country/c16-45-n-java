import { useContext, useRef } from "react";
import { PropTypes } from "prop-types";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";
import { ProductContext } from "@/components/context/productos/ProductContext";
import { BASE_URL } from "@/utils/connectApi";

export default function DialogAlert({ isOpen, onClose, product }) {
  const { deleteProducts } = useContext(ProductContext);
  const cancelRef = useRef();
  const handlerDelete = (value) => {
    setTimeout(() => {
      BASE_URL.delete(`eliminar/${value.id}`);
      deleteProducts(value);
      onClose();
    }, 500);
  };
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            <h3>Eliminar el Producto:</h3>
            <p>{product?.detalle}</p>
          </AlertDialogHeader>

          <AlertDialogBody>
            ¿Está seguro que desea eliminar este producto?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => handlerDelete(product)}
              ml={3}
            >
              Delete
            </Button>
            <AlertDialogCloseButton />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

DialogAlert.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  product: PropTypes.object,
};
