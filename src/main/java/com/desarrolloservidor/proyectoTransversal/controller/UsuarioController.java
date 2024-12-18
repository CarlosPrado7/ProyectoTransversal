package com.desarrolloservidor.proyectoTransversal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desarrolloservidor.proyectoTransversal.entity.UsuarioEntity;
import com.desarrolloservidor.proyectoTransversal.model.UsuarioDTO;
import com.desarrolloservidor.proyectoTransversal.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/recuperarSaldo")
    public UsuarioEntity recuperarSaldo () {
        return usuarioService.buscarPorDni("12345678A");

    }
    
    
    @PostMapping("/actualizarSaldo")
    public String actualizarSaldo (@RequestBody UsuarioDTO usuario) {

        String dni = usuario.getDni();
        Double saldo = usuario.getSaldo();

        usuarioService.actualizarSaldo(dni, saldo);

        return "Saldo actualizado para el usuario con DNI: " + dni;
    }

}
