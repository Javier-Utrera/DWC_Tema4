// Escribe todas las funciones en ES5 y con la notación de función flecha de ES6.
    
    // Escribe una función llamada elMenor que acepte un número variable de parámetros y 
    // devuelva el parámetro de menor valor pasado a la función.

        // ES5
    function elMenor(){ 
        var menor=0;
        var aux=0;
        for (const i in arguments) {
                aux=arguments[i]
                if (menor) {

                }
        }
        return menor;
    }
    alert(elMenor(1,2,3,4,5));
