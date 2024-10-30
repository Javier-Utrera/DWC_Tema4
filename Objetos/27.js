// Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona)
// prompt("Introduzca su Nombre,Apellidos,DNI,Fecha de nacimiento")
persona1 = new Persona("Javier","Rodriguez","43221643C","1994-10-15");
persona2 = new Persona("Ana", "Martinez", "52784321H", "1982-03-22");
persona3 = new Persona("Carlos", "Lopez", "38472615J", "2003-07-11");
persona4 = new Persona("Laura", "Gonzalez", "47283612Q", "2006-12-30");
persona5 = new Persona("Miguel", "Sanchez", "25981734L", "1990-06-17");
persona6 = new Persona("Elena", "Fernandez", "38761248K", "2004-09-03");

lista= [persona1,persona2,persona3,persona4,persona5,persona6];
//Apellidos
let valor="Sanchez";
filtrado = lista.filter(persona => persona.apellidos===valor);
filtrado.forEach(persona => document.write(persona.imprimir()));

