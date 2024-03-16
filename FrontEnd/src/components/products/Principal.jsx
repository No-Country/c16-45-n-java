import { Container } from "@chakra-ui/layout";
import ProductsTable from "./ProductsTable.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Header from "../header/Header.jsx";
import ProductContextProvider from "@/components/context/productos/ProductContext";

export const Principal = () => {
  return (
    <ProductContextProvider>
      <Container 
      maxW={"100%"} h="100vh"
     
       >
        <Navbar />
        <Header/>
        <ProductsTable />
      </Container>
    </ProductContextProvider>
  );
};
