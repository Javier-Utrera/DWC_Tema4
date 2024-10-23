// importante 19,20 y 21

// 11. Dada una cadena leída por teclado, realizar un programa que extraiga 
// los números que aparecen en dicha secuencia e imprima por pantalla dichos 
// números y su suma. 

// let filtro= (palabras)=>Array.from(palabras).filter((palabra)=>palabra/1==palabra);
// console.log("abd2rt0g54");
// console.log(filtro("abd24r0tg54"));

// 19 Hacer un programa en el que el usuario que introduzca, nombre, apellidos, 
//DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá 
//hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos 
//en un array bidimensional.
var entrada;
var contenedor=[];
do{
    entrada=prompt("Introduzca su Nombre,Apellidos,DNI,Fecha de nacimiento").split(",");
    if(entrada!=""){
        console.log(entrada);
        entrada[3]=new Date(entrada[3]);
        contenedor.push(entrada);
    }    
}while(entrada!="")

console.log(contenedor);


// 20 y 21 Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar 
// una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda? 
const fecha = new Date();
var aux = "";
var filtrado = [];
var nuevaVentana;

function apellido(persona, aux) {
    return persona[1] == aux;
}
function dni(persona, aux) {
    return persona[2] == aux;
}
function edad(persona) {
    return fecha.getFullYear() - persona[3].getFullYear();
}
var imprimir = (persona) => console.log("Nombre: " + persona[0] + "\nApellidos: " + persona[1] + "\nDNI: " + persona[2] + "\nFecha nacimiento: " + persona[3]);
var imprimirventana= (persona,ventana) => ventana.document.writeln("Nombre: " + persona[0] + "\nApellidos: " + persona[1] + "\nDNI: " + persona[2] + "\nFecha nacimiento: " + persona[3]);
var opcion = parseInt(prompt("Vamos a realizar una busqueda, ingrese la opcion que quiera usar \n 1.Apellidos \n 2.DNI \n 3.Edad \n 4.Imprimir todos los datos"));


switch (opcion) {
    case 1:
        alert("Vamos a buscar por Apellidos");
        aux = prompt("Escriba el apellido que desee buscar");
        filtrado = contenedor.filter(persona => apellido(persona, aux));
        filtrado.forEach(imprimir);
        break;
    case 2:
        alert("Vamos a buscar por DNI");
        aux = prompt("Escriba el DNI que desee buscar");
        filtrado = contenedor.filter(persona => dni(persona, aux));
        filtrado.forEach(imprimir);
        break;
    case 3:
        alert("Vamos a buscar por la Edad");
        aux = parseInt(prompt("Escriba la Edad que desee buscar"));
        filtrado = contenedor.filter(persona => edad(persona) == aux);
        filtrado.forEach(imprimir);
        break;
    case 4:
        alert("Le voy a mostrar todos los datos");
        filtrado = contenedor;
        filtrado.forEach(imprimir);
        break;
    case 5:
        alert("Le voy a enseñar los usuarios mayores de edad");
        filtrado = contenedor.filter(persona => edad(persona) >= 18);
        nuevaVentana = window.open("","_blank","height=400,width=800");
        filtrado.forEach(persona=>imprimirventana(persona,nuevaVentana));
        break;
    case 6:
        alert("Le voy a enseñar los usuarios menores de edad y los dias que faltan para que lo sean");
        filtrado = contenedor.filter(persona => edad(persona) < 18);
        var diasparacumplir = (persona) => {
            var dias = Math.round((new Date(persona[3].getFullYear() + 18, persona[3].getMonth(), persona[3].getDay()) - fecha) / 86400000);
            imprimir(persona);
            console.log("Le faltan " + dias + " dias para cumplir años");
        }
        nuevaVentana = window.open("","_blank","height=400,width=800");
        filtrado.forEach(persona=>imprimirventana(persona,nuevaVentana));
        break;
    case 7:
        opcion = parseInt(prompt("Que datos desea modificar: \n 1.Apellidos \n 2.DNI \n 3.Edad"));
        aux= prompt("Escriba cual va ser el nuevo valor");
        var dnibuscar=prompt("Indique el DNI del usuario que desea cambiar");
        let posicion= contenedor.findIndex(persona=>persona[2]==dnibuscar); 
        let amodificado=contenedor[posicion]; 
        amodificado.splice(opcion,1,aux);  
        contenedor.splice(posicion,1,amodificado);    
        contenedor.forEach(imprimir);
        break;
    case 8:
        contenedor.splice(contenedor.findIndex(persona=>persona[2]==prompt("Indique el DNI del usuario que desea cambiar")),1);
        contenedor.forEach(imprimir);
        break;         
    default:
        break;
}
console.log(contenedor);