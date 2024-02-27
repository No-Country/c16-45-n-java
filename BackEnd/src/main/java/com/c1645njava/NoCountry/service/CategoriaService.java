package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.entity.Categoria;
import java.util.List;

public interface CategoriaService {
    Categoria crearCategoria(Categoria categoria);
    List<Categoria> obtenerTodasCategorias();
    Categoria obtenerCategoriaPorId(Long id);
    Categoria actualizarCategoria(Long id, Categoria categoria);
    void eliminarCategoria(Long id);
}
//CategoriaService define los métodos que estarán disponibles para realizar operaciones relacionadas con las categorías
//, como crear, obtener, actualizar y eliminar.