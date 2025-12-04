let nombre = prompt("¿Cuál es tu nombre?");

let edad = Number(prompt("¿Cuál es tu edad?"));

let respuestaEstudiante = prompt("¿Eres estudiante? (sí/no)").toLowerCase();
let esEstudiante = (respuestaEstudiante === "sí" || respuestaEstudiante === "si");

console.log("Resltado Parte 1");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", esEstudiante);

console.log("Valores modificados");

nombre = nombre + " (modificado)";
edad = edad + 10 + 2; 
esEstudiante = !esEstudiante; 

console.log("Nuevo nombre:", nombre);
console.log("Nueva edad:", edad);
console.log("¿Es estudiante ahora?:", esEstudiante);