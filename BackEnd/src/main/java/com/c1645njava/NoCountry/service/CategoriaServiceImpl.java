package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.entity.Categoria;
import com.c1645njava.NoCountry.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

//CategoriaServiceImpl proporciona la implementación concreta de estos métodos 
//utilizando el repositorio CategoriaRepository para interactuar con la base de datos.

@Service
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;


     @Override
    public Categoria crearCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public List<Categoria> obtenerTodasCategorias() {
        return categoriaRepository.findAll();
    }

    @Override
    public Categoria obtenerCategoriaPorId(Long id) {
        Optional<Categoria> categoriaOptional = categoriaRepository.findById(id);
        return categoriaOptional.orElse(null);
    }

    @Override
    public Categoria actualizarCategoria(Long id, Categoria categoria) {
        categoria.setId(id); // Asignar el ID al objeto de categoría proporcionado
        return categoriaRepository.save(categoria);
    }

    @Override
    public void eliminarCategoria(Long id) {
        categoriaRepository.deleteById(id);
    }
}
