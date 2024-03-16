import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login.jsx";
import { Container } from "@chakra-ui/react";
import { Principal } from "./components/products/Principal.jsx";
import { LoginContext } from "./components/context/LoginContext.jsx";

function App() {
  const { valido } = useContext(LoginContext);

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
          {!valido && <Route exact path="/" element={<Login />}></Route>}
          {valido && (
            <Route exact path="/productos" element={<Principal />}></Route>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
