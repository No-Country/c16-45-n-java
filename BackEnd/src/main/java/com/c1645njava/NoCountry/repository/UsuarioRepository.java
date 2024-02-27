package com.c1645njava.NoCountry.repository;

import com.c1645njava.NoCountry.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    public Optional<Usuario> findByCorreo(String correo);
}
