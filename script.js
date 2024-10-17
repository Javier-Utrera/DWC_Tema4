/* 3
Realizar un programa que calcule el número de cifras de un número. 
Deberá implementarse una función numCifras(numero) que devuelva el número de cifras del mismo. 
Utiliza el operador spread.
*/

function sumaNumClasica(){ 
    var suma=0;
    for (const i in arguments) {
        suma += arguments[i];
    }
    console.log(suma);
    return suma;
}

alert(sumaNumClasica(2,3,3));

// let sumaNumClasica = (...param) => { 
//     var suma=0;
//     for (const i in param) {
//         suma += param[i];
//     }
//     console.log(suma);
// }
// alert(sumaNumClasica(2,3,3));
/* 6
Hacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. 
El número de argumentos de entrada es desconocido.
*/
