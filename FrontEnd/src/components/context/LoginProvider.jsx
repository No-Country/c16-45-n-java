import { useState } from "react";
import { LoginContext } from "./LoginContext";

export const LoginProvider = ({ children }) => {
 
  const [valido, setValido] = useState(false);

  const actualizarLogin=(value) => {
    setValido(value)
  }   

return (
    <LoginContext.Provider value={{ actualizarLogin, valido }}>
      {children}
    </LoginContext.Provider>
  );
};
