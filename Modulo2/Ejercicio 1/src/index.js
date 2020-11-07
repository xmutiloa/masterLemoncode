//--------HEAD-------

//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
//y devuelva su primer elemento. Utiliza destructuring.

const colors1 = ["Yellow", "Red", "Blue", "Green"];

const head = ([first]) => first;

console.log("Head: " + head(colors1)); 



//--------INIT-------

//Implementa una función init (inmutable), tal que, dado un array como entrada
//devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
//Array.prototype.

const colors2 = ["Yellow", "Red", "Blue", "Green"];

const init = ([...init]) => init.slice(0, -1);

console.log("Init: " + init(colors2));



//--------TAIL-------

//Implementa una función tail (inmutable), tal que, dado un array como entrada
//devuelta todos menos el primer elemento. Utiliza rest operator.

const colors3 = ["Yellow", "Red", "Blue", "Green"];

const tail = ([, ...rest]) => rest;

console.log("Tail: " + tail(colors3));



//--------LAST-------

//Implementa una función last (inmutable), tal que, dado un array como entrada
//devuelva el último elemento.

const colors4 = ["Yellow", "Red", "Blue", "Green"];

const last = ([...last]) => last.slice(last.length-1);

console.log("Last: " + last(colors4));