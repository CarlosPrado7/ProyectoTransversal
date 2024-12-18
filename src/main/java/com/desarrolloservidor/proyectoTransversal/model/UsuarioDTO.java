package com.desarrolloservidor.proyectoTransversal.model;

public class UsuarioDTO {
    
    private String dni;
    private String nombre;
    private String apellidos;
    private String nacionalidad;
    private String numero_telefono;
    private String correo;
    private java.sql.Date fecha_nacimiento;
    private String contrasena;
    private String nombre_usuario;
    private boolean es_vip;
    private Long numero_tarjeta;
    private java.sql.Date caducidad;
    private String titular;
    private Integer cvc;
    private Double saldo;
    
    public UsuarioDTO(String dni, Double saldo) {
        this.dni = dni;
        this.saldo = saldo;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public String getNumero_telefono() {
        return numero_telefono;
    }

    public void setNumero_telefono(String numero_telefono) {
        this.numero_telefono = numero_telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public java.sql.Date getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(java.sql.Date fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getNombre_usuario() {
        return nombre_usuario;
    }

    public void setNombre_usuario(String nombre_usuario) {
        this.nombre_usuario = nombre_usuario;
    }

    public boolean isEs_vip() {
        return es_vip;
    }

    public void setEs_vip(boolean es_vip) {
        this.es_vip = es_vip;
    }

    public Long getNumero_tarjeta() {
        return numero_tarjeta;
    }

    public void setNumero_tarjeta(Long numero_tarjeta) {
        this.numero_tarjeta = numero_tarjeta;
    }

    public java.sql.Date getCaducidad() {
        return caducidad;
    }

    public void setCaducidad(java.sql.Date caducidad) {
        this.caducidad = caducidad;
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public Integer getCvc() {
        return cvc;
    }

    public void setCvc(Integer cvc) {
        this.cvc = cvc;
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }

}
