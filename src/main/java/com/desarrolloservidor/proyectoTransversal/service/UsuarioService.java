package com.desarrolloservidor.proyectoTransversal.service;

import com.desarrolloservidor.proyectoTransversal.entity.UsuarioEntity;

public interface UsuarioService {

    UsuarioEntity buscarPorDni(String dni);

    void actualizarSaldo(String dni, Double saldo);


}
