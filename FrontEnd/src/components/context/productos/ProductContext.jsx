import { createContext, useState, useEffect, useMemo } from "react";
import { PropTypes } from "prop-types";
import { BASE_URL } from "@/utils/connectApi";

export const ProductContext = createContext({
  products: [],
  product: {},
  categories: [],
  category: {},
});

export default function ProductContextProvider({ children }) {
  const [productManager, setProductManager] = useState({
    products: [],
    product: {
      detalle: "",
      precio: "",
      codigo: "",
      categoria: "",
      fechaAlta: "",
      cantidad: "",
      marca: "",
      imagenUrl: "",
    },
    categories: [],
    category: {
      nombre: "",
      descripcion: "",
    },
  });

  const addProducts = (newProduct) => {
    BASE_URL.post("nuevo", newProduct);
    setProductManager((prev) => {
      return {
        ...prev,
        products: [...prev.products, newProduct],
      };
    });
  };

  const editProducts = (product, confirmation) => {
    console.log(product);
    console.log(confirmation);
    // if (confirmation.current) {
    //   setTimeout(() => {
    //     BASE_URL.delete(`editar/${product.id}`);
    //   }, 3000);
    //   setProductManager((prev) => {
    //     return {
    //       ...prev,
    //       products: prev.products.filter(
    //         (product) => product.id === product.id
    //       ),
    //     };
    //   });
    // }
  };

  const deleteProducts = (itemDeleted, confirmation) => {
    if (confirmation.current) {
      setTimeout(() => {
        BASE_URL.delete(`eliminar/${itemDeleted.id}`);
      }, 3000);
      setProductManager((prev) => {
        return {
          ...prev,
          products: prev.products.filter(
            (product) => product.id !== itemDeleted.id
          ),
        };
      });
    }
  };
  // CATEGORIAS
  const addNewCategory = (newCategory) => {
    BASE_URL.post("categorias", newCategory);
    setProductManager((prev) => {
      return {
        categories: [...prev.categories, newCategory],
      };
    });
  };

  const editCategories = (category, confirmation) => {
    console.log(category);
    console.log(confirmation);
  };

  useEffect(() => {
    BASE_URL.get("listar")
      .then((response) => {
        setProductManager((prev) => {
          return {
            ...prev,
            products: response.data,
          };
        });
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    BASE_URL.get("categorias")
      .then((response) => {
        setProductManager((prev) => {
          return {
            ...prev,
            categories: response.data,
          };
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const productCtxt = useMemo(() => {
    return {
      products: productManager.products,
      product: productManager.product,
      categories: productManager.categories,
      category: productManager.category,
      addProducts,
      deleteProducts,
      editProducts,
      addNewCategory,
      editCategories,
    };
  }, [productManager]);

  return (
    <ProductContext.Provider value={productCtxt}>
      {children}
    </ProductContext.Provider>
  );
}

ProductContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
