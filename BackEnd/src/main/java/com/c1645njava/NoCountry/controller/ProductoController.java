package com.c1645njava.NoCountry.controller;

import com.c1645njava.NoCountry.entity.Producto;
import com.c1645njava.NoCountry.service.ProductoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="${URL_API}")


@RestController
@RequestMapping("/api")

public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    // Obtener todos los productos - OK

    @GetMapping("/listar")
    public ResponseEntity<List<Producto>> listarProductos()
    {
        List<Producto> productos = productoService.listarProductos();
        return ResponseEntity.ok().body(productos);
    }


    // Mostrar formulario para guardar un producto - OK
    @GetMapping("/formulario")
    public ResponseEntity<String> formularioGuardarProducto() {
        return ResponseEntity.ok().body("formulario guardar producto");
    }

    // Guardar un nuevo producto - OK

    @PostMapping("/nuevo")
    public ResponseEntity<Producto> guardarProducto(@RequestBody Producto producto) {
        Producto nuevoProducto = productoService.guardarProducto(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoProducto);
    }


    // Obtener un producto por su ID - OK
    @GetMapping("/producto/{id}")
    public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable Long id)
    {
        Producto producto = productoService.mostrarPorId(id);
        if (producto != null)
        {
            return ResponseEntity.ok().body(producto);
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }

    // Editar un producto existente - OK
    //Modificacion - agregue atributos faltantes 26/2 y 29/2
    @PutMapping("/editar/{id}")
    public ResponseEntity<Producto> editarProducto(@PathVariable Long id, @RequestBody Producto producto) {
        Producto productoExistente = productoService.mostrarPorId(id);
        if (productoExistente != null) {
            // Actualizando solo los atributos que se pueden modificar
            productoExistente.setDetalle(producto.getDetalle());
            productoExistente.setPrecio(producto.getPrecio());
            productoExistente.setFechaAlta(producto.getFechaAlta());
            productoExistente.setCantidad(producto.getCantidad());
            productoExistente.setCategoria(producto.getCategoria());
            productoExistente.setMarca(producto.getMarca());
            productoExistente.setNombreProveedor(producto.getNombreProveedor());
            productoExistente.setCodigoBarra(producto.getCodigoBarra());
            productoExistente.setActivo(producto.getActivo());
            productoExistente.setImagenUrl(producto.getImagenUrl());

            productoService.editarProducto(productoExistente);
            return ResponseEntity.ok().body(productoExistente);
        } else {
            return ResponseEntity.notFound().build();
        }

    }




    //Eliminar producto - OK
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        productoService.eliminarProducto(id);
        return ResponseEntity.noContent().build();
    }


    //Filtrar por rango de precio Min y Max
    @GetMapping("/filtrar-precio")
    public ResponseEntity<List<Producto>> listarPorPrecio(
            @RequestParam(required = false) String codigo, @RequestParam(required = false) Double minPrecio,
            @RequestParam(required = false) Double maxPrecio, @RequestParam(required = false) Integer minCantidad,
            @RequestParam(required = false) Integer maxCantidad, @RequestParam(required = false) String categoria
    ) {
        // Si se proporcionaron valores, filtra los productos por precio
        List<Producto> productosFiltrados = productoService.filtrarPorPrecio(
                codigo, minPrecio, maxPrecio, minCantidad, maxCantidad, categoria
        );
        return ResponseEntity.ok(productosFiltrados);
    }




}
