import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { Login } from "./components/Login/Login.jsx";
import { Container } from "@chakra-ui/react";

import { Principal } from "./components/products/Principal.jsx";

function App() {
  return (
    <BrowserRouter>
      <Container
        display="flex"
        alignContent="center"
        justifyContent="center"
        minH="100vh"
        minW="100vw"
      >
        <Routes>
          {/* <Route exact path="/" element={<Login />}></Route> */}
          <Route exact path="/productos" element={<Principal />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
