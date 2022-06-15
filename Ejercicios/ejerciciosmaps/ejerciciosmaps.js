/* 1. Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo

const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000] */

const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const arrElevado = numbers.map(function(x) {
    return x**x;
 });

 console.log(arrElevado);

/* 2. Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado

//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/ 

const foodList1 = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const frases = foodList1.map(x => {
  if(x=="Pizza"){return `Como soy de Italia, amo comer ${x}`}
})





/* Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:*/
// Resultado esperado
/*
  [
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]*/
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

const result = staff.map(o => `${o.name} es ${o.role} y le gusta ${o.hobbies[0]} y ${o.hobbies[1]}`);

console.log(result);



/*2. Ejercicios Filter

Crea un segundo array con que devuelva los impares
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = numbers.filter(impar => {
  return impar%2==1
})

console.log(impares);



/*Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo*/

/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/

let foodList2 = [
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }
];


let vegano = foodList2.filter(i => {
  return i.isVeggie==true
})

let nuevo = vegano[0].name;
let nuevo1 = vegano[1].name;

let frase1 = `Que rico ${nuevo} me voy a comer`;
let frase2 =`Que rica ${nuevo1} me voy a comer`;

let arrayFinal = [frase1, frase2]

console.log(arrayFinal);


/*Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros*/

/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

let caro = inventory.filter(i => {
  return i.price > 300
})

let inventory1 = caro[0].name;
let inventory2 = caro[1].name;

let arrayFinal = [inventory1, inventory2]

console.log(arrayFinal);


/*3. Ejercicios reduce
Dado el siguiente array, obten la multiplicación de todos los elementos del array*/

// Salida--> 483600

const numeros = [39, 2, 4, 25, 62];

const multiplicacion = numeros.reduce(function(anterior,actual){
  return anterior*actual;
})

// version flecha
const multiplicacion = numeros.reduce(
  (i, j) => i*j);


console.log(multiplicacion); 


/*Concatena todos los elementos del array con reduce para que devuelva una sola frase*/

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const sentenceElements = [
  'Me', 'llamo', 'y', 'quiero', 'sentir',
  'la','fuerza','con','javascript'];

let nombre = prompt("Introduce tu nombre")

sentenceElements.splice(2,0, nombre)

const fraseUnica = sentenceElements.reduce(
  (i, j) => i +" "+j);

console.log(fraseUnica);


/*Obtener el monto total de los elementos que pertenecen a catergory "code"
Resultado --> 60*/

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];


let libro = books.filter(i => {
  return i.category=='code';
})

let arr = [libro[0].price,libro[1].price];

let suma = arr.reduce((i,j) => {
  return i+=j;
})

console.log(suma);

/*______________________DESTRUCTURING_____________________*/

/*1. Ejercicios destructuring
Dado el siguiente objeto:

Extrae la empleada Ana completa
{"name":"Ana", "email":"Ana@gmail.com"}*/

let [name1, email1] = [empleados[1].name, empleados[1].email]

console.log(`{"name: ${name1}, email: ${email1}"}`);

/*email de Luis:*/
let [name] = [empleados[1]];
console.log(name);




