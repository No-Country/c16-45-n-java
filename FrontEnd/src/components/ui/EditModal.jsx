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
export default function EditModal({
  isOpen,
  onClose,
  initialValues,
  onSubmit,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Modificar Producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EditForm
            showModal={isOpen}
            values={initialValues}
            submitHandler={onSubmit}
            showform={onClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

EditModal.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};
