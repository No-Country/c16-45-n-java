import { useState } from "react";
import { LoginContext } from "./LoginContext";
import { PropTypes } from "prop-types";

export const LoginProvider = ({ children }) => {
 
  const [valido, setValido] = useState(false);

  const actualizarLogin=(value) => {
    setValido(value)
  }   

return (
    <LoginContext.Provider value={{ actualizarLogin, valido,setValido }}>
      {children}
    </LoginContext.Provider>
  );
};
LoginProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
