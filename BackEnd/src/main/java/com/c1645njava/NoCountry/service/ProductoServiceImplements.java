package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.entity.Producto;

import java.util.List;

import com.c1645njava.NoCountry.repository.ProductoRepository;
import com.c1645njava.NoCountry.service.ProductoService;
import org.springframework.stereotype.Service;


import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class ProductoServiceImplements implements ProductoService {

    private final ProductoRepository repositorio;

    public ProductoServiceImplements(ProductoRepository repositorio) {
        this.repositorio = repositorio;
    }

    @Override
    public List<Producto> listarProductos() {
        return repositorio.findAll();
    }

    @Override
    public Producto guardarProducto(Producto producto) {
        return repositorio.save(producto);
    }

    @Override
    public Producto mostrarPorId(Long id) {
        return repositorio.findById(id)
                .orElseThrow(() -> new NoSuchElementException("No se encontró un producto con el ID: " + id));
    }

    @Override
    public Producto editarProducto(Producto producto) {
        return repositorio.save(producto);
    }

    @Override
    public void eliminarProducto(Long id) {
        repositorio.deleteById(id);
    }

    @Override
    public List<Producto> filtrarPorPrecio(
            String codigo, Double minPrecio, Double maxPrecio, Integer minCantidad, Integer maxCantidad, String categoria
    ) {
        return repositorio.findAll().stream()
                .filter(producto -> (codigo == null || producto.getCodigoBarra().contains(codigo)))
                .filter(producto -> (minPrecio == null || producto.getPrecio() >= minPrecio))
                .filter(producto -> (maxPrecio == null || producto.getPrecio() <= maxPrecio))
                .filter(producto -> (minCantidad == null || producto.getCantidad() >= minCantidad))
                .filter(producto -> (maxCantidad == null || producto.getCantidad() <= maxCantidad))
                .filter(producto -> (categoria == null || producto.getCategoria().contains(categoria)))
                .collect(Collectors.toList());
    }
}