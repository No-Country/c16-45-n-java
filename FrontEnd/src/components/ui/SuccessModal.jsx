import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import { CheckIcon } from "@chakra-ui/icons";
export default function SuccessModal({ isOpen, onClose, textValue }) {
  function handlerContinue() {
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent position="relative" top="8rem">
        <ModalHeader my="0.5rem">
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody p="1rem">
          <Box bg="#64944D" p="2rem">
            <CheckIcon
              color="#efe"
              textAlign="center"
              border="2px solid #efe"
              borderRadius="50%"
              boxSize="80px"
              p="1rem"
              mx="38%"
              my="1rem"
            />
            <Text
              textTransform="uppercase"
              color="#efe"
              fontWeight="bold"
              textAlign="center"
            >
              {`¡ ${textValue} !`}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            bg="#64944D"
            mx="auto"
            textTransform="uppercase"
            color="#efe"
            onClick={handlerContinue}
            w="50%"
          >
            continuar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

SuccessModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  textValue: PropTypes.string,
};
