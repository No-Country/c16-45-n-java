import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

import { useNavigate } from "react-router-dom";
//const URI_BASE_API="http://localhost:8080/api/"

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { actualizarLogin } = useContext(LoginContext);

  const [ver, setVer] = useState("password");
  function verClave(event) {
    event.preventDefault();
    ver == "password" ? setVer("text") : setVer("password");
  }

  async function enviarDatosAlaApi(values) {
    try {
      const response = await fetch(import.meta.env.VITE_API+"auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Procesar la respuesta exitosa, por ejemplo, redireccionar o actualizar el estado de autenticación
        const data = await response.json();
        if (data) {
          actualizarLogin(true);
          navigate("/productos");
        } else {
          setError("Credenciales invalidas");
        }
      } else {
        // Procesar errores de la API
        const data = await response.json();
        setError(data.message); // Ajusta esto según la estructura de respuesta de tu API
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setError("Error al conectarse al servidor");
    }
  }

  return (
    <Center>
      <Box
        bgColor={"white"}
        p="30px"
        borderRadius={"10px"}
        boxShadow={" 5px 5px 2px rgba(15,15,19,0.2)"} //no esta andando el colo de sta forma
        h="300px"
      >
        <Box>
          {error != "" && (
            <Text
              as="h2"
              color="red"
              fontWeight={"bold"}
              bgColor={"#f9bfab"}
              p="10px"
              m="10px"
              borderRadius={"10px"}
            >
              {error}
            </Text>
          )}
        </Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            enviarDatosAlaApi(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    variant="floating"
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <Input
                      {...field}
                      id="email"
                      placeholder=" "
                      borderColor={"inputDefault"}
                      _hover={{
                        border: "2px solid black", // Color del borde al tener foco
                      }}

                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormLabel
                      htmlFor="email"
                      fontWeight="bold"
                      backgroundColor="white"
                    >
                      Email
                    </FormLabel>

                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    variant="floating"
                    mt="8px"
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <InputGroup>
                      <Input
                        {...field}
                        id="password"
                        _hover={{
                          border: "2px solid black", // Color del borde al tener foco
                        }}
                        type={ver}
                        placeholder=" "
                        borderColor={"inputDefault"}
                        focusBorderColor="rgba(0,0,0,0.04)"
                      />
                      <FormLabel
                      htmlFor="password"
                      fontWeight="bold"
                      backgroundColor="white"
                    >
                      Password
                    </FormLabel>
                      <InputRightElement>
                        {ver == "password" && (
                          <ViewIcon
                            w="60px"
                            boxSize="20px"
                            mr="2px"
                            color="grey"
                            onClick={verClave}
                          />
                        )}
                        {ver == "text" && (
                          <ViewOffIcon
                            w="60px"
                            boxSize="20px"
                            mr="2px"
                            color="grey"
                            onClick={verClave}
                          />
                        )}
                      </InputRightElement>
                    </InputGroup>
                    
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                colorScheme="#363636"
                variant="outline"
                m="10px"
              >
                Verificar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      
     
    </Center>
  );
};
