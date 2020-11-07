//Implementa una función clone que, a partir de un objeto de entrada source devuelva
//un nuevo objeto con las propiedades de source :

const original = { team: "Osasuna" ,  city: "Pamplona" ,  color: "Red" };

function clone(source) {
    var result = {};
    for (var key in source) {
        result[key] = source[key];
    }
    return result;
} 

const copy = clone(original); 

console.log(copy);
console.log(copy["team"]);   //Osasuna
console.log(copy["city"]);   //Pamplona
console.log(copy["color"]);  //Red

console.log(original === copy); // false
console.log(original["team"] === copy["team"]); // true;


//Implementa una función merge que, dados dos objetos de entrada source y target ,
//devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
//de propiedades con el mismo nombre, source sobreescribe a target

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

function merge(source, target) {
    var result = clone(target);
    for (var key in source) {
      result[key] = source[key];
    }
    return result;
}

console.log(merge(a,b));