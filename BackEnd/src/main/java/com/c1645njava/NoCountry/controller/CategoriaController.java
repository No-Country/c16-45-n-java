package com.c1645njava.NoCountry.controller;


import com.c1645njava.NoCountry.entity.Categoria;
import com.c1645njava.NoCountry.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins="${URL_API}")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    // Endpoint para crear una nueva categoría
    @PostMapping
    public ResponseEntity<Categoria> crearCategoria(@RequestBody Categoria categoria) {
        Categoria nuevaCategoria = categoriaService.crearCategoria(categoria);
        return new ResponseEntity<>(nuevaCategoria, HttpStatus.CREATED);
    }

    // Endpoint para obtener todas las categorías
    @GetMapping
    public ResponseEntity<List<Categoria>> obtenerTodasCategorias() {
        List<Categoria> categorias = categoriaService.obtenerTodasCategorias();
        return new ResponseEntity<>(categorias, HttpStatus.OK);
    }

    // Endpoint para obtener una categoría por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Categoria> obtenerCategoriaPorId(@PathVariable Long id) {
        Categoria categoria = categoriaService.obtenerCategoriaPorId(id);
        return new ResponseEntity<>(categoria, HttpStatus.OK);
    }

    // Endpoint para actualizar una categoría existente
    @PutMapping("/{id}")
    public ResponseEntity<Categoria> actualizarCategoria(@PathVariable Long id, @RequestBody Categoria categoria) {
        Categoria categoriaActualizada = categoriaService.actualizarCategoria(id, categoria);
        return new ResponseEntity<>(categoriaActualizada, HttpStatus.OK);
    }

    // Endpoint para eliminar una categoría por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCategoria(@PathVariable Long id) {
        categoriaService.eliminarCategoria(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
