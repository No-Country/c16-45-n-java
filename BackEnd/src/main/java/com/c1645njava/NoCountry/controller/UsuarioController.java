package com.c1645njava.NoCountry.controller;

import com.c1645njava.NoCountry.dto.LoginDTO;
import com.c1645njava.NoCountry.dto.UsuarioDTO;
import com.c1645njava.NoCountry.entity.Usuario;
import com.c1645njava.NoCountry.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "http://localhost:5173/")
public class UsuarioController {
    private UsuarioService usuarioService;


    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }


    @PostMapping("/login")
    public boolean usuarioLogin(@RequestBody LoginDTO usuario){
        if(usuario.email().equals("omar.virili@gmail.com")&& usuario.password().equals("1234")){
            return true;
        }
        return false;
    }
    @PostMapping
    public UsuarioDTO crearUsuario(@RequestBody Usuario usuario) {
        return usuarioService.crear(usuario);
    }

    @GetMapping("/{id}")
    public UsuarioDTO getUsuario(@PathVariable String id) {
        return usuarioService.getUsuario(id);
    }

    @GetMapping
    public List<UsuarioDTO> getUsuarios() {
        return usuarioService.getUsuarios();
    }

    @PutMapping("/{id}")
    public UsuarioDTO update(@PathVariable String id, @RequestBody Usuario usuario) {
        return usuarioService.update(id, usuario);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable String id) {
        try {
            usuarioService.delete(id);
            return "Usuario eliminado";
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}