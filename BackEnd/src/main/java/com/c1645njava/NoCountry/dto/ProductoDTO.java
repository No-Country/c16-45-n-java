package com.c1645njava.NoCountry.dto;

import java.time.LocalDate;

public record ProductoDTO
(
    String detalle,

    Long precio,

    LocalDate fechaAlta,

    String marca,

    String nombreProveedor,

    String imagenUrl

)
{

}
