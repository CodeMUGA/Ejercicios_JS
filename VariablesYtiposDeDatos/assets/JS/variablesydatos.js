/* Que es un variable?

Una variable es un espacio que guardamos en memoria. Imaginemos un vaso de agua que para poder convertirlo en una variable, tengo que agregarle cualquier dato. Si en este caso vemos al agua como información, al momento de agregar agua al vaso se convierte en una variable. Se llama variable porque se puede cambiar su valor.
*/




/* lert ("Estoy vivo!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

recipiente= "agua"
recipiente= "cafe"
recipiente= "leche"
recipiente= "azucar"
recipiente= "miel"
recipiente= "chocolate"
recipiente= "cafeconleche"

console.log("recipiente"); //Esto nos sirve para mostrar en consola nuestra informacion
*/




//console.log("recipiente"); JS es CaseSensitive (sensible a mayusculas y minusculas)

/*Tipos de variables
- var
- let
- const

Declalar, inicializar y modificar variable
*/

/* var nombre= "felipe";
let apellido= "maqueda";
const edad= "30";


let perritos="Toby";
perrito= "Manchas";


console.log("perrito");
*/ 




 /* var gatito= "rocky";
var gatito= "Bigotes" ;

console.log("gatito") */

//Las constantes deben declararse e inicializarse al mismo tiempo. No podemos dejar constantes sin inivializar porque no marcan error.




/*
const numero= 15;
const numero2= 20;
const formula= numero + numero2;

let numero5
    console.log(numero5); //Imprime undefined. No es un error.

    //Este es otro ejemplo de modificacion

let numero6= 10; //declaramos e inicializamos la variable con un valor
    numero6= 15; //modificamos el valor de la variables
    console.log(numero6); //imprimimos el valor de la variable, que en este caso sera el ultimo valor asignado a la variable

//Ejemplo de descuento de zapatos

let zapatosnegros=500; //precio con descuento
zapatosnegros=250; //Precio modificado del jueves

console.log("Precio original de zapatos",zapatosnegros);
console.log("Precio con descuento de zapatos",zapatosnegros);
*/



//Crear multiples variables en una sola linea (separadas por coma)

/* let nombre1;
let nombre2;
let nombre3;

nombre1= "juan"
nombre2= "Adriana"
nombre3= "Ivonne"

let nombre4, nombre5, nombre6, nombre7;
nombre4="Argemiro", nombre5="Briana", nombre6="Carmen", nombre7="Felipe"

console.log("nombre1");
console.log("nombre2");
console.log("nombre3");
console.log("nombre4");
console.log("nombre5");
console.log("nombre6");

*/

/*Tipos de datos

-string
-number
-boolean
-undefined
-null
-NaN

*/


//Ejemplo de datos tipo string

let string= "Hola, soy una cadena de texto con comillas dobles";
let strin2= 'Hola, soy una cadena de texto con comillas simples';
let string33= `Hola, soy una cadena de texto con comillas invertidas`;
console.log("string");
console.log("string2");
console.log("string3");

//Ejemplo de tipo de datos numéricos

//Calculo de area de un triangulo
let base=15;
let altura=55;
let area= base*altura/2

console.log(area)

let num4= "manco como";
let num5= "yahir";
let num7= 17;
let suma= num4 + " " + num5 + num7;

console.log(suma)

//Ejemplo de tipo de datos booleanos

datoBooleano=true;
datoBooleano2=false;

//Ejemplo de tipo de datos undefined

let perritos
let alumno
let fruta
let comida = null;

console.log(fruta)

//EJERCICIOS

let costoHora= 82.76;
let horasTrabajadas= 40;
let primaDominical= 0.05;
let nombreEmpleado1= "Juan";
let nombreEmpleado2= "Adriana";
bonoExtra= 1000;  //Solo si el trabajador trabaja mas de 45 hrs a la semana


let sueldoBase= costoHora * horasTrabajadas;
let primaDominicalTotal= sueldoBase * primaDominical;


console.log("El nombre de nuestro primer trabajador es ", nombreEmpleado1);
console.log("El sueldo base de nuestro primer trabajador es ", sueldoBase);
console.log("La prima dominical de nuestro trabajador es ", primaDominicalTotal);




//Ejercicio porque me lo pidio Felipe

//strings - Letra de Flowers and You

let string1= "I'm heartsick and well rehearsed";
let string2= 'Highly decorated with a badge that reads "it could be worse"';
let string3= `So prideful, `;
let string4= "I choose to live in disguise"
let string5= "with a leve set for my heavy eyes"

console.log(string1 + "\n"  + string2 + "\n" + string3 + "\n" + string4 + "\n" + string5)

// undefined

let banda
let nombreDeCancion
let letra
let album
let genero

// boolean

aSebastianLeGustaLaBanda= true;
sebastianVioLaBandaEnVivo= false;

// number / string


let perrito1="Bimbo"
let edadperrito1= 2.6


let perrito2="Lola"
let edadperrito2= 2

let perrito3="Negra"
let edadperrito3= 1

console.log(perrito1 + " " + "Tiene" + " " + edadperrito1 + " " + "años")
console.log(perrito2 + " " + "Tiene" + " " + edadperrito2 + " " + "años")
console.log(perrito3 + " " + "Tiene" + " " + edadperrito3 + " " + "años")



//Conversion de datos

//Cadenas de texto a numeros.

console.log(Number("50"));
console.log(Number("50.5"));
console.log(Number(""));
console.log(Number("          "));
console.log(Number("Felipe"));
console.log(Number("9899100"));

Number("loquevamosacambiar");

//Numeros a cadenas de texto

console.log(String(50))
console.log(String(true));
console.log(String(null));


//Metodos numericos


//Numeros decimales
console.log(parseInt(50.57));

//Redondear decimales
console.log(Math.round(50.57));
console.log(toFixed(50.57))