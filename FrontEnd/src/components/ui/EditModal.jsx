import { PropTypes } from "prop-types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import EditForm from "@/components/products/EditForm";
export default function EditModal({ isOpen, onClose, initialValues }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Modificar Producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EditForm values={initialValues} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

EditModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  initialValues: PropTypes.object,
};
