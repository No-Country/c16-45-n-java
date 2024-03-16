package com.c1645njava.NoCountry.controller;

import com.c1645njava.NoCountry.dto.LoginDTO;
import com.c1645njava.NoCountry.entity.Usuario;
import com.c1645njava.NoCountry.entity.AuthenticationResponse;
import com.c1645njava.NoCountry.repository.UsuarioRepository;
import com.c1645njava.NoCountry.service.UsuarioAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@CrossOrigin(origins="${URL_API}")

@RequestMapping("/api/auth")
public class AuthController {
    private final UsuarioAuthService authService;
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public AuthController(UsuarioAuthService authService, UsuarioRepository usuarioRepository) {
        this.authService = authService;
        this.usuarioRepository = usuarioRepository;
    }

    @PostMapping("/registrar")
    public ResponseEntity<AuthenticationResponse> registrar(@RequestBody Usuario usuarioRequest) {
        return ResponseEntity.ok(authService.registrar(usuarioRequest));
    }


    @PostMapping("/autenticar")
    public ResponseEntity<AuthenticationResponse> autenticar(@RequestBody Usuario usuarioRequest) {
        return ResponseEntity.ok(authService.autenticar(usuarioRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody LoginDTO loginDTO) {
        Usuario usuario = usuarioRepository.findByCorreo(loginDTO.email()).orElseThrow();
        if (Objects.equals(loginDTO.password(), usuario.getPassword())) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }
}
