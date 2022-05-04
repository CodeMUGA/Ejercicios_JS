/* 

Un operador realiza alguna operacion en uno o varios operandos (valor de datos) y devuelve un valor. Por ejemplo 1 + 1 = 2.

Dentro de los operadores mas utilizados en javascript se encuentran:

*/

//Operadores de asignacion ( = )

numero= 10;
numero1 = 20;
numero2 = 30;

adicion = numero1 + numero2;
sustraccion = numero1 + numero2;
multiplicacion = numero1 * numero2;division = numero1 / numero2;
modulo = numero1 & numero2;

console.log ("Operador de asignacion" );
console.log(adicion);
console.log(sustraccion);
console.log(multiplicacion);
console.log(division);
console.log(modulo);

/* Operadores de cadena

Los operadores de cadena nos permiten concatenar cadenas de texto, conocer su longitud, comparar cadenas de texto, buscar una cadena de  texto dentro de otra cadena de texto, etc 

*/

//toLowercase()

let texto1 = "HOLA GENERATION"
let texto2 = texto1.toLocaleLowerCase

console.log(texto2)

//toUpperCase

//sintax de uppercase toUppercase()


//Trim

//Sintaxis de trimm



/*AND (&&)

*Sirve para determinar si dos expresiones son verdaderas o falsas.

- Si ambas expresiones son verdaderas, el resultado es verdadero.
- Si alguna de las expresiones es falsa, el resultado es falso.
- Si ninguna de las expresiones es verdadera, el resultado es falso.
*/

/*
ejemplo1 = 12;
ejemplo2 = 24;
ejemplo3 = 36;

afirmacion1= numero1 > ejemplo2; //false
afirmacion2= numero1 < ejemplo2; //true

console.log("El resultado de las dos afirmacines es:", afirmacion1 && afirmacion2);

afirmacion3= numero3 > ejemplo2; //true
afirmacion4= numero2 > ejemplo; //true

console.log("El resultado de las dos afirmacines es:", afirmacion3 && afirmacion4);

*/

//OR (||)

/*
Sirve para determinar si dos expresiones son falsas. 

- Si ambas expresiones son falsas, el resultado es falso.
- Si alguna de las expresiones es verdadera, el resultado es verdadero.

*/

num1 = 12;
num2 = 24;

afir1 = num1 < num2; //true
afir2 = num1 != num2; //true

console.log(afir1);
console.log(afir2);
console.log("El resultado de las dos afirmaciones es: ", afir1 || afir2);

//NOT (!)

/*

Siempre devuelve lo contrario del resultado de la expresion.

- Si la expresion es verdadera, el resultado es falso.
- Si la expresion es falsa, el resultado es verdaero.

*/

a = 12;
b = 24;

afir4 = a < b; //(verdadero)
afir5 = a != b; //(verdadero)

console.log("El resultado de la afirmacion es :", !afir4);
console.log("El resultado de las afirmacion es :", !afir5);

// Operadores de comparacion ( ==, !=, >, <, >=, <= )

//Operador igual ( == )

/* Operadores de

Sirve para comparar si dos valores son iguales.

*/

let j = 12;
let k = "13";
let l = 13;

console.log("El resultado de la comparacion usando el operador == de a y b es :", j == k);
console.log("El resultado de la comparacion usando el operador ==  de a y c es :", j == l);
console.log("El resultado de la comparacionusando el operador ==  de b y c es :", k == l);
console.log("El resultado de la comparacionusando el operador ==  de b y c es :", k === l);

//Operador diferente ( != )

m = 13;
n = 12;
o = 12;

console.log ("El resultado de la comparacion usando el operador != de m y n es :", m != n);
console.log("El resultado de la comparacion usando el operador != de n y o ", n != o);
console.log("El resultado de  la comparacion usando el operador != de m y o ", m != o);


//Operador de igualdad estricta ( === )

/* 

sirve para comparar si dos valores son iguales y de mismo tipo.

*/

valora = 23;
valorb = "23";
valorc = 13;
valord = "texto 23";

console.log ("El valor a y el valor b son iguales?:", valora === valorb);

/*
console.log("Operadores de Comparacion ( ==, !=, >, < >=, <= )");
console.log("Operadores Aritmeticos ( +, -, *, /, % )");

*/

/* Operador de desigualdad estricta ( !== )
Sirve para comparar si dos valores son estrictamente diferentes (diferente valor o diferente tipo de dato).

*/

let ejemplo1 = 23;
let ejemplo2 = 13;
let textodejemplo = "23";
let textodejemplo2 = "texto 2";

// console.log ("El numero 23 y el texto 23 son estrictamente diferentes", ejemplo1 !== textoejemplo); //Imprime true porque tiene el mismo valor pero son distintos tipos de datos.

//Operador mayor que ( > )
//Sirve para determinar si un valor es mayor que otro.

console.log("Operador Mayor que ( > )");
console.log("El numero 23 es mayor que el numero 13? :", ejemplo1 > ejemplo2);
//Imprime true porque el numero 23 es mayor que el numero 13.

//operador menor que ( < )
//Sirve para determinar si un valor es menor que otro.

console.log("Operador menor que ( < )");
console.log("El numero 23 es menor que el numero 13? :", ejemplo1 < ejemplo2);
//Imprume true porque el numero 13 es menor que el numero 23

// Operador maror o igual que ( >= )
//Sirve para determinar si un valor es maoyr o igual que otro.

console.log("El numero 23 es mayor o igual que el numero 23", ejemplo1 >= ejemplo2);
// Imprime true porque el numero 23 es mayor o igual que el numero 13.

//Operador menor o igual que ( <= )
//Sirve para determinar si un valor es menor o igual que el otro.

console.log("El numero 13 es menor o igual que el numero 23", ejemplo2 <= ejemplo1);
//Imrpime true porque el numero 13 es menor o igual que el 23.

//EJERCICIO DE COMBINACION DE OPERADORES1

//!Combinando operaciones

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op); // Imprime true



//Operador aritmetico ( +, -, *, /, % )



function operacionesMatematicas(){

    numero1 = 10;
    numero2 = 2;
    numero3 = "5";

    console.log("El resultado de la suma de 10 + 2 es: ", numero1 + numero2);
    console.log("El resultado de la resta de 10 - 2 es: ", numero1 - numero2);
    console.log("El resultado de la multilicacion de 10 * 2 es: ", numero1 * numero2);
    console.log("El resultado de la division de 10 / 2 es: ", numero1 / numero2);
    // Modulo o residuo
    console.log("El resultado del modulo de 10 % 2 es: ", numero1 % numero2);
    //Exponenciacion
    console.log("El resultado de la exponenciacion de 10 ** 2 es: ", numero1 ** numero2);
    //Raiz cuadrada
    console.log("El resultado de la raiz cuadrada de 10 es: ", Math.sqrt(numero1));
    
}

operacionesMatematicas();

//INCREMENTO Y DECREMENTO = 10;

primerValor = 10;
segundoValor = 2;


console.log("Incremento de 10: ", ++ primerValor);
console.log("Decremento de 2: ", -- segundoValor);
console.log("Incremento en 5 el valor de 10", primerValor += 5);
console.log("Nuevo valor de 'primer valor' ", primerValor);
console.log("incremento en5 el valor de 15", primerValor += 5);
console.log("Nuevo valor de 'Primer valor' ", primerValor);
console.log("Decremento de 2", segundoValor);
console.log()