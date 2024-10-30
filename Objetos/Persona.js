class Persona{ 
    constructor(nombre,apellidos,dni,fecha_nacimiento){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.fecha_nacimiento=new Date(fecha_nacimiento);
    }
    imprimir(){ 
        return "Nombre: " + this.nombre + " Apellidos: " + this.apellidos + " DNI: " + this.dni
    };
}