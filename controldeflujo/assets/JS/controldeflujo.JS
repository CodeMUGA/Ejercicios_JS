/*Control de flujo

Cuando hablamos de control de flujo hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el control de flujo se vea modificado por una instruccion de control (por ejemolo, una condicional), el control de flujo se mantiene en el mismo orden en el que se escriben las instrucciones /de arriba a abajo y de izquierda a derecha) */

/*Condicionales de la programa

Las condicionales nos permiten evaluar si una condicion cumple o no con lo que estemos evaluando. Su sintaxis es muy sencilla, tanto que podemos agregar condiciones intermedias en el caso de que no se cumpla la primera evaluacion y se deban evaluar mas.

*/

/*

if (la camisa de felipe esta limpia) {
    // felipe va a la fiesta
}

if (si)

*/

//Felipe quiere ir a una fiesta, pero Felipe es menor de edad y en esa fiesta daran alcohol. Ayuda aFelipe a decir si puede o no ir a la fiesta.

const edadFelipe = 17;

if (edadFelipe < 18){
    console.log("Lo siento Felipe, no puedes ir a la fiesta");
}

//Sentencia else ("si no" o "de otro modo")

const edadFelipe2 = 17 //Felipe es menor de edad

if (edadFelipe2 < 18){ //Si la sentencia es verdadera
    console.log("Lo siento Felipe, no puedes ir a la fiesta");

}   else {
        console.log("Felipe puede ir a la fiesta"); //Si la sentencia es falsa se ejecuta esta esta otra linea de codigo
    }

//PROMPT Nos irve para solicitar datos al usuario y almacenarlos en una variable

var hora = prompt("Ingrese la hora actual - solo la hora por favor");

if (hora < 18){
    console.log("Buenos dias, hace mucho calor, toma agua");

} else{
    console.log("Buenas tardes, hace mucho frio, por favor usa un sueter");
}

/*
!VALORES QUE SE EVALUAN COMO FALSOS
Los valores que se evaluan como falsos son:
    -false
    -0
    -"" (cadena vacia)
    -null
    -undefined
    -NaN (Not a Number)

*/

/*

else if ("de otro modo si")

Sintaxis de un else if

else if (la camisa de felipe esta limpia){
    //felipe va a la fiesta
}

*/


var hora = prompt("Ingresa solo la hora actual en formato de 24 horas");

if (hora < 13){
    console.log("Es de mañana, desayuna rico");
} else if (hora <= 19){
    console.log("Es de tarde, come rico");
} else {
    console.log("Es de noche, cena rico");
}

/* var hora = prompt("Ingresa solo la hora actual en formato de 24 horas");

if (hora < 12){
    console.log("Es de mañana, desayuna rico");
} else if (hora >= 12) &&(hora <=18){
    console.log("Buenas tardes");
} else {
    console.log("Es de noche");

    //El uso de operadores logicos en condiciones
}
*/

//Ejercicio de Gera
/*

var hora = prompt("Ingresa solo la hora actual en formato de 24 horas");

if (hora >= 0 && hora <= 24){
    if (hora >= 7 && hora <= 11){
        console.log("Buenos dias.")
    }
}   else if (hora >= 12 && hora <= 18){
    console.log("Buenas tardes.")
}   else if (hora >= 18 && hora <= 24){
    console.log("Buenas noches");
}   else {
    console.log("Buenas madrugadas.")
}   else {
    console.log("Dato mal ingresado");
}
*/

// Otro bonito ejemplo de felipe. 

//Validacon para un nombre de usuario de mi PIb usando else if

/* 

nombreIngresado = (prompt("Ingrese su nombre"));

nombreIngresado = nombreIngresado.toUpperCase()

if (nombreIngresado === "Felipe"){
    console.log("Hola Felipe");
}   else if (nonbreIngresado === "Juan Carlos") {
    console.log("Hola Juan Carlos");
}   else{
    console.log("Hola desconocido");
}
*/

/* Operador ternario

Estructura de un operador ternario

resultado = (condicion)?valor1:valor2;

*/

//Ayuda al profesor Felipe a calificar a sus alumnos


var cantidadReprobados = 43;

if (cantidadReprobados <30){
    cantidadReprobados = "Felipe tuvo pocos reprobados";
}

else{
    cantidadReprobados ="Felipe tuvo muchos reprobados";
}

console.log("calificacion");

//TRansformando a un operador ternario

var reprobados = cantidadReprobados <30 ? "Felipe tuvo pocos reprobados" : "Felipe tuvo muchos reprobados"

//Otro ejercico de cambio de condicionales if a operador ternario

if (hora <18){
    console.log("Buenos dias, hace mucho calor, toma agua"); //verdadero
}   else { //falsos
    console.log("Buenas noches, hace mucho frio, por favor usa un sueter");
}

hora <18 ? "Buenos dias, hace mucho calor, toma agua" : "Buenos dias, hace mucho frio, por favor usa un sueter"

/*
!- No lo olvides!!!

- if devuelve un posible resultado
- if + else devuelven 2 posibles resultados
- if + else if devuelven 3  o mas posibles resultados
*/

/*Condicional Switch

Este condicional nos permite hacer multiples operaciones y

*/

//! Estructura basica de un Switch

/*

switch (expresion) {
    case valor1:
        /bloque de codigo que se ejecutra si la expresion es igual a valor1
        break;
    case valor2:
        /bloque de codigo que se ejecuta si la exoresion es igual a valor2
        break;
    case valor3: 
    /bloque de codig mque se ejecuta si la expresion es igual a valor3
    break;
    default:
        /bloque de codigo que se ejecuta si no se cumple ninghna de las condiciones anteriores

        switch: iniciar nuestra condicion
        case: evaluar la condiciion
        break: terminar la condicion
        default: terminaomos la iteracion y mostramos el resulado final
}

*/

    opcion = prompt("Ingrese una opcion del 1 al 4");

    switch (opcion) {
        case "1":
            console.log("Seleccionaste la opcion 1")
            break;
        case "2":
            console.log("Selecionaste la opcion 2")
            break;
        case "3":
            console.log("Seleccionaste la opcion 3")
            break;
        case "4":
            console.log("Seleccionaste la opcion 4")
            break;
        default:
            console.log("Me quieres engañar, no estas ingresando una opcion valida")
    }

    console.log(typeof(opcion));

/*

ToDo:

- Ejercicio de signos <odiacales de la sesión "Diseño de altoritmos y solucion de problemas"

- Ejercicio del Menu para dibujar las 4 figuras geometricas, añadiendo opciones para calcular area y perimetro de cada figura.
(Cuadrado, circulo, rectangulo, triangulo)

! -- Instrucciones para estas tareas --

Crear los ejercicios en una carpeta de la sesion.

El repositorio se llama Control de Flujo.

La informacion debe ser ingresada por el usuario, y los resultados mostrados en consola a través de un prompt.

En Canvas se va a subir el link del repositorio.

El repositorio se sube el miercoles en la 


*/