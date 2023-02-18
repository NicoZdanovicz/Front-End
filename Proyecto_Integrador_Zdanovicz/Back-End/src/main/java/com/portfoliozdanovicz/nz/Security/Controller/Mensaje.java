package com.portfoliozdanovicz.nz.Security.Controller;


public class Mensaje {
    private String mensaje;
    
    //Constrcutores

    public Mensaje() {
    }

    public Mensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    
    //Getters y Setters

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    
}
