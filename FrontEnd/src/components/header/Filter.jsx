import { useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";
import {
  Checkbox,
  Input,
  Button,
  ButtonGroup,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  FocusLock,
  FormControl,
  FormLabel,
  Stack,
  ScaleFade,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useFormik, Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/productos/ProductContext";

export default function Filter({ isOpen, onClose }) {
  const [openFormPrice, setOpenFormPrice] = useState(false);
  const [openFormQuantity, setOpenFormQuantity] = useState(false);
  const [openFormCode, setOpenFormCode] = useState(false);
  const [openFormCategories, setOpenFormCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { categories, listCategories, filterTodo, filtrado } =
    useContext(ProductContext);

  useEffect(() => {
    listCategories();
    
    // stadoFilter && cleanFilter();
  }, []);


  const formik = useFormik({
    initialValues: filtrado,
    validationSchema: Yup.object({
      minPrecio: Yup.number()
        .required("Coloca un precio minimo en formato 0.00")
        .round("floor"),
      maxPrecio: Yup.number()
        .required("Coloca un precio maximo en formato 0.00")
        .round("floor"),
      codigo: Yup.string().required(
        "Ingresa un codigo para el producto formato: 0PRODUCTO01"
      ),
      categoria: Yup.string().required(
        "Selecciona una opcion o crea una categoria nueva"
      ),
      minCantidad: Yup.number()
        .min(1)
        .integer()
        .required("Coloca la cantidad minima de productos"),
      maxCantidad: Yup.number()
        .min(1)
        .integer()
        .required("Coloca la cantidad maxima de productos"),
    }),

    onSubmit(values) {
      filtroSelected(values);
    },
  });
//voy a modificar como para tocar el contexto
  const toggleFormPrice = (status) => {
    if(status.target.checked){
      setOpenFormPrice(true)

    }else{
      setOpenFormPrice(false);
      filtrado.minPrecio=null;
      filtrado.maxPrecio=null;
    }
    return 
  };

  const toggleFormQuantity = (status) => {
    return status.target.checked
      ? setOpenFormQuantity(true)
      : setOpenFormQuantity(false);
  };

  const toggleFormCode = (status) => {
    return status.target.checked
      ? setOpenFormCode(true)
      : setOpenFormCode(false);
  };

  const toggleFormCategories = (status) => {
    return status.target.checked
      ? setOpenFormCategories(true)
      : setOpenFormCategories(false);
  };

  const filtroSelected = (values) => {
    filterTodo({
      codigo: openFormCode ? values.codigo : null,
      minPrecio: openFormPrice ? parseFloat(values.minPrecio) : null,
      maxPrecio: openFormPrice ? parseFloat(values.maxPrecio) : null,
      minCantidad: openFormQuantity ? parseInt(values.minCantidad) : null,
      maxCantidad: openFormQuantity ? parseInt(values.maxCantidad) : null,
      categoria: openFormCategories ? values.categoria : null,
    });
    onClose();
  };

  

  const handlerCategory = (event) => {
    const chooseValue = event.target.value;
    setSelectedCategory(chooseValue);
  };

  const handlerFields = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
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
          <Formik
            enableReinitialize
            initialValues={formik.initialValues}
            validationSchema={formik.validationSchema}
            onSubmit={formik.onSubmit}
          >
            {({ isSubmitting }) => (
              <Form onSubmit={formik.handleSubmit}>
                <Stack>
                  <Checkbox 

                    onChange={(e) => toggleFormCode(e)}>
                    codigo
                  </Checkbox>
                  {openFormCode && (
                    <ScaleFade initialScale={0.9} in={openFormCode}>
                      <FormControl variant="floating" my="5" size="sm">
                        <Field
                          as={Input}
                          type="text"
                          id="codigo"
                          name="codigo"
                          focusBorderColor="green.500"
                          
                          onChange={(e) =>
                            handlerFields("codigo", e.target.value)
                          }
                          value={formik.values.codigo}
                        />
                        <FormLabel
                          htmlFor="codigo"
                          fontWeight="bold"
                          backgroundColor="white"
                        >
                          Codigo
                        </FormLabel>
                      </FormControl>
                    </ScaleFade>
                  )}

                  <Checkbox 
                  
                  onChange={(e) => toggleFormPrice(e)}>
                    precio
                  </Checkbox>
                  {openFormPrice && (
                    <ScaleFade initialScale={0.9} in={openFormPrice}>
                      <HStack>
                        <FormControl variant="floating" my="5" size="sm">
                          <Field
                            as={Input}
                            type="Number"
                            focusBorderColor="green.500"
                            name="minPrecio"
                            onChange={(e) =>
                              handlerFields("minPrecio", e.target.value)
                            }
                            value={formik.values.minPrecio}
                          />
                          <FormLabel
                            htmlFor="minPrecio"
                            fontWeight="bold"
                            backgroundColor="white"
                          >
                            Mín.
                          </FormLabel>
                        </FormControl>
                        <FormControl variant="floating" my="5" size="sm">
                          <Field
                            as={Input}
                            type="Number"
                            focusBorderColor="green.500"
                            name="maxPrecio"
                            onChange={(e) =>
                              handlerFields("maxPrecio", e.target.value)
                            }
                            value={formik.values.maxPrecio}
                          />
                          <FormLabel
                            htmlFor="maxPrecio"
                            fontWeight="bold"
                            backgroundColor="white"
                          >
                            Máx.
                          </FormLabel>
                        </FormControl>
                      </HStack>
                    </ScaleFade>
                  )}

                  <Checkbox onChange={(e) => toggleFormQuantity(e)}>
                    cantidad
                  </Checkbox>
                  {openFormQuantity && (
                    <ScaleFade initialScale={0.9} in={openFormQuantity}>
                      <HStack>
                        <FormControl variant="floating" my="5" size="sm">
                          <Field
                            as={Input}
                            type="Number"
                            focusBorderColor="green.500"
                            name="minCantidad"
                            onChange={(e) =>
                              handlerFields("minCantidad", e.target.value)
                            }
                            value={formik.values.minCantidad}
                          />
                          <FormLabel
                            htmlFor="minCantidad"
                            fontWeight="bold"
                            backgroundColor="white"
                          >
                            Mín.
                          </FormLabel>
                        </FormControl>
                        <FormControl variant="floating" my="5" size="sm">
                          <Field
                            as={Input}
                            type="Number"
                            focusBorderColor="green.500"
                            name="maxCantidad"
                            onChange={(e) =>
                              handlerFields("maxCantidad", e.target.value)
                            }
                            value={formik.values.maxCantidad}
                          />
                          <FormLabel
                            htmlFor="maxCantidad"
                            fontWeight="bold"
                            backgroundColor="white"
                          >
                            Máx.
                          </FormLabel>
                        </FormControl>
                      </HStack>
                    </ScaleFade>
                  )}

                  <Checkbox
                    nema="categoria"
                    onChange={(e) => toggleFormCategories(e)}
                  >
                    categoria
                  </Checkbox>
                  {openFormCategories && (
                    <ScaleFade initialScale={0.9} in={openFormCategories}>
                      <FormControl variant="floating" my="5" size="sm">
                        <Field
                          as={Select}
                          name="category"
                          focusBorderColor="green.500"
                          placeholder="Selecciona una Categoria"
                          onChange={handlerCategory}
                          value={(formik.values.categoria = selectedCategory)}
                        >
                          {categories?.map((category) => {
                            return (
                              <option
                                value={category.nombre}
                                key={category.nombre}
                              >
                                {category.nombre}
                              </option>
                            );
                          })}
                        </Field>
                      </FormControl>
                    </ScaleFade>
                  )}
                </Stack>
                <ButtonGroup display="flex" justifyContent="flex-end">
                  <Button variant="outline" onClick={onClose}>
                    Cancelar
                  </Button>

                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    colorScheme="teal"
                    onClick={() => {
                      filtroSelected(formik.values);
                    }}
                    bg="green.500"
                  >
                    Filtrar
                  </Button>
                </ButtonGroup>
              </Form>
            )}
          </Formik>
          <PopoverArrow />
          <PopoverCloseButton />
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
}
Filter.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
