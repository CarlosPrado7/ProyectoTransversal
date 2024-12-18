package com.desarrolloservidor.proyectoTransversal.service.implement;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desarrolloservidor.proyectoTransversal.entity.UsuarioEntity;
import com.desarrolloservidor.proyectoTransversal.repository.UsuarioRepository;
import com.desarrolloservidor.proyectoTransversal.service.UsuarioService;

@Service
public class UsuarioServiceImplement implements UsuarioService{

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UsuarioEntity buscarPorDni(String dni) {

        Optional <UsuarioEntity> usuarioOptional = usuarioRepository.findById(dni);

        return usuarioOptional.orElse(null);

    }

    @Override
    public void actualizarSaldo(String dni, Double saldo) {
        
        UsuarioEntity usuario = buscarPorDni(dni);

        usuario.setSaldo(saldo);

        usuarioRepository.save(usuario);

    }
    
    
    
}
