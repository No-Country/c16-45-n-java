import { BASE_URL } from "@/utils/connectApi";
export default function prodsReducer(state, action) {
  switch (action.type) {
    case "LIST_PRODUCTS":
      return { products: [...action.payload] };
    case "ADD_PRODUCT":
      return { products: [...state.products, action.payload] };
    case "MODIFY_PRODUCT":
      BASE_URL.put(`editar/${action.payload.id}`, action.payload);
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, ...action.payload }
            : product
        ),
      };
    case "DELETE_PRODUCT":
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "FIND_PRODUCT":
      return { products: [...action.payload] };
    case "LIST_CATEGORIES":
      return { products: [...state.products], categories: action.payload };
    case "ADD_CATEGORY":
      return {
        products: [...state.products],
        categories: [...state.categories, action.payload],
        actionStatus: true,
      };
    case "FILTRAR_TODO":
      return {
        products: [...action.payload],
        filtrado:state.filtrado
      };
    default:
      return state;
  }
}
