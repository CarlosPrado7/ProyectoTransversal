package com.desarrolloservidor.proyectoTransversal.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "USUARIO")
public class UsuarioEntity {

    @Id
    @Column(name = "DNI", unique = true, nullable = false)
    private String dni;

    @Column(name="NOMBRE")
    private String nombre;

    @Column(name = "APELLIDOS")
    private String apellidos;

    @Column(name = "NACIONALIDAD")
    private String nacionalidad;

    @Column(name = "NUMERO_TELEFONO")
    private String numeroTelefono;

    @Column(name = "CORREO")
    private String correo;

    @Column(name = "FECHA_NACIMIENTO")
    private java.sql.Date fechaNacimiento;

    @Column(name = "PASSWORD")
    private String contrasena;

    @Column(name = "NOMBRE_USUARIO")
    private String nombreUsuario;

    @Column(name = "ES_VIP")
    private boolean esVip;

    @Column(name = "NUMERO_TARJETA")
    private Long numeroTarjeta;

    @Column(name = "CADUCIDAD")
    private java.sql.Date caducidad;

    @Column(name = "TITULAR")
    private String titular;

    @Column(name = "CVC")
    private Integer cvc;

    @Column(name = "SALDO")
    private Double saldo;

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
    public String getNumeroTelefono() {
        return numeroTelefono;
    }
    public void setNumeroTelefono(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }
    public String getCorreo() {
        return correo;
    }
    public void setCorreo(String correo) {
        this.correo = correo;
    }
    public java.sql.Date getFechaNacimiento() {
        return fechaNacimiento;
    }
    public void setFechaNacimiento(java.sql.Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
    public String getContrasena() {
        return contrasena;
    }
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    public String getNombreUsuario() {
        return nombreUsuario;
    }
    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }
    public boolean isEsVip() {
        return esVip;
    }
    public void setEsVip(boolean esVip) {
        this.esVip = esVip;
    }
    public Long getNumeroTarjeta() {
        return numeroTarjeta;
    }
    public void setNumeroTarjeta(Long numeroTarjeta) {
        this.numeroTarjeta = numeroTarjeta;
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
    @Override
    public String toString() {
        return "UsuarioEntity [dni=" + dni + ", nombre=" + nombre + ", apellidos=" + apellidos + ", nacionalidad="
                + nacionalidad + ", numeroTelefono=" + numeroTelefono + ", correo=" + correo + ", fechaNacimiento="
                + fechaNacimiento + ", contrasena=" + contrasena + ", nombreUsuario=" + nombreUsuario + ", esVip="
                + esVip + ", numeroTarjeta=" + numeroTarjeta + ", caducidad=" + caducidad + ", titular=" + titular
                + ", cvc=" + cvc + ", saldo=" + saldo + "]";
    }

}
