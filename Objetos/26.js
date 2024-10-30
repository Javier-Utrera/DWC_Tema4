// Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, 
// con métodos para hallar el perímetro del mismo y su área. Añade también dos 
// métodos para calcular la base y la altura del rectángulo a partir de los puntos.

let punto1 = new Punto(2,3);
let punto2 = new Punto(3,4);

let rectangulo = new Rectangulo(punto1,punto2);
console.log(rectangulo.a)
console.log(rectangulo.b)
console.log(rectangulo.areac());
console.log(rectangulo.perimetroc());