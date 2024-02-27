import { extendTheme} from "@chakra-ui/react";
const activeLabelStyles = {
    transform: "scale(0.85) translateY(-20px)"
  };


export const configTheme = extendTheme({
    colors:{
        darkBlue:'#201F4F',
        greyBlue:'#363583',
        purple:'#5956FC',
        lightPurple:'#9694FF',
        AlmosWhitePurple:'#D4D3F9',
        purple63: '#72718f', 
        sombra20: 'rgba(15,15,19,0.2)',
        inputDefault:'rgba(0, 0, 0, 0.3)',
        inputHover:'rgba(15, 15, 19, 1)',
      },
      
    components: {
      Input: {
        baseStyle: {
          color:"red",
          _hover: {
            border: "2px solid black", // Cambia aquí al color que desees al hacer hover
            
          },
        },
        variants: {
          filled: {
            border:"2px solid black",
            _hover: {
              borderColor: "black",
            },
          },
        },
      },
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                ...activeLabelStyles
              },
              label: {
                top: 0,
                left: 0,
                zIndex: 1,
                position: "absolute",
                pointerEvents: "none",
                mx: 2,
                px: 1,
                my: 2,
                transformOrigin: "left top"
              }
            }
          }
        }
      }
    }
  });
  