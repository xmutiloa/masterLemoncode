//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
//devuelva la concatenación de ambos. Utiliza rest / spread operators.

const colors1 = ["Yellow", "Red", "Blue", "Green"];

const colors2 = ["Black", "White", "Brown", "Grey"];

const concat = (a, b) => [...a, ...b];

console.log("Concat: " + concat(colors1,colors2));


// Opcional
const colors3 = ["Pink", "Olive", "Marine", "Purple"];

const concatMulti = (...arrays) => {
  let result = [];
  for(let array of arrays) {
    result = [...result, ...array];
  }
  return result;
}

console.log("Concat multiple: " + concatMulti(colors1,colors2,colors3));