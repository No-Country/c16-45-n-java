package com.c1645njava.NoCountry.controller;

import com.c1645njava.NoCountry.dto.UsuarioDTO;
import com.c1645njava.NoCountry.entity.Usuario;
import com.c1645njava.NoCountry.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="https://nocountryfront-production.up.railway.app/")
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioService usuarioService;


    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }


    @PostMapping
    public UsuarioDTO crearUsuario(@RequestBody Usuario usuario) {
        return usuarioService.crear(usuario);
    }

    @GetMapping("/por-correo")
    public UsuarioDTO getUsuario(@RequestParam String correo) {
        return usuarioService.getUsuario(correo);
    }

    @GetMapping
    public List<UsuarioDTO> getUsuarios() {
        return usuarioService.getUsuarios();
    }

    @PutMapping("/por-correo")
    public UsuarioDTO update(@RequestParam String correo, @RequestBody Usuario usuario) {
        return usuarioService.update(correo, usuario);
    }

    @DeleteMapping("/por-correo")
    public void delete(@RequestParam String correo) {
        usuarioService.delete(correo);
    }
}
