package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.dto.CategoriaDTO;
import com.c1645njava.NoCountry.entity.Categoria;
import com.c1645njava.NoCountry.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Override
    public List<CategoriaDTO> obtenerTodasCategorias() {
        List<Categoria> categorias = categoriaRepository.findAll();
        return categorias.stream()
                        .map(this::convertirACategoriaDTO)
                        .collect(Collectors.toList());
    }

    @Override
    public CategoriaDTO obtenerCategoriaPorId(Long id) {
        Optional<Categoria> categoriaOptional = categoriaRepository.findById(id);
        return categoriaOptional.map(this::convertirACategoriaDTO).orElse(null);
    }

    @Override
    public CategoriaDTO actualizarCategoria(Long id, CategoriaDTO categoriaDTO) {
        Categoria categoriaExistente = categoriaRepository.findById(id)
                                                         .orElseThrow(() -> new RuntimeException("Categoria no encontrada"));
        categoriaExistente.setNombre(categoriaDTO.getNombre());
        categoriaExistente.setDescripcion(categoriaDTO.getDescripcion());
        return convertirACategoriaDTO(categoriaRepository.save(categoriaExistente));
    }

    @Override
    public void eliminarCategoria(Long id) {
        categoriaRepository.deleteById(id);
    }

    // Método para convertir Categoria a CategoriaDTO
    private CategoriaDTO convertirACategoriaDTO(Categoria categoria) {
        CategoriaDTO categoriaDTO = new CategoriaDTO();
        categoriaDTO.setId(categoria.getId());
        categoriaDTO.setNombre(categoria.getNombre());
        categoriaDTO.setDescripcion(categoria.getDescripcion());
        return categoriaDTO;
    }
}
