import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginProvider} from "./components/context/LoginProvider.jsx"
import { configTheme} from "./assets/theme.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <ChakraProvider theme={configTheme} >
          <App  />
      </ChakraProvider>
    </LoginProvider>
  </React.StrictMode>
);
