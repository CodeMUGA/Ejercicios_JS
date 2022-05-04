/*

Arreglos, Arrays o Matrices

Definicion:

Un array es un conjunto de datos que se pueden almaceenar en una sola variable.

Cuando tenemos una variable, la usamos para guardar un dato.
Cuando tenemos un array, guardamos esos datos en una lista.

Un array ya no es un tipo de dato primitivo, si no que es un conjunto porque es considerado una estructura de datos.

*/

let variable = 1; //Es una variable con un solo valor.

let array = [1, 2, 3, 4, 5]; //Es un array con varios valores.

/*

*Formas de crear un array o arreglo

1- Utilizando la palabra reservada "new" y el metodo "Array"

!- En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).


*/

var arcoiris = new Array();

// Declaramos un nombre para nuestro arreglo (arcoiris)

// y le asigamos el metodo "Array" usando la palabra reservada "new"

var arcoiris = new Array(7); //Este arreglo tendra 7 elementos

var arcoiris = new Array("rojo", "azul", "amarillo", "violeta", "naranja", "rosa"); //Declaramos un arreglo con 7 posiciones


/*

?- Segunda forma de crear un arreglo (favorita de Felipe)

!- La segunda forma es crear un array a traves de los corchetes. Esta forma es muy utilizada en los arrays de JS, ya que es la forma mas sencilla para crearlos.

*/

var arcoiris = ["rojo", "verde", "azul", "violeta", "naranja", "rosa"]; //Declaramos un arreglo con 7 posiciones


// EJEMPLOS DE ARREGLOS 

var listaSuper = new Array("Leche", "Pan", "Dulces"); //Primera forma
var listaSuper = ["Leche", "Pan", "Dulces"]; //Segunda forma



var diasSemana = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo");
var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

//?- Investigar si podemos hace arreglos con otros tipos de datos.

/*

*Acceder a elementos de un Array

Antes de hablar de elementos de un Array, es importante definir 2 conceptos:

- Cantidad de elementos.
- Indices de esos elementos (posiciones del elemento).

*/

var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

//Elementos: 7 elementos
//Indices (Posiciones): 0, 1, 2, 3, 4, 5, 6

// 0 - Lunes
// 1 - Martes
// 2 - Miercoles
// 3 - Jueves
// 4 - Viernes
// 5 - Sabado
// 6 - Domingo

//? Acceder a un elemento de un array

//Sintaxis general para imprimir un elemento de un array
//console.log(nombreDelArreglo[valorDelIndice]);

console.log(diasSemana[4]); //Imprime el elemento de la posicion 4

console.log(diasSemana[0]); //Imprime el elemento de la posicion 0

console.log(diasSemana[9]); //Imprime el elemento de la posicion 9. En este caso no esta definido, por lo que muestra "undefine"

//* Arrays asociativos

/*
Un array asociativo es un array que contiene una serie de datos que se almacenan en una estructura de datos qeu se llama objeto.
Nos sirve hacerlo de este modo porque podemos tener un control mas especifico al momento de llamar la posicion de ese elemento. Por ejemplo, nosotros en un array normal, llamamos a los elementos por su indice (0, 1 , 2, 3...), en cambio en un array asociativo llamamos a los elementos por su nombre (nombre, apellido, edad, etc...).

En pocas palabras, cambiamos y asociamos el numero del indice por una cadena de texto para poder identificar la posicion del elemento de una mejor forma.
*/


let micomputadora = {
    marca: "Asus",
    modelo: "PRIME",
    procesador: "Ryzen 7 4000",
    ram: "16 GB",
    almacenamiento: "2 TB",
}

console.log(micomputadora.ram); //Imprime el elemento (indice) de la posicion ram (0)
console.log(micomputadora[1]); //Imprime el elemento de la posicion 1. //! En este caso imprime undefined, ya que el nombre del indice cambió a "modelo"


let parciipantes = {
    nombnre : "Felipe",
    edad: "30",
    github: "enlance",
    repositorios: "entregado",
}



/*
* Metodos de los arrays

En los arrays, tenemos ciertos metodos que nos permiten manipular los elementos de un array. Estos nos permiten desde agregar elementos, eliminar elementos, hasta reordenarlos.

Podemos dividir estos metodos en 3 grupos:

- metodos transformadores: Son los que nos permiten manipular los elementos de un arra y y cambiar su estructura.
- metodos accesores: Son los que nos permiten acceder a los elementos de un array. 
- metodos iteradores: Son los que nos permiten iterar sobre los elementos de un array, recorriendolos.

*/
console.log("");
console.log("----------------------------------------------------");
console.log("")



var arrayEjemplo = [
    "Manzanas", 
    "Peras", 
    "Zanahorias",
    "Duraznos", 
    "Melones", 
    "Sandias", 
    "Aguacates", 
    "Naranjas"]

console.log("Este es mi arreglo original", arrayEjemplo);


//? Metodos transformadores

//* Metodo push(): Agregar un elemento al final del arreglo.

arrayEjemplo.push("Uvas");
console.log("Agregue uvas al arreglo original", arrayEjemplo)

//* Metodo pop(): Eliminar un elemento del final del arreglo.

arrayEjemplo.pop(); //No necesito pasar parametro, porque elimina el ultimo elemento.
console.log("Elimine el ultimo elemento agregado del arreglo, que eran las uvas", arrayEjemplo);

//* Metodo unshift(): Agregar uno o mas elementos al principio del arreglo.

arrayEjemplo.unshift("Fresas", "Platanitos");
console.log("Agregue dos elementos al principio del arreglo, que son fresas y platanos", arrayEjemplo);

//* Metodo shift(): ELiminar un elemento del principio del arreglo
arrayEjemplo.shift();
console.log("Elimine el primer elemento del arreglo, que era 'fresas'", arrayEjemplo);

//* reverse(): reSERVA LOS ELEMENTOS DEL ARREGLO
arrayEjemplo.reverse();
console.log("Reversa los elementos del arreglo", arrayEjemplo);

let saludo = ["Hola", "soy", "Felipe"];
saludo.reverse(); 
//! Revisar si hay parametros para este metodo
console.log(saludo);

//! Que determina el orden de los elementos de un array?
//* sort(); Ordena los elementos del arreglos
arrayEjemplo.sort(); //! Revisar si hay parametros para este metodo
console.log("Ordene los elementos del arreglo", arrayEjemplo);

paquetaxo = ["Manzanas", "Peras", 1, false];
paquetaxo.sort();
console.log("Este es mi arreglo paquetaxo", paquetaxo);

//* slice(); Extrae una seccion de la cadena, devolvemos una cadena nueva copiando el array porque no lo modificamos

var cadena1 = "Hola generation";
var cadena2 = cadena1.slice(3, -2); // Devuelve "a Generati" porque comenzamos desde el caracter 3, y terminamos en el caracter -2

console.log("Esta es la cadena1", cadena2);


var cadena3 = ["Hola", "Generation", "de", "JavaScript"];
var cadena4 = cadena3.slice(3); // JavaScript

var cadena5 = cadena3[1].slice(1, 3);
console.log("Selecciona Javascript y lo quiero cortar", cadena5);



console.log("Selecciona JavaScript y lo quiero cortar", cadena5);

console.log("Esta es la cadena 4", cadena4);

/* forEach(); Recorre el array y devuelve un nuevo array con los elementos que cumplan la condicion.

var frutas = ["manzana", "pera", "uva", "naranja", "sandia"];
var forEach = frutas.forEach(fruta => console.log("La fruta " + fruta + " se encuentra en la posicion")); //Imprimimos el array
*/

// Cortando arrays de numeros
var arrayNumeracion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Este es mi array de numeracion", arrayNumeracion);
var nuevaNumeracion = arrayNumeracion.slice(0, -5) //de 3 a 6
console.log("Esta es la nueva numeracion", nuevaNumeracion)

//CORTANDO CADENAS DE TEXTO
var saludo5 = "Hola generation de JavaScript"; //Letra por letra
console.log("Este es mi saludo", saludo5);
var nuevoSaludo = saludo5.slice(2); // Felipe a Maqueda
console.log("Este es mi nuevo saludo", nuevoSaludo); 

//Ejemplos del mundo real usando slice

/*
CREAMOS UN CORREO ELECTRONICO
Felipe
Maqueda

Crea un correo con las 3 primeras letras del nombre y apellido = 
felma@generation.com.mx


CREAMOS UN CUPON PERSONALIZADO CON EL NOMBRE Y APELLIDO DEL USUARIO

Miguel
Anaya

Luis
Gaytan

cupon = mian100
cupon = lugo200

*/

/*

?Metodo splice()

Hay un metodo muy especial, que se llama splice, y nos permite modificar el contenido de un array. Podemos usarlo en tres formas:

    - Para eliminar o suprimir elementos del array.
    - Para agregar o insertar nuevos elementos al array.
    - Para reemplazar elementos existentes del array.

?Esta es la sintaxis general del metodo splice


splice(indice de inicio, cantidadDeElementosAEliminar, nuevoElemento1, nuevoElemento2, ..., nuevoElemento

*/

console.log("");
console.log("---------------");
console.log("")

//Crear un array de ejemplo llamado meses

let meses = ["enero", "febrero", "lunes", "martes", "marzo"];
console.log("Este es mi array original de meses y dias revueltos", meses);

/* 

*1- Eliminar elementos del array usando splice

Para suprimir valores del array debemos especificar dos argumentos: La posicion del elemento que deseamos eliminar, y el numero de elementos a eliminar

!Sintasxis del splice para eliminar elementos: splice (posicionInicial, cantidadDelElementoAeliminar)


*/

meses.splice(2, 2); //Elimina los dos elementos de la posicion 2
console.log("Elimine los doa elementos que no son meses del arreglo", meses);

//! EJERCICIO EXPRES!!!

var todosLosMesesDelAnio = ["enero", "febrero", "marzo", "abril", "mayo", "Junio", "Julio", "Agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log("Este es mi array de meses", todosLosMesesDelAnio);

todosLosMesesDelAnio.splice(3, 1);
console.log("Elimine todos los mese que tienen 30 dias", todosLosMesesDelAnio);

todosLosMesesDelAnio.splice(4, 1);
console.log("Elimine todos los mese que tienen 30 dias", todosLosMesesDelAnio);

todosLosMesesDelAnio.splice(7, 1);
console.log("Elimine todos los mese que tienen 30 dias", todosLosMesesDelAnio);

todosLosMesesDelAnio.splice(10, 1);
console.log("Elimine todos los mese que tienen 30 dias", todosLosMesesDelAnio);


/*
*2.- Eliminar y agregar elementos al array usando splice 

El metodo splice tambie npermite agregar nuevos elementos justo despues de la operacion de borrado. Solo tenemos que pasar los elementos que queramos agregar despues de la operacion de borrado. Solo
!- La sintaxis para eliminar y agregar elementos es: splice(posicionInicial, cantidadDelElementoAeliminar, nuevoElemento1, nuevoElemento2, ..., nuevoElementoN)

*/

let meses2 = ["enero", "febrero", "lunes", "martes"];
console.log("Esto es un nuevo array llamado meses2", meses2); //Imprimimos el array





/*
*Agregar nuevos elementos al arreglo sin eliminar ningun elemento

En este ultimo ejemplo, podemos agregar nuevos elementos sin eliminar ningun elemento del array, definiendo en 0 el parametro que indica la cantidad de elementos a eliminar.

*/

let meses3 = ["enero", "febrero", "lunes", "martes"];
console.log("Este es un nuevo array llamado meses3", meses3);

meses3.splice(2, 0, "abril", "mayo");
console.log("Agregue nuevos elementos al array", meses3);

//!- Para recapitular: Usamos splice cuando queremos eliminar o agregar elementos nuevos al array, o cuuando queremos separar un arreglo que tiene contenido mixtro.

/*
    *Declara un array llamado "carreritas" con los siguentes valores: Lucia, Robertom Maria, Jesus, Andrea y Jo´se (éste será el orden de sus posiciones dentro de una carrera).
    *Deberas imprimir en consola la clasificacion actual.


*/

let carreritas = ["Lucia", "Robert", "Maria", "Jesus", "Andrea", "Jose"];
console.log("Este es el array llamado 'carreritas'", carreritas);



//   *La carrera continua y se van modificando esas posiciones:

carreritas.splice(4, 1); //Movemos a Andrea
carreritas.splice(2, 0, "Andrea"); //Posicionamos a Andrea delante de Maria
carreritas.splice(5, 1) //Descalificamos a jose
carreritas.splice(1, 0, "Cristobal", "Fernanda", "Armando"); //Agregamos nuevos competidores
carreritas.splice(0, 0, "Federico"); //Federico toma la delantera



console.log("Posiciones actuales de la carrera", carreritas);