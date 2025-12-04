let esMayorDeEdad = prompt("¿Eres mayor de edad? (sí/no)") === "si";
let tieneLicencia = prompt("¿Tienes licencia de conducir? (sí/no)") === "si";

let puedeConducir = esMayorDeEdad && tieneLicencia;
console.log("¿Puede conducir?:", puedeConducir);

let errorDeConducir = esMayorDeEdad || tieneLicencia;
console.log("¿Puede conducir con errores?:", errorDeConducir);

let mensajeConcatenado = "Hola " + "usuario" + ", este es un mensaje de espera.";
console.log(mensajeConcatenado);

let mensajeTemplate = `Hola usuario, el valor de puede conducir es: ${puedeConducir}`;
console.log(mensajeTemplate);
