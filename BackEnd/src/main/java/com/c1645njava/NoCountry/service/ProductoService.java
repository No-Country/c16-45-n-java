package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.entity.Producto;

import java.util.List;

public interface ProductoService {

    List<Producto> listarProductos();

    Producto guardarProducto(Producto producto);

    Producto mostrarPorId(Long id);

    Producto editarProducto(Producto producto);

    void eliminarProducto(Long id);

    //Creado para filtrar por precio min y max de productos
    List<Producto> filtrarPorPrecio(
            String codigo, double minPrecio, double maxPrecio, int minCantidad, int maxCantidad, String categoria
    );
}
