export default function validate(product) {
  const error = {};

  if (product.detalle === "") {
    error.nameMessage = "falta nombre del producto";
  }

  if (product.precio === "0.0" || product.precio < 0) {
    error.priceMessage = "verifica el precio del producto";
  }

  if (product.categoria === "") {
    error.categoryMessage =
      "verifica la categoria del producto, no puede ir vacia";
  }

  if (product.fecha === "") {
    error.dateMessage = "verifica la fecha del producto";
  }

  if (product.cantidad === 0 || product.cantidad < 0) {
    error.quantityMessage =
      "verifica la cantidad del producto, no puede ser 0 o numero negativo";
  }

  if (product.marca === "") {
    error.brandMessage =
      "verifica la marca del producto, no puede ir vacio este campo";
  }

  if (product.imagen === "") {
    error.imageMessage = "verifica la url de la imagen del producto";
  }

  return error;
}
