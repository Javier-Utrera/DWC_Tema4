// Escribe todas las funciones en ES5 y con la notación de función flecha de ES6.
    
    ////A. Escribe una función llamada elMenor que acepte un número variable de parámetros y 
    // devuelva el parámetro de menor valor pasado a la función.

        // ES5
    // function elMenor(){ 
    //     var menor=arguments[0];
    //     var aux=0;
    //     for (const i in arguments) {
    //         aux=arguments[i]
    //         if (aux<menor) {
    //             menor=aux;
    //         }
    //     }
    //     return menor;
    // }
        // ES6
    // let elMenor = (...param) => { 
    //     var menor=param[0];
    //     var aux=0;
    //     for (const i in param) {
    //         aux=param[i]
    //         if (aux<menor) {
    //             menor=aux;
    //         }
    //     }
    //     return menor;        
    // }
        //Ejecutar
    // alert(elMenor(2,1,3,4,5));

    ////B. Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays 
    // y devuelva el primer array con todos los valores del segundo array colocados en el 
    // centro del primer array. 

        // ES5
    // function colocaEnMedio(uno,dos){ 
    //     var lista1=[...uno];
    //     var enmedio= Math.round(lista1.length/2);
    //     lista1.splice(enmedio,0,...dos);
    //     return lista1;
    // }
        //ES6
    // var colocaEnMedio = (uno,dos) => { 
    //     var lista1=[...uno];
    //     lista1.splice(Math.round(lista1.length/2),0,...dos);
    //     return lista1;
    // }
        //Ejecutar
    // console.log(colocaEnMedio([],[2,3,4,5]));

    ////C. Escribe una función llamada uneArrays que acepte un número variable de parámetros 
    //(cada uno de ellos será un array) y devuelva un nuevo array con todos los parámetros concatenados.

        // ES5
    // function uneArrays(){ 
    //     var arrayfinal=[];
    //     for (const key in arguments) {
    //         arrayfinal.push(...arguments[key]);
    //     }
    //     return arrayfinal;
    // }
        // ES6
    // let uneArrays=(...param)=>{ 
    //     var arrayfinal=[];
    //     for (const key in param) {
    //             arrayfinal.push(...param[key]);
    //         }
    //     return arrayfinal;

    // }
        //Ejecutar
    // console.log(uneArrays([2,3,4,5],[2,3,4,5]));

    //D. Escribe una función llamada sumaArgPares que sume todos 
    //los argumentos pares que se pasen a la función.

        //ES5
    // function sumArgPares(){ 
    //     let suma = 0;
    //     for (const key in arguments) {
    //         if(arguments[key]%2==0){
    //             suma+=arguments[key];
    //         }
    //     }
    //     return suma;       
    // }    
        //ES6
    // let sumArgPares = (...param) => { 
    //     let suma = 0;
    //     for (const key in param) {
    //         if(param[key]%2==0){
    //             suma+=param[key];
    //         }
    //     }
    //     return suma; 
    // }
        //Ejecutar
    // console.log(sumArgPares(1,2,3,4))