package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.entity.Usuario;
import com.c1645njava.NoCountry.enumeration.Rol;
import com.c1645njava.NoCountry.repository.UsuarioRepository;
import com.c1645njava.NoCountry.security.JwtService;
import com.c1645njava.NoCountry.entity.AuthenticationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsuarioAuthService {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public UsuarioAuthService(
            UsuarioRepository usuarioRepository,PasswordEncoder passwordEncoder,
            JwtService jwtService, AuthenticationManager authenticationManager
    ) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @Transactional
    public AuthenticationResponse registrar(Usuario usuario) {
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        usuario.setRol(Rol.USER);
        usuarioRepository.save(usuario);
        String token = jwtService.generateToken(usuario);
        return new AuthenticationResponse(token);
    }

    public AuthenticationResponse autenticar(Usuario usuario) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        usuario.getCorreo(),
                        usuario.getPassword()
                )
        ); // Throws exception if user and password are not correct
        Usuario authenticatedUser = usuarioRepository.findByCorreo(usuario.getCorreo()).orElseThrow();
        String token = jwtService.generateToken(authenticatedUser);
        return new AuthenticationResponse(token);
    }
}
