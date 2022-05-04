alert ("estoy vivo!!");

//Conversion de datos
console.log("Conversion de cadenas a numeros usando Number"());

console.log(Number("10")); //10
console.log(Number("10.5")); //10.5
console.log(Number("")); //0
console.log(Number(" ")); //0
console.log(Number("10 10 10 10")); //NaN
console.log(Number("Hola soy felipe")); //NaN

//El metodo parseInt analiza una cadena y devuelve un numero entero. Si permite espacios


console.log("Conversion de cadenas en numeros usando usando parseInt()");
console.log(parseInt("-10")); //-10
console.log(parseInt("10.55")); //10.55
console.log(parseInt("10 10 10 10")); //10
console.log(parseInt("10 10.58 10 10")); //10

//El metodo parseFloat analiza una cadena y devuelve un numero decimal. Si permite espacios y solo devuelve el primer numero encontrado.

console.log("Conversion de cadenas en numeros usando parseFloat()");
console.log(parseFloat("-10")); //-10
console.log(parseFloat("10.55")); //10.55
console.log(parseFloat("10 10.58 10 10")); //10


//conversion de numeros a cadenas

String(); //Convierte un numero en una cadena
console.log("Conversacion de numeros a cadenas usando String()");
console.log(String(10)); //"10"
console.log(String(10.5)); //10.5
console.log(String(true)); //true
console.log(String(false)); //false
console.log(String(100 + 23)); //"123"

//Conversion de booleanos a numeros 

console.log("Conversion de booleanos a numeros usando Number()");
console.log(Number(false)); //false
console.log(Number(true)); //true

//Conversion de numeros a booleanos

console.log("Conversion de numeros a booleanos usando Boolean()");
console.log(Boolean(0)); false
console.log(Boolean(1)); true

/* 

typeof

Typeof nos ayuda a saber el tipo de dato que es una variable. La sintaxis es la siguiente:

typeof variable;

*/

console.log("Uso de Typeof");
console.log(typeof "hola"); //String
console.log(typeof 10); //Number
console.log(typeof true); //Boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof 3.1416); //Number
console.log(typeof[]); //object


//EJERCICIO CONVERSION DE DATOS

console.log(number(dato)/String(dato)/Boolean(dato))

console.log(Number(false));
console.log(String("false"));
console.log(Boolean(0));

console.log(Number(true));
console.log(String("true"));
console.log(Boolean(true));

console.log(Number(0));
console.log(String("0"));
console.log(Boolean(0));

console.log(Number(1));
console.log(String("1"));
console.log(Boolean(1));

console.log(Number("0"));
console.log(String("0"));
console.log(Boolean("0"));

console.log(Number("0"));
console.log(String("0"));
console.log(Boolean("0"));

console.log(Number("000"));
console.log(String("000"));
console.log(Boolean("000"));

console.log(Number("1"));
console.log(String("1"));
console.log(Boolean("1"));


// Indefinidos o valor incorrecto
console.log(Number(NaN));
console.log(Boolean(NaN));
console.log(String("NaN"))

console.log(Number(Infinity));
console.log(String("Infinity"));
console.log(Boolean(Infinidy));

console.log(Number(-Infinity));
console.log(String("-Infinity"));
console.log(Boolean(-Infinidy));

console.log(Number(""));
console.log(String("\"\""));
console.log(Boolean("\"\""));

console.log(Number("20"));
console.log(String("20"));
console.log(Boolean("20"));

console.log(Number("Twenty"));
console.log(String("Twenty"));
console.log(Boolean("Twenty"));

console.log(Number(Null));
console.log(String("Null"));
console.log(Boolean(Null));

console.log(Number(undefined));
console.log(String("undefined"));
console.log(Boolean(undefined));

