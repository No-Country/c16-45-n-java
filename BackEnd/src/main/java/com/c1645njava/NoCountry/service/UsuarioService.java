package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.dto.UsuarioDTO;
import com.c1645njava.NoCountry.entity.UsuarioDTOMapper;
import com.c1645njava.NoCountry.entity.Usuario;
import com.c1645njava.NoCountry.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    private final UsuarioDTOMapper usuarioDTOMapper;


    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, UsuarioDTOMapper usuarioDTOMapper) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioDTOMapper = usuarioDTOMapper;
    }

    @Transactional
    public UsuarioDTO crear(Usuario usuario) {
        usuarioRepository.save(usuario);
        return usuarioToDto(usuario);
    }

    public UsuarioDTO getUsuario(String correo) {
        return usuarioRepository.findByCorreo(correo)
                .map(usuarioDTOMapper)
                .orElseThrow();
    }

    public List<UsuarioDTO> getUsuarios() {
        return usuarioRepository.findAll()
                .stream()
                .map(usuarioDTOMapper)
                .collect(Collectors.toList());
    }

    public UsuarioDTO update(String correo, Usuario usuarioUpdate) {
        Usuario usuario = usuarioRepository.findByCorreo(correo).orElseThrow();
        usuario.setNombre(usuarioUpdate.getNombre());
        usuario.setCorreo(usuarioUpdate.getCorreo());
        usuario.setPassword(usuarioUpdate.getPassword());
        usuario.setRol(usuarioUpdate.getRol());

        usuarioRepository.save(usuario);
        return usuarioToDto(usuario);
    }

    public void delete(String correo) {
        Usuario usuario = usuarioRepository.findByCorreo(correo).orElseThrow();
        usuarioRepository.delete(usuario);
    }

    private UsuarioDTO usuarioToDto(Usuario usuario) {
        return new UsuarioDTO(
                usuario.getNombre(),
                usuario.getCorreo(),
                usuario.getRol().name()
        );
    }
}
