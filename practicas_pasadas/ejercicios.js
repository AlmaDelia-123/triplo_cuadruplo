//some
const numeros = [3, 7, 10, 18, 21];
const mayores = numeros.some(num => num > 15);
const pares =numeros.some(num => num % 2 === 0);
console.log(mayores);
console.log(pares);

//every
const edades = [18, 22, 30, 25, 19];
const todosMayores = edades.every(edad => edad >= 18);
const todospares = edades.every(edad => edad % 2 === 0);
console.log(todosMayores);
console.log(todospares);

//fill
let letras = ['a', 'b', 'c', 'd', 'e'];
letras.fill('x',0,3);
console.log(letras);
letras.fill('z',2,4);
console.log(letras);

//filter
const productos = [
  { nombre: 'Laptop', precio: 1200 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Teclado', precio: 75 },
  { nombre: 'Monitor', precio: 300 }
];
const masde100 = productos.filter(producto => producto.precio > 100);
console.log(masde100);
const masde5letras = productos.filter(producto => producto.nombre.length > 5);
console.log(masde5letras);

//find
const alumnos = [
  { nombre: 'Ana', edad: 17 },
  { nombre: 'Luis', edad: 20 },
  { nombre: 'Carmen', edad: 19 }
];
const mayor18 = alumnos.find(alumno => alumno.edad > 18);
console.log(mayor18);
const nombreluis = alumnos.find(alumno => alumno.nombre === 'Luis');
console.log(nombreluis);

//findIndex
const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva'];
const indicePera = frutas.findIndex(fruta => fruta === 'pera');
console.log(indicePera);
const frutamasde5letras= frutas.findIndex(fruta => fruta.length > 5);
console.log(frutamasde5letras);

//set
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];
const numerosSet = new Set(numerosDuplicados);
console.log(numerosSet); 
//convierte set nuevamente a array
const numerosUnicos = Array.from(numerosSet);
console.log(numerosUnicos);
//agregar un nuevo numero y verificar que no se repita
if(!numerosSet.has(3)){
    numerosSet.add(3);
    console.log("El número 3 se agregó al conjunto.");
}else{
    console.log("El número 3 ya esta en el conjunto.");
}
if(!numerosSet.has(6)){
    numerosSet.add(6);
    console.log("El número 6 se agregó al conjunto.");
}else{
    console.log("El número 6 ya existe en el conjunto.");
}
console.log(numerosSet);

//crear un arreglo de objetos llamado personas con propiedades nombre, edad y ciudad. Luego, utiliza los métodos some, every, filter y find para realizar las siguientes operaciones:
const personas = [
  { nombre: 'Juan', edad: 25, ciudad: 'Mexico' },
  { nombre: 'María', edad: 30, ciudad: 'Barcelona' },  
  { nombre: 'Pedro', edad: 17, ciudad: 'Madrid' },
  { nombre: 'Ana', edad: 22, ciudad: 'Buenos Aires' },
  { nombre: 'Luis', edad: 15, ciudad: 'Lima' }    
];
//some: si hay alguna persona que viva en Madrid
const madrid = personas.some(persona => persona.ciudad==='Madrid');
console.log(madrid);
//every: verificar si todas las personas son mayores de edad
const todasMayoresde18 = personas.every(persona => persona.edad >= 18);
console.log(todasMayoresde18);
//find obtener la primera persona de mexico
const primeraDeMexico = personas.find(persona => persona.ciudad === 'Mexico');
console.log(primeraDeMexico);
//findindex para obtener la posicion de algien llamado Ana
const indiceAna = personas.findIndex(persona => persona.nombre === 'Ana');
console.log(indiceAna);