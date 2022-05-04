// Malas practicas 

    // document.write dentro de la funcion varios trabajos dentro de una funcion

// Buenas practicas 

    //return en vez de document.write funcion dentro de una variable - funcion se ve como un valor

//tips 

    //En algunas ocasiones podemos obviar el if y else 


// SUMATORIAS



/*
    function suma(numero1, numero2){
		var numero1 = numero1;
		var numero2 = numero2;

		document.write(numero1 + numero2);
	}

	suma(80, 20)

*/

/*

    function suma(numero1, numero2){
    var numero1 = numero1;
    var numero2 = numero2;

    return(numero1 + numero2);
}

    document.write (suma(50, 50));
*/


    //MAYOR, MENOR QUE
 
    
  /* 
    function numeroMayor(valor1, valor2){
        if (valor1 > valor2) {
            return valor1;
        }
        else {
    
            return valor2;
        }
    }
*/


/* Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan-
*/


//Esta es la estructura basica de una funcion, que ya esta siendo llamda o invacada.

function nombreFuncion(parametros){
    //instrucciones
}

nombreFuncion(); //Invocamos a nuestra funcion.

/* Formas de crear e invocar Funciones

1.- Crear una funcion tradicional, crearla, darle un nombre y parametros



*/

//Funcion tradicional creada y con un nombre asignado

function sumaDeDosValores(){ 
    let valor1 = 5;
    let valor2 = 10;
    let suma = valor1 + valor2;

    console.log("Esta es mi primer funcion: ", suma); //Invocamos a nuestra funcion
}

function sumaDeTresValores(){
    let valor1 = 5;
    let valor2 = 10;
    let valor3 = 15;

    // console.log ("Esta es mi primer funcion ", suma2)
}

sumaDeTresValores(); //Invocamos a nuestra funcion

function sumaDeCuatroValores(){
    let valor1 = 5;
    let valor2 = 10;
    let valor3 = 15;
    let valor4 = 20;

    console.log ("Esta es mi primer funcion". suma3)
}

sumaDeCuatroValores(); //Invocamos a nuestra funcion


// FUNCION CON PARAMETROS ASIGNADOS EN LA LLAMADA

function areaTriangulo(base, altura){
    let area = base * altura / 2;
    console.log("El area del triangulo es: ", area)
}

areaTriangulo(5, 32); //Invocamos a nuestra funcion
areaTriangulo(10, 20); //Invocamos a nuestra funcion
areaTriangulo(15, 23); //Invocamos a nuestra funcion
areaTriangulo(467, 789); //Invocamos a nuestra funcion

/* 

Return

La sentencia return finaliza la ejecucion de la funcion, y especifica un valor para ser devuelto a quien llama a la funcion. O lo que es lo mismo, usamos return para finalizar y tambien para poder asignar el resultado a una variable.
*/

function areaCuadrado(){
    let lado = 5;
    let areaCuadrado = lado * lado;
    return areaCuadrado;

}

areaCuadrado(); //Invocamos a nuestra funcion

console.log ("Usare mi resultado que guarde atneriormente para mostrarte el area del cuadrado"); 

 /*function volumenCubo(){
    let volumen = resultadoQueUsaremosMasTarde * resultadoQueUsaremosMasTarde * resultadoQueUsaremosMasTarde;

    console.log ("El volumen del cubo es: ", volumen);

}

volumenCubo(); //Invocamos a nuestra funcion

*/
// calcular area de un ciruclo: X.X.PI.

/* function areaDelCirculo(){
    radio = 5;
    let area = 3.14 * radio * radio ;

    return areaDelCirculo
}

areaDelCirculo("El area del circulo es: ", areaCirculo);

//Calcular area de un cilindo: area de circulo . longitud.

let resultadoAreaDelCirculo = areaCirculo
*/ 
function volumenDelCilindro(){
    let longitud = 30;
    let volumenCilindro = resultadoAreaDelCirculo * longitud;

    return areaDelCilindro
}

// volumenDelCilindro("El area del cilindro es: ", volumenCilindro)

//Funcion calculadora sencilla

function calculadora(num1, num2){
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    return suma;
    return resta;
    return multiplicacion;
    return division;
}

calculadora(10 , 5); //Invocamos a nuestra funcion

//Funcion calculadora cientifica

function calculadoraCientifica(){
    let exponente;
    let raiz;
    let porcentaje;
    let fraccion;
    let seno;
    let coseno;
    let tangente;

}

//Funciones flechas

//Funcion tradicional

function sumita (numero1, numero2){
    return numero1 + numero2;
}

//Convirtiendo a sumita en una terrorifica funcion flecha

function sumita (numero1, numero2){
    return numero1 + numero2;

}

//Paso 1. Quitamos la palabra resevada function

/* sumita (numero1, numero2){
    return numero1 + numero2;
}
*/
//Paso 2. Quitamos las llaves que delimitan la funcion y en su lugar, abrimos este bloque de texto con una flecha =>

// sumita (numero1, numero2) => return numero1 + numero2;

//Paso 3. Quitamos el return porque ya esta implicitito

var sumita = (numero1, numero2) => numero1 + numero2;

//Esto es una funcion anonima

let x = function(){
    let numero1 = 5;
    let numero2 = 10;
    let suma = numero1 + numero2;
    console.log ("La suma de mi funcion anonima es: ", suma);

}

x(); //Invocamos a nuestra funcion

var y = (numero1, numero2) => numero1 + numero2;


//Otra funcion anonima convertida a una funcion flecha

function saludar (nombre){
    let saludo = "Hola" + nombre;
    console.log (saludo);
}

saludar ("Felipe"); //Invocamos a nuestra funcion
saludar ("Alonso");
saludar ("Juan");

//Convertir mi salud a una funcion flechas

let saludo = (nombre) => console.log ("Hola " + nombre);

saludo("Jesus"); //Invocamos a nuestra funcion
saludo("CEsar");
saludo("Fernando");


// EJERCICOS 2

function cosa(){
    let suma1 = 3;
    let suma2 = 2;

    let resultado1 = suma1 + suma2;

    let mult1 = 2;
    let mult2 = 5;

    let resultado2 = mult1 * mult2;

    let resultadoFinal = resultado1 / resultado2;

    console.log ("El resultado es ", resultado1);
    
}

cosa()


//El otro xd

function otraCosa(){
    let a = 10;
    let b = 11;
    let c = 12;

    let part1 = b * -1;
    let part2 = b*b;
    let part3 = 4 * a * c;
    let part4 = 2 * a;

    
    
}

x = otraCosa

x()
