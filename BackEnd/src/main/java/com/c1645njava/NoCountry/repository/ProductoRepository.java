package com.c1645njava.NoCountry.repository;

import com.c1645njava.NoCountry.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    //findByPrecioBetween: JPA se encarga de generar la
    // consulta SQL necesaria para filtrar los productos por precio en el
    // rango especificado.
    List<Producto> findByPrecioBetween(double minimo, double maximo);
}
