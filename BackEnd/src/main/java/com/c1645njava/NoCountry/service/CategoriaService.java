package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.entity.Categoria;
import java.util.List;

public interface CategoriaService {
	CategoriaDTO crearCategoria(CategoriaDTO categoriaDTO);
    List<CategoriaDTO> obtenerTodasCategorias();
    CategoriaDTO obtenerCategoriaPorId(Long id);
    CategoriaDTO actualizarCategoria(Long id, CategoriaDTO categoriaDTO);
    void eliminarCategoria(Long id);
}
//CategoriaService define los métodos que estarán disponibles para realizar operaciones relacionadas con las categorías
//, como crear, obtener, actualizar y eliminar.