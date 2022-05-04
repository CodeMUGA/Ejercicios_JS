let figura=prompt('Digita la figura, 1 es triangulo,2 cuadrado 3 rectangulo, 4 circulo');


/*
    function areaTriangulo(base,altura){
        let base=ParseFloat(prompt('Digita la base'));
        let altura=parseFloat(prompt('Digita la altura'));
        let area=base*altura/2;
        console.log(area);
    }
        areaTriangulo();
    function areaCuadrado(base,altura){
        let base=parseFloat(prompt('Digita la base'));
        let altura=parseFloat(prompt('Digita la altura'));
        let area=base*altura;
        console.log(area);
    }
*/

switch(figura){
    case "1":
        let base=parseFloat(prompt('DIgita la base'));
        let altura=parseFloat(prompt('DIgita la altura'));
        let area=base*altura/2;
        alert(area);
    break;
    case "2":
        let base1=parseFloat(prompt('DIgita la base'));
        let altura1=parseFloat(prompt('DIgita la base'));
        let area1=base1*altura1;
        alert(area1);
    break;
    case "3":
        let base2=parseFloat(prompt('DIgita la base'));
        let altura2=parseFloat(prompt('DIgita la base'));
        let area2=base2*altura2;
        alert(area2);
    break;
    case "4":
        let radio3=parseFloat(prompt('Digita el radio de un ciruclo'));
        let area3=3.14*radio3**2;
        alert(area3);
    break;
    default:
        console.log('no pusiste el numero adecuado de lados');
    } 