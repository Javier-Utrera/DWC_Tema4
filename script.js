/* 3
Realizar un programa que calcule el número de cifras de un número. 
Deberá implementarse una función numCifras(numero) que devuelva el número de cifras del mismo. 
Utiliza el operador spread.
*/
function numCifras(numero){ 
    let cifras= [...numero];
    console.log(cifras.length);
    console.log(cifras);
}

function contador(){ 
    let mostrar="";
    for (const i in arguments) {
        mostrar += arguments[i];
    }
    console.log(mostrar);
}
function ejecucion(numero){ 
    console.log(...numero);
    contador(...numero);
}
/* 6
Hacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. 
El número de argumentos de entrada es desconocido.
*/
function suma(param1,param2, ...restParams){ 
    let resultado="";
    for (const i in arguments) {
        resultado += arguments[i];        
    }
    console.log(resultado);
}
