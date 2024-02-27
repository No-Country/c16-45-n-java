package com.c1645njava.NoCountry.entity;

import com.c1645njava.NoCountry.dto.UsuarioDTO;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UsuarioDTOMapper implements Function<Usuario, UsuarioDTO> {
    @Override
    public UsuarioDTO apply(Usuario usuario) {
        return new UsuarioDTO(
                usuario.getNombre(),
                usuario.getCorreo(),
                usuario.getRol().name()
        );
    }
}
