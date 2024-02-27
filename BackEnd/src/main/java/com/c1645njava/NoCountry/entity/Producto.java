package com.c1645njava.NoCountry.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50)
    private String detalle;

    @Column(nullable = false)
    private double precio;

    @Column(nullable = false)
    private LocalDate fechaAlta;

    @Column(nullable = false)
    private int cantidad;
/*
    private Categoria categoria;
    */
    private String marca;

    private String nombreProveedor;

    @Column(nullable = false)
    private Boolean activo = true;

    @Column(length = 1000)
    private String imagenUrl;
}
