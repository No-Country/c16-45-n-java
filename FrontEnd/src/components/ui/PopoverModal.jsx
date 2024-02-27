import { useContext, useRef, useState } from "react";
import { PropTypes } from "prop-types";
import {
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  FocusLock,
  Input,
  ButtonGroup,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ProductContext } from "@/components/context/productos/ProductContext";

export default function PopoverModal({ isOpen, onClose }) {
  const newCategory = useRef(null);
  const descriptionCategory = useRef(null);

  let { category, addNewCategory } = useContext(ProductContext);
  const [error, setError] = useState(null);

  const saveCategory = () => {
    if (newCategory.current && descriptionCategory.current) {
      category = {
        nombre: newCategory.current.value,
        descripcion: descriptionCategory.current.value,
      };
      addNewCategory(category);
    } else {
      setError({
        message: "por favor, agregue una nueva categoria con una descripcion",
      });
    }
    setTimeout(() => onClose(), 3000);
  };
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      closeOnBlur={false}
    >
      <PopoverContent p={5}>
        <FocusLock returnFocus persistentFocus={false}>
          <FormControl variant="floating" my="5" size="sm">
            <Input
              type="text"
              focusBorderColor="green.500"
              placeholder="agrega tu categoria"
              ref={newCategory}
            />
            <FormLabel
              htmlFor="productImage"
              fontWeight="bold"
              backgroundColor="white"
            >
              Nueva Categoria
            </FormLabel>
          </FormControl>
          {error && <FormErrorMessage value={error.message} />}
          <FormControl variant="floating" my="5" size="sm">
            <Input
              type="text"
              focusBorderColor="green.500"
              placeholder="agregar una descripcion"
              ref={descriptionCategory}
            />
            <FormLabel
              htmlFor="productImage"
              fontWeight="bold"
              backgroundColor="white"
            >
              Descripcion Categoria
            </FormLabel>
          </FormControl>
          {error && <FormErrorMessage value={error.message} />}
          <ButtonGroup display="flex" justifyContent="flex-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={saveCategory}>
              Save
            </Button>
          </ButtonGroup>
          <PopoverArrow />
          <PopoverCloseButton />
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
}

PopoverModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
