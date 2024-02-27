import { useEffect, useState, useContext } from "react";
import { PropTypes } from "prop-types";
import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
  Select,
  Editable,
  EditableInput,
} from "@chakra-ui/react";
import PopoverModal from "@/components/ui/PopoverModal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/productos/ProductContext";
import { BASE_URL } from "@/utils/connectApi";

export default function EditForm({ showform, product, submitHandler }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openPopover, setOpenPopover] = useState(false);
  let { categories, addNewCategory } = useContext(ProductContext);

  const addCategoryHandler = (value) => {
    if (value === "add") {
      return setOpenPopover(true);
    }
    addNewCategory(value);
  };

  const handlerCategory = (event) => {
    const chooseValue = event.target.value;
    setSelectedCategory(chooseValue);
    chooseValue === "add" && addCategoryHandler(chooseValue);
  };

  const handlerButton = (errors) => {
    return Object.keys(errors).length !== 0;
  };

  useEffect(() => {
    BASE_URL.get("categorias")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={2}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="2xl"
    >
      <Formik
        initialValues={product}
        validationSchema={Yup.object({
          detalle: Yup.string().required("Coloca el nombre del producto"),
          precio: Yup.number()
            .required("Coloca un precio en formato 0.00")
            .round("floor"),
          categoria: Yup.string().required(
            "Selecciona una opcion o crea una categoria nueva"
          ),
          fechaAlta: Yup.date()
            .default(() => Date.now())
            .required("Elige o coloca una fecha"),
          cantidad: Yup.number()
            .min(1)
            .integer()
            .required("Coloca la cantidad de productos"),
          marca: Yup.string().required(
            "Coloque el nombre de la marca correspondiente"
          ),
          imagenUrl: Yup.string().required(
            "Se require el enlace de la imagen del producto"
          ),
        })}
        onSubmit={(values) => {
          submitHandler(values);
          showform();
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            {console.log(props.values)}
            <FormControl variant="floating" isRequired my="5">
              <Editable defaultValue={props.values.detalle}>
                <EditableInput />
              </Editable>
              <Field
                as={Input}
                type="text"
                placeholder={props.values.detalle}
                focusBorderColor="green.500"
                value={props.getFieldProps("productName").value}
                onChange={props.handleChange}
                name="productName"
              />
              <FormLabel
                htmlFor="productName"
                fontWeight="bold"
                backgroundColor="white"
                w="80%"
              >
                Nombre Producto
              </FormLabel>
              <ErrorMessage name="productName" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="number"
                placeholder={props.values.precio}
                onChange={props.handleChange}
                focusBorderColor="green.500"
                value={props.getFieldProps("price").value}
                name="price"
              />
              <FormLabel
                htmlFor="price"
                fontWeight="bold"
                backgroundColor="white"
              >
                Precio
              </FormLabel>
              <ErrorMessage name="price" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                name="code"
                type="text"
                onChange={props.handleChange}
                focusBorderColor="green.500"
                placeholder={props.values.codigo}
                value={props.getFieldProps("code").value}
              ></Field>
              <FormLabel
                htmlFor="code"
                fontWeight="bold"
                backgroundColor="white"
                w="50%"
              >
                Codigo
              </FormLabel>
              <ErrorMessage name="code" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Select}
                placeholder="Selecciona una categoria"
                name="category"
                focusBorderColor="green.500"
                onChange={handlerCategory}
                value={selectedCategory}
              >
                {categories?.map((category, index) => {
                  return (
                    <option value={category.nombre} key={index}>
                      {category.nombre}
                    </option>
                  );
                })}
                <option value="add">Agregar Categoria</option>
              </Field>
              <FormLabel
                htmlFor="category"
                fontWeight="bold"
                backgroundColor="white"
              >
                Categoria
              </FormLabel>
              <ErrorMessage name="category" component="div" color="red" />
            </FormControl>
            <PopoverModal showPopover={openPopover} />
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="date"
                name="date"
                placeholder={props.values.fechaAlta}
                focusBorderColor="green.500"
                onChange={props.handleChange}
                value={props.getFieldProps("date").value}
              />
              <FormLabel
                htmlFor="date"
                fontWeight="bold"
                backgroundColor="white"
              >
                Fecha
              </FormLabel>
              <ErrorMessage name="date" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="number"
                placeholder={props.values.cantidad}
                onChange={props.handleChange}
                name="quantity"
                focusBorderColor="green.500"
                value={props.getFieldProps("quantity").value}
              />
              <FormLabel
                htmlFor="quantity"
                fontWeight="bold"
                backgroundColor="white"
              >
                Cantidad
              </FormLabel>
              <ErrorMessage name="quantity" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="text"
                focusBorderColor="green.500"
                placeholder={props.values.marca}
                onChange={props.handleChange}
                name="brand"
                value={props.getFieldProps("brand").value}
              />
              <FormLabel
                htmlFor="brand"
                fontWeight="bold"
                backgroundColor="white"
                w="80%"
              >
                Marca
              </FormLabel>
              <ErrorMessage name="brand" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="text"
                focusBorderColor="green.500"
                name="image"
                onChange={props.handleChange}
                placeholder={props.values.imagenUrl}
                value={props.getFieldProps("image").value}
              />
              <FormLabel
                htmlFor="image"
                fontWeight="bold"
                backgroundColor="white"
                w="80%"
              >
                Imagen Producto
              </FormLabel>
              <ErrorMessage name="image" component="div" color="red" />
            </FormControl>
            <ButtonGroup>
              <Button
                colorScheme="teal"
                type="submit"
                isDisabled={handlerButton(props.errors)}
              >
                Modificar
              </Button>
              <Button colorScheme="red" type="submit" onClick={showform}>
                Cancelar
              </Button>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

EditForm.propTypes = {
  showform: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.func,
  submitHandler: PropTypes.func,
  values: PropTypes.object,
  product: PropTypes.object,
  getFieldProps: PropTypes.func,
};
