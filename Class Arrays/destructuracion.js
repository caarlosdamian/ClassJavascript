//OBJETOS

// let persona = {
//   nombre: "Carlos",
//   apellido: "Damian",
//   hijos: {
//     numero: 12,
//     nombres: {
//       nombre: "jaime",
//       apellido: "Mausan",
//     },
//   },
// };

//Manera normal
// let nombre = persona.nombre;
// let apellido = persona.apellido;
// console.log(`${nombre} ${apellido}`);
//Destructuracion
// let { nombre, apellido } = persona;
// console.log(`${nombre} ${apellido}`);
// let {
//   hijos: {
//     nombres: { nombre: nombreHijo },
//   },
// } = persona;

// console.log(nombreHijo);

// function printPersona({
//   hijos: {
//     nombres: { nombre },
//   },
// }) {
//   console.log(`${nombre}`);
// }

// printPersona(persona);

//ARREGLOS
// let arreglo = [1,2,4,5,8,6,9,4,7];
// let [x,y,,z] = arreglo;
// console.log(x,y,z)