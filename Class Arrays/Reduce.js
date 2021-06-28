let arr = [1, 5, 6, 8, 7, 5];

// var tasks = [
//   {
//     name: "Write for Envato Tuts+",

//     duration: 120,
//   },

//   {
//     name: "Work out",

//     duration: 60,
//   },

//   {
//     name: "Procrastinate on Duolingo",

//     duration: 240,
//   },
// ];

// function suma(arr) {
//   return console.log(
//     "Varlos usando reduce    " +
//       arr.reduce(
//         (Acumulador, elementoActual, posicion, arr) =>
//           Acumulador + elementoActual
//       )
//   );
// }

// suma(arr);

const numeros = [71, 41, 19, 88, 3, 65];
const doblesConMap = (value)=>{
   return value*2
}
const acumularDobles = (acumulador, numero) => {
  return [...acumulador,numero * 2];
};
const dobles = numeros.reduce(acumularDobles, []);
const doblesmap =  numeros.map(doblesConMap)

console.log(dobles);
console.log(doblesmap);
