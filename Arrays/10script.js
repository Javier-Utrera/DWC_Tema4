// Refactoriza el siguiente código usando funciones flecha.
    
//A. Asegúrate de que la función se llama tripleAndFilter.
//     function tripleAndFilter(arr){

//     		return arr.map(function(value){

//         			return value * 3;

//      			}).filter(function(value){

//        			return value % 5 === 0;

//       		})
//     }
    // Respuesta
        // let tripleAndFilter = (arr) => arr.map((value)=> value * 3).filter((value)=> value % 5 === 0);
        // console.log(tripleAndFilter([1,5,10]));

// B. Asegúrate de que la función se llama doubleOddNumbers.
// function doubleOddNumbers(arr){
//     return arr.filter(function(val){
//         return val % 2 !== 0;
//     }).map(function(val){
//         return val *2;
//     })
// }
    // Respuesta
        // let doubleOddNumbers = (arr) => arr.filter((val)=>val%2!==0).map((val)=>val*2);
        // console.log(doubleOddNumbers([1,5,10]));

// C. Asegúrate de que la función se llama bar
// function bar(){ 
// let txt = ''; 
// for(let i in arguments){ 
// txt += arguments[i];
// } 
// return txt;
// }

    //Respuesta
        // let bar=(...param)=>param.reduce((contenedor,val)=>contenedor+=val,"");
        // console.log(bar("a","b","c"));

// D. Escribe una función llamada sumaArgPares que sume todos los argumentos pares 
// que se pasen a la función.
    // let sumaArgPares = (...param) => param.filter((num)=>num%2==0).reduce((contenedor,num)=>contenedor+=num,0);
    // console.log(sumaArgPares(1,2,3,4));