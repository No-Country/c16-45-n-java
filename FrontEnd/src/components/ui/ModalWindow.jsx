import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import PopoverModal from "@/components/ui/PopoverModal";
import ProductForm from "../products/ProductForm.jsx";
export default function ModalWindow() {
  const [openPopover, setOpenPopover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalOpenPopover = () => {
    setOpenPopover(true);
  };
  const closeModalOpenPopover = () => {
    setOpenPopover(false);
  };
  return (
    <>
      <Button
        backgroundColor={"green.200"}
        alignContent={"center"}
        onClick={modalOpenPopover}
        mx="2"
        w="25%"
      >
        <AddIcon mx="2" />
        <p>Categoria</p>
      </Button>
      <Button
        backgroundColor={"green.200"}
        alignContent={"center"}
        onClick={onOpen}
        w="25%"
      >
        <AddIcon mx="2" />
        <p>Producto</p>
      </Button>
      <PopoverModal isOpen={openPopover} onClose={closeModalOpenPopover} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Añadir Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductForm m={"1"} showform={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
